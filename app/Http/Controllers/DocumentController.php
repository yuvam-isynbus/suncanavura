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
use Spatie\MediaLibrary\MediaCollections\Models\Media;

// use Spatie\MediaLibrary\MediaCollections\Models\Media;

class DocumentController extends Controller
{
    public function show(Media $document)
    {
        return redirect(asset('storage/' . $document->id . '/' . $document->file_name));
    }

    public function download(Media $document)
    {
        return $document;
    }

    public function store(
        Request $request,
        Application $application,
        ApplicationAggregateService $applicationAggregateService
    ) {
      request()->validate(['documents' => 'required|array|min:1']);
      $collection = request('collection') ?? 'documents';
      if (is_array($request->input('documents'))) {
            foreach ($request->input('documents') as $key => $document) {
                $path = 'tmp/uploads/' . $document;
                $application->addMedia(storage_path($path))
                    ->withCustomProperties(['user_id' => auth()->id() ?? null])
                    ->toMediaCollection($collection);
            }
        }
        $data = $request->input('documents');
        $addDocumentsBy = auth()->user()->role === 'admin'
                    ? 'addDocumentsByAdmin'
                    : 'addDocumentsByUser';
        $applicationAggregateService->record($addDocumentsBy, $application, $data);
        Storage::disk('tmp')->deleteDirectory('/uploads');
        return redirect()->back()->with('success', 'Dokument je uspješno učitan.');
    }

    public function destroy(Media $document)
    {
        $document->delete();
        return redirect()->back()->with('success', 'Dokument je uspješno izbrisan.');
    }
}
