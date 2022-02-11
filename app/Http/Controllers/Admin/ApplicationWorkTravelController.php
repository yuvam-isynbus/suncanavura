<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Sponsor;
use App\Models\Language;
use App\Models\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Exports\WrokTravelApplicationsExport;
use Spatie\EventSourcing\StoredEvents\Models\EloquentStoredEvent;

class ApplicationWorkTravelController extends Controller
{

    public function index()
    {
      return Inertia::render('Admin/Applications/Index', [
            'filters' => request()->all('search', 'godina', 'birth_year', 'country', 'sponsor', 'language', 'start_date', 'end_date', 'program'),
            'minBirthYear' => explode('-',Application::min('birth_date'))[0],
            'maxBirthYear' => explode('-',Application::max('birth_date'))[0],
            'type' => 'worktravel',
            'applications' => Application::query()
                ->with('user', 'sponsor')
                ->where('type', 'Work & travel')
                // ->orderByName()
                // ->application()
                ->filter(request()->only('search', 'godina', 'birth_year', 'country', 'sponsor', 'language', 'start_date', 'end_date', 'program'))
                ->latest()
                ->paginate(10)
                ->transform(function ($application) {
                    return [
                        'id' => $application->id,
                        'uuid' => $application->uuid,
                        'created_at' => $application->created_at,
                        'name' => $application->user->name,
                        'city' => $application->city,
                        'university' => $application->university,
                        'country' => $application->country,
                        'program' => $application->program,
                        'sponsor' => $application->sponsor ? $application->sponsor->name : '------',
                        'birth_year' => $application->birth_date ? (new Carbon($application->birth_date))->year : '------' ,
                        // 'has_password' => !!$application->password,
                    ];
                }),
                'sponsors' => array_merge(['Svi'], Sponsor::all()->pluck('name')->toArray()),
                'languages' => array_merge(['Svi'], Language::all()->pluck('name')->toArray())
        ]);
    }

    public function export($format)
    {
        if ($format === 'pdf') {
            return (new WrokTravelApplicationsExport)->download('work&travel.pdf', \Maatwebsite\Excel\Excel::DOMPDF);
        }
        return (new WrokTravelApplicationsExport)->download('work&travel.xlsx');
    }

}
