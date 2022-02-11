<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Gate;

class AdministratorController extends Controller
{
  public function __invoke()
  {
    Gate::authorize('beVuraSuperadmin');
    return Inertia::render('Admin/Users/Index', [
      'filters' => request()->all('search', 'has_password'),
      'role' => 'admin',
      'users' => User::query()
        // ->with('organization')
        // ->orderByName()
        ->admin()
        ->filter(request()->only('search', 'has_password'))
        ->paginate(10)
        ->transform(function ($user) {
          return [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'has_application' => false,
          ];
        }),
      'columns' => [
        [
          'label' => "Ime i prezime",
          'name' => "name"
        ],
        [
          'label' => "Email",
          'name' => "email",
        ],
      ],
      'addUserLabel' => 'Dodaj novog administratora'
    ]);
  }
}
