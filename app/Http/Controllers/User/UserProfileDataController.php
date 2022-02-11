<?php

namespace App\Http\Controllers\User;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Spatie\EventSourcing\StoredEvents\Models\EloquentStoredEvent;

class UserProfileDataController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('User/Profile/Data', [
            'user' => auth()->user(),
            'timeline' => EloquentStoredEvent::all()
        ]);
    }
}
