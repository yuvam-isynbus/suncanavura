<?php

namespace App\Http\Controllers\Admin;

use PDF;
use App\Models\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;

class ApplicationPdfController extends Controller
{
    public function create(Application $application)
    {
      $application->load('user', 'sponsor', 'destination');
    $miscDocuments = $application->getMedia('documents')
      ->pluck('file_name')
      ->map(fn($item) => explode('_', $item, 2)[1]);
    $visaDocuments = $application->getMedia('visa')
      ->pluck('file_name')
      ->map(fn($item) => explode('_', $item, 2)[1]);
    $jobDocuments = $application->getMedia('job')
      ->pluck('file_name')
      ->map(fn($item) => explode('_', $item, 2)[1]);
    $documents = $miscDocuments->concat($visaDocuments)->concat($jobDocuments);
    $datum = Carbon::parse(now())->timezone('Europe/Zagreb')->format('d. m. Y. h:i:s');
    $pdf = PDF::loadView('pdf.application', [
      'application' => $application,
      'datum' => Carbon::parse(now())->timezone('Europe/Zagreb')->format('d. m. Y. h:i:s'),
      'birth_date' => Carbon::parse($application->birth_date)->format('d. m. Y.'),
      'id_start_date' => Carbon::parse($application->id_start_date)->format('d. m. Y.'),
      'id_end_date' => Carbon::parse($application->id_end_date)->format('d. m. Y.'),
      'university_start_date' => Carbon::parse($application->university_start_date)->format('d. m. Y.'),
      'university_end_date' => Carbon::parse($application->university_end_date)->format('d. m. Y.'),
      'languages' => count($application->languages) > 0 ?  join(", ", $application->languages) : "---------",
      'documents' => $documents
    ]);
    // return $pdf->download('invoice.pdf');
    return $pdf->stream();
    }
}
