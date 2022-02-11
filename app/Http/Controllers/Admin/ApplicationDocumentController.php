<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Models\Application;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ApplicationDocumentController extends Controller
{
  public function __invoke(Application $application)
  {
    $adminDocuments = $application->getMedia('documents', function (Media $media) use ($application) {
      return User::where('id', $media->custom_properties['user_id'])->first()->role == 'admin'
              && $media->model_id == $application->id;
    });
    $adminVisaDocuments = $application->getMedia('visa', function (Media $media) use ($application) {
      return User::where('id', $media->custom_properties['user_id'])->first()->role == 'admin'
              && $media->model_id == $application->id;
    });
    $adminJobDocuments = $application->getMedia('job', function (Media $media) use ($application) {
      return User::where('id', $media->custom_properties['user_id'])->first()->role == 'admin'
              && $media->model_id == $application->id;;
    });
    $adminInvoiceDocuments = $application->getMedia('invoice', function (Media $media) use ($application) {
      return User::where('id', $media->custom_properties['user_id'])->first()->role == 'admin'
              && $media->model_id == $application->id;;
    });
    $userDocuments = $application->getMedia('documents', function (Media $media) use ($application) {
      return $media->custom_properties['user_id'] === $application->user_id;
    });
    $userVisaDocuments = $application->getMedia('visa', function (Media $media) use ($application) {
      return $media->custom_properties['user_id'] === $application->user_id;
    });
    $userJobDocuments = $application->getMedia('job', function (Media $media) use ($application) {
      return $media->custom_properties['user_id'] === $application->user_id;
    });
    return inertia('Admin/Applications/Documents', [
      'application' => $application->load('user'),
      'admin_documents' => $adminDocuments,
      'admin_visa_documents' => $adminVisaDocuments,
      'admin_job_documents' => $adminJobDocuments,
      'admin_invoice_documents' => $adminInvoiceDocuments,
      'user_documents' => $userDocuments,
      'user_visa_documents' => $userVisaDocuments,
      'user_job_documents' => $userJobDocuments,
    ]);
  }
}
