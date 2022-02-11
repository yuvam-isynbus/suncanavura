<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Sponsor;
use App\Models\Language;
use App\Models\Application;
use App\Models\Destination;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use App\Exports\AuPairApplicationsExport;
use Spatie\EventSourcing\StoredEvents\Models\EloquentStoredEvent;

class ApplicationAuPairController extends Controller
{

    public function index()
    {
        return Inertia::render('Admin/Applications/Index', [
            'filters' => request()->all('search', 'godina', 'birth_year', 'country', 'destination', 'language', 'start_date', 'end_date'),
            'minBirthYear' => explode('-',Application::min('birth_date'))[0],
            'maxBirthYear' => explode('-',Application::max('birth_date'))[0],
            'type' => 'aupair',
            'applications' => Application::query()
                ->with('user', 'destination')
                ->where('type', 'Au pair')
                // ->orderByName()
                // ->application()
                ->filter(request()->only('search', 'godina', 'birth_year', 'country', 'destination', 'language', 'start_date', 'end_date'))
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
                        'destination' => $application->destination,
                        'destination' => $application->destination ? $application->destination->name : '------',
                        'birth_year' => $application->birth_date ? (new Carbon($application->birth_date))->year : '------' ,
                        // 'has_password' => !!$application->password,
                    ];
                }),
                'destinations' => array_merge(['Sve'], Destination::all()->pluck('name')->toArray()),
                'languages' => array_merge(['Svi'], Language::all()->pluck('name')->toArray())
        ]);
    }

    public function export($format)
    {
        if ($format === 'pdf') {
            return (new AuPairApplicationsExport)->download('aupair.pdf', \Maatwebsite\Excel\Excel::DOMPDF);
        }
        return (new AuPairApplicationsExport)->download('aupair.xlsx');
    }

}
