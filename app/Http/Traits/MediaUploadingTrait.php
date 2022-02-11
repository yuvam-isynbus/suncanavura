<?php

namespace App\Http\Traits;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;

trait MediaUploadingTrait
{
    public function storeMedia(Request $request)
    {
      try {
            request()->validate([
                 'file' => 'file|mimes:tiff,jpeg,pdf,doc,docx,xls,xlsx|max:4096'
            ]);
            $path = storage_path('tmp/uploads');
            try {
                if (!file_exists($path)) {
                    mkdir($path, 0755, true);
                }
            } catch (\Exception $e) { }
            $file = $request->file('file');
            $name = uniqid() . '_' . trim($file->getClientOriginalName());
            $file->move($path, $name);
            return response()->json([
                'name'          => $name,
                'original_name' => $file->getClientOriginalName(),
            ]);
        } catch (\Throwable $throwable) {
            if ($throwable instanceof ValidationException) {
                $errors = $throwable->validator->errors()->getMessages();
                return response()->json(['error' => $errors['file'][0]], 422);
            }
            return response()->json(['error' => $throwable->getMessage()], 500);
        }
    }

    protected function errorResponse($message, $code)
    {
        return response()->json(['error' => $message, 'code' => $code], $code);
    }

    public function deleteMedia(Request $request)
    {

        Storage::disk('tmp')->delete('uploads/' . request('file_name'));

        return response()->json(['message' => 'File is deleted']);
    }
}
