<?php

namespace App\Http\Traits;

use App\Models\User;
use App\Tenant;
use App\Landlord;
use App\Models\Attachment;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Notifications\DatabaseNotification;
use Spatie\MediaLibrary\Models\Media;

trait MessageTrait
{
  public function getAdminConversation(User $tenant)
  {
    $adminIds = User::admin()->pluck('id');
    $messages = DatabaseNotification::where(function ($q) use ($tenant, $adminIds) {
      // $q->where('data->sender_id', auth()->id());
      $q->whereIn('data->sender_id', $adminIds);
      $q->where('data->receiver_id', $tenant->id);
    })
      ->orWhere(function ($q) use ($tenant, $adminIds) {
        // $q->where('data->receiver_id', auth()->id());
        $q->whereIn('data->receiver_id', $adminIds);
        $q->where('data->sender_id', $tenant->id);
      })
      ->when(request('search'), function ($query) {
        $query->where(function ($q) {
          $q->whereRaw('LOWER(data->"$.sender_name") like  ?', '%' . strtolower(request('search')) . '%');
          $q->orWhereRaw('LOWER(data->"$.receiver_name") like  ?', '%' . strtolower(request('search')) . '%');
          $q->orWhereRaw('LOWER(data->"$.body") like  ?', '%' . strtolower(request('search')) . '%');
        });
      })
      ->orderBy('created_at', 'desc')
      ->get();

    $messages->transform(function ($message) use ($adminIds) {
      return [
        'id' => $message->id,
        'data' => $message->data,
        'created_at' => Carbon::parse($message->created_at)->diffForHumans(),
        // 'received' => $message->notifiable_id === auth()->id(),
        'received' => !in_array($message->notifiable_id, $adminIds->toArray()),
        'avatar' => User::find($message->data['sender_id'])->profile_photo_url ?? '',
        'is_user' => true,
        'read_at' => $message->read_at,
        'attachments' => isset($message->data['attachment_id'])
            ? Attachment::with('media')->where('id', $message->data['attachment_id'])
                ->first()
                ->media
                ->transform(function($att) {
                    return [
                        'id' => $att->id,
                        'file_name' => $att->file_name
                    ];
                })->toArray()
            : null
      ];
    });

    return $messages;
  }
  public function getUserConversation()
  {
    $adminIds = User::admin()->pluck('id');
    $messages = DatabaseNotification::where(function ($q) use ($adminIds) {
      $q->where('data->sender_id', auth()->id());
      $q->whereIn('data->receiver_id', $adminIds);
    })
      ->orWhere(function ($q) use ($adminIds) {
        $q->where('data->receiver_id', auth()->id());
        $q->whereIn('data->sender_id', $adminIds);
      })
      ->when(request('search'), function ($query) {
        $query->where(function ($q) {
          $q->whereRaw('LOWER(data->"$.sender_name") like  ?', '%' . strtolower(request('search')) . '%');
          $q->orWhereRaw('LOWER(data->"$.receiver_name") like  ?', '%' . strtolower(request('search')) . '%');
          $q->orWhereRaw('LOWER(data->"$.body") like  ?', '%' . strtolower(request('search')) . '%');
        });
      })
      ->where('data->deleted_from_receiver', 0)
      ->orderBy('created_at', 'desc')
      ->get();

    $messages->transform(function ($message) {

      return [
        'id' => $message->id,
        'data' => $message->data,
        'created_at' => Carbon::parse($message->created_at)->diffForHumans(),
        'received' => $message->notifiable_id !== auth()->id(),
        'avatar' => User::find($message->data['sender_id'])->profile_photo_url ?? '',
        'is_user' => true,
        'read_at' => $message->read_at,
        'attachments' => isset($message->data['attachment_id'])
            ? Attachment::with('media')->where('id', $message->data['attachment_id'])
                ->first()
                ->media
                ->transform(function($att) {
                    return [
                        'id' => $att->id,
                        'file_name' => $att->file_name
                    ];
                })->toArray()
            : null
      ];
    });

    return $messages;
  }

  public function getLatestMessage(User $user)
  {
    return $user->notifications()->latest()->first();
  }

  public function getReceivedMessages()
  {
    $users = User::user()->get();
    $admins = User::admin()->get();
    $messages = DatabaseNotification::whereIn('notifiable_id', $admins->pluck('id'))
      ->where('type', 'App\Notifications\SyncMessageNotification')
      ->when(!request('with_deleted'), function ($query) {
        $query->where('data->deleted_from_receiver', 0);
      })
      ->when(request('search'), function ($query) {
        $query->where(function ($q) {
          $q->whereRaw('LOWER(data->"$.sender_name") like  ?', '%' . strtolower(request('search')) . '%');
          $q->orWhereRaw('LOWER(data->"$.body") like  ?', '%' . strtolower(request('search')) . '%');
        });
      })
      ->latest()
      ->get();

    $messages->transform(function ($message) use ($users, $admins) {
      return [
        'id' => $message->id,
        'data' => $message->data,
        'created_at' => Carbon::parse($message->created_at)->diffForHumans(),
        // 'received' => $message->notifiable_id === auth()->id(),
        'received' => true,
        'avatar' => User::find($message->data['sender_id'])->profile_photo_url ?? '',
        'replay' => old('id') === $message->id ? true : false,
        'is_user' => $users->contains($message->data['sender_id']),
        'is_admin' => $admins->contains($message->data['sender_id']),
        'read_at' => $message->read_at,
        'attachments' => isset($message->data['attachment_id'])
            ? Attachment::with('media')->where('id', $message->data['attachment_id'])
                ->first()
                ->media
                ->transform(function($att) {
                    return [
                        'id' => $att->id,
                        'file_name' => $att->file_name
                    ];
                })->toArray()
            : null
      ];
    });

    return $messages;
  }

  public function getMassMessages()
  {
    $messages = DatabaseNotification::where('data->mass_message', 1)
        ->where('type', 'App\Notifications\SyncMessageNotification')
        ->where('data->deleted_from_sender', 0)
        ->groupBy('data->title')
        ->when(request('search'), function ($query) {
            $query->where(function ($q) {
            $q->whereRaw('LOWER(data->"$.receiver_name") like  ?', '%' . strtolower(request('search')) . '%');
            $q->orWhereRaw('LOWER(data->"$.body") like  ?', '%' . strtolower(request('search')) . '%');
            });
        })
        ->latest()
        ->get();

        $messages->transform(function ($message) {
            return [
              'id' => $message->id,
              'data' => $message->data,
              'created_at' => Carbon::parse($message->created_at)->diffForHumans(),
              // 'received' => $message->notifiable_id === auth()->id(),
              'received' => false,
              'avatar' => User::find($message->data['receiver_id'])->profile_photo_url ?? '',
              'avatar' => $media[$message->data['receiver_id']] ?? '',
              'replay' => old('id') === $message->id ? true : false,
              'attachments' => isset($message->data['attachment_id'])
                  ? Attachment::with('media')->where('id', $message->data['attachment_id'])
                      ->first()
                      ->media
                      ->transform(function($att) {
                          return [
                              'id' => $att->id,
                              'file_name' => $att->file_name
                          ];
                      })->toArray()
                  : null
            ];
          });

          return $messages;
  }

  public function getSentMessages()
  {
    $adminIds = User::admin()->pluck('id');
    $messages = DatabaseNotification::whereIn('data->sender_id', $adminIds)
      ->where('type', 'App\Notifications\SyncMessageNotification')
      ->where('data->mass_message', 0)
      ->where('data->deleted_from_sender', 0)
      ->when(request('search'), function ($query) {
        $query->where(function ($q) {
          $q->whereRaw('LOWER(data->"$.receiver_name") like  ?', '%' . strtolower(request('search')) . '%');
          $q->orWhereRaw('LOWER(data->"$.body") like  ?', '%' . strtolower(request('search')) . '%');
        });
      })
      ->latest()
      ->get();

    $messages->transform(function ($message) {
      return [
        'id' => $message->id,
        'data' => $message->data,
        'created_at' => Carbon::parse($message->created_at)->diffForHumans(),
        // 'received' => $message->notifiable_id === auth()->id(),
        'received' => false,
        'avatar' => User::find($message->data['receiver_id'])->profile_photo_url ?? '',
        'avatar' => $media[$message->data['receiver_id']] ?? '',
        'replay' => old('id') === $message->id ? true : false,
        'attachments' => isset($message->data['attachment_id'])
            ? Attachment::with('media')->where('id', $message->data['attachment_id'])
                ->first()
                ->media
                ->transform(function($att) {
                    return [
                        'id' => $att->id,
                        'file_name' => $att->file_name
                    ];
                })->toArray()
            : null
      ];
    });

    return $messages;
  }
}
