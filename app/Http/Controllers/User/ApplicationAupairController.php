<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Language;
use App\Models\Application;
use App\Models\Destination;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\Events\TimelineEvent;
use App\Events\ApplicationCreated;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\StorableEvents\ApplicationUpdated;
use App\Aggregates\ApplicationAggregateRoot;
use App\Http\Requests\ApplicationFormRequest;
use App\Notifications\NewApplicationNotification;
use App\Http\Services\ApplicationAggregateService;

class ApplicationAupairController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('User/Application/Show', [
            'application' => Application::with('user', 'destination')
                ->whereUserId(auth()->id())
                ->where('type', 'Au pair')
                ->first(),
            'type' => request()->segment(2),
        ]);
    }
}
