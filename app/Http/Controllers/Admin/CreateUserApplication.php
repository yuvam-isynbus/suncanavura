<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Sponsor;
use App\Models\Language;
use App\Models\Application;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Destination;
use Illuminate\Support\Facades\Gate;

class CreateUserApplication extends Controller
{
    public function __invoke(User $user)
    {
        return Inertia::render('Admin/Users/CreateApplication', [
            'user' => $user,
            'type' => request('type') === 'worktravel' ? Application::WORKTRAVEL : Application::AUPAIR,
            'sponsors' => Sponsor::all()
                ->transform(function ($sponsor) {
                    return [
                        'id' => $sponsor->id,
                        'name' => $sponsor->name,
                    ];
                })->prepend([
                    'id' => 0,
                    'name' => 'Sponzor nije unesen',
                ]),
            'destinations' => Destination::all()
                ->transform(function ($destination) {
                    return [
                        'id' => $destination->id,
                        'name' => $destination->name,
                    ];
                })->prepend([
                    'id' => 0,
                    'name' => 'Destinacija nije unesena',
                ]),
            'languages' => Language::all()
                ->transform(function ($language) {
                    return [
                        'value' => $language->name,
                        'label' => $language->name,
                    ];
                })
        ]);
    }
}
