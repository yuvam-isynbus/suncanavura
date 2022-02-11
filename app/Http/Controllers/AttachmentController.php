<?php

namespace App\Http\Controllers;

// use App\User;

use App\Models\User;
use App\Models\Application;
// use Spatie\MediaLibrary\Models\Media;
use Illuminate\Http\Request;
use App\Events\TimelineEvent;
use Illuminate\Support\Facades\Storage;
use App\Aggregates\ApplicationAggregateRoot;
use App\Http\Services\ApplicationAggregateService;
use App\Models\Attachment;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

// use Spatie\MediaLibrary\MediaCollections\Models\Media;

class AttachmentController extends Controller
{
    public function show(Media $attachment)
    {
        return redirect(asset('storage/' . $attachment->id . '/' . $attachment->file_name));
    }

    public function download(Media $attachment)
    {
        return $attachment;
    }

    public function store(Request $request) {
      request()->validate(['attachments' => 'required|array|min:1']);
      $attachmentModel = Attachment::firstOrCreate(
          ['id' => request('attachment_id')],
          ['attacher_id' => auth()->id()],
      );
      if (is_array($request->input('attachments'))) {
            foreach ($request->input('attachments') as $key => $attachment) {
                $path = 'tmp/uploads/' . $attachment;
                $attachmentModel->addMedia(storage_path($path))
                    ->toMediaCollection('attachments');
            }
        }
        Storage::disk('tmp')->deleteDirectory('/uploads');

        return response()->json([
          'attachment_id' => $attachmentModel->id,
          'attachments' => $attachmentModel->media->transform(function($att) {
            return [
              'id' => $att->id,
              'file_name' => $att->file_name
            ];
          })->toArray()
        ]);
        // return redirect()->back()->with('success', 'Dokument je uspješno učitan.');
    }

    public function destroy(Media $media)
    {
        $model = $media->model;
        $mediaId = $media->id;
        $media->delete();
        if ($model->getMedia('attachments')->count() == 0) {
            $model->delete();
        }
        return response()->json([
            'media_id' => $mediaId,
        ]);
    }

    public function removeAttachment(Attachment $attachment)
    {
        $attachmentId = $attachment->id;
        $attachment->delete();
        return response()->json([
            'attachment_model_id' => $attachmentId,
        ]);
    }
}
