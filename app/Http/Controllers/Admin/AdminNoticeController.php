<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;
use App\Models\Notice;
use Illuminate\Notifications\DatabaseNotification;

class AdminNoticeController extends Controller
{
    public function index()
    {
        $notices = DatabaseNotification::query()
            ->where(function ($query) {
                $query->where('type', 'App\Notifications\NewApplicationCreatedByUserNotification')
                    ->orWhere('type', 'App\Notifications\NewWorkTravelApplicationCreatedByUserNotification')
                    ->orWhere('type', 'App\Notifications\NewAuPairApplicationCreatedByUserNotification')
                    ->orWhere('type', 'App\Notifications\NewVerifiedUserNotification')
                    ->orWhere('type', 'App\Notifications\NewContactFormMessageNotification');
            })
            ->when(!request('with_deleted'), function ($query) {
                $query->whereNull('data->deleted_at');
            })
            ->when(request('search'), function ($query) {
                $query->where(function ($q) {
                    $q->whereRaw('LOWER(data->"$.user_name") like  ?', '%' . strtolower(request('search')) . '%');
                    // $q->orWhereRaw('LOWER(data->"$.body") like  ?', '%' . strtolower(request('search')) . '%');
                });
            })
            ->latest()
            ->get();

        return inertia('Admin/Applications/Notices', [
            'filters' => [
                'search' => request('search'),
                'with_deleted' => boolval(request('with_deleted'))
            ],
            'notices' => $notices->transform(function ($notice) {
                return [
                    'id' => $notice->id,
                    'data' => $notice->data,
                    'created_at' => Carbon::parse($notice->created_at)->diffForHumans(),
                    'read_at' => $notice->read_at,
                    'avatar' => User::find($notice->data['user_id'])->profile_photo_url ?? '',
                    'data' => $notice->data,
                    'message' => Notice::MESSAGES[$notice->type]
                    . ' Korisnik ' . $notice->data['user_name']
                    . '. Email ' . (isset($notice->data['email']) ? $notice->data['email'] : '')
                    // 'avatar' => $media[$notice->data['receiver_id']] ?? '',
                ];
            })
        ]);
    }
}
