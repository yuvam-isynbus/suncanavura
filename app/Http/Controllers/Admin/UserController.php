<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use App\Jobs\NewUserAdded;
use App\Exports\UsersExport;
use Illuminate\Http\Request;
use App\Mail\NewAdministrator;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;
use App\Notifications\NewUserAddedNotification;

class UserController extends Controller
{
  public function __construct()
  {
   // $this->middleware('can:beVuraSuperadmin')->except('index', 'show');
  }

  public function index()
  {

    return Inertia::render('Admin/Users/Index', [
      'filters' => request()->all('search', 'application_type'),
      'role' => 'user',
      'users' => User::query()
        // ->with('organization')
        // ->orderByName()
        ->user()
        ->filter(request()->only('search', 'application_type'))
        ->latest()
        ->paginate(10)
        ->transform(function ($user) {
          return [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'has_application' => !!$user->has_application,
            'has_aupair' => !!$user->has_aupair,
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
            [
                'label' => "Work & travel",
                'name' => "has_application",
            ],
            [
                'label' => "Au pair",
                'name' => "has_aupair",
            ],
          ],
          'addUserLabel' => 'Dodaj novog korisnika'
    ]);
  }

  public function create()
  {
    // Gate::authorize('beVuraSuperadmin');
    return Inertia::render('Admin/Users/Create', [
      'role' => request('role') ?? 'user'
    ]);
  }

  public function store()
  {
    // Gate::authorize('beVuraSuperadmin');
    if ($user = User::onlyTrashed()->where('email', request('email'))->first()) {
      $user->forcedelete();
    }
    $input = request()->validate([
      'name' => ['required', 'string', 'max:255'],
      'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
      'password' => ['required', 'string', 'min:8', 'confirmed'],
      'is_admin' => ['required', 'boolean'],
      'entered_by_admin' => ['required', 'boolean'],
      'email_password' => ['required', 'boolean']
    ]);

    $user = User::create([
      'name' => $input['name'],
      'email' => $input['email'],
      'password' => Hash::make($input['password']),
      'role_id' => $input['is_admin'] ? User::getRoleID('admin') : User::getRoleID('user'),
      'email_verified_at' => now(),
      'entered_by_admin' => $input['entered_by_admin'],
    ]);
    if ($input['email_password']) {
      // NewUserAdded::dispatch($user, new NewAdministrator($user, $input['password']));
      $user->notify(new NewUserAddedNotification($user, $input['password']));
    }
    return $user->role === 'admin'
    ? redirect(route('admin.administrators'))->with('success', 'Administrator je uspješno kreiran.')
      : redirect(route('admin.users.index'))->with('success', 'Korisnik je uspješno kreiran.');
  }

  public function edit(User $user)
  {
    // Gate::authorize('beVuraSuperadmin');
    return Inertia::render('Admin/Users/Edit', [
      'user' => [
        'id' => $user->id,
        'name' => $user->name,
        'email' => $user->email,
      ],
    ]);
  }

  public function show(User $user)
  {
    $user->load('applications');
    return Inertia::render('Admin/Users/Show', [
      'user' => [
        'id' => $user->id,
        'name' => $user->name,
        'email' => $user->email,
        /* 'application_created_at' => optional($user->applications)->created_at,
        'application_type' => optional($user->applications)->type,
        'application_uuid' => optional($user->applications)->uuid, */
        'worktravel_created_at' => optional($user->applications->where('type', 'Work & travel')->first())->created_at,
        'worktravel_uuid' => optional($user->applications->where('type', 'Work & travel')->first())->uuid,
        'aupair_created_at' => optional($user->applications->where('type', 'Au pair')->first())->created_at,
        'aupair_uuid' => optional($user->applications->where('type', 'Au pair')->first())->uuid,
        'role' => $user->role
      ],
    ]);
  }

  public function update(User $user)
  {
    // Gate::authorize('beVuraSuperadmin');
    request()->validate([
      'name' => ['required', 'string', 'max:255'],
      'email' => ['required', 'string', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
      'password' => ['nullable', 'string', 'min:8', 'confirmed'],
    ]);
    $user->update(request()->only('name', 'email'));
    if (request('password')) {
      $user->update(['password' => Hash::make(request('password'))]);
    }
    if (request('email_password')) {
        // NewUserAdded::dispatch($user, new NewAdministrator($user, $input['password']));
        $user->notify(new NewUserAddedNotification($user, request('password')));
      }
    return redirect()->back()->with('success', 'Korisnik je uspješno izmjenjen.');
  }

  public function destroy(User $user)
  {
    // Gate::authorize('beVuraSuperadmin');
    $user->delete();
    return redirect(route('admin.users.index'))->with('success', 'Korisnik je uspješno izbrisan.');
  }

  public function export($format)
    {
        if ($format === 'pdf') {
            return (new UsersExport)->download('korisnici.pdf', \Maatwebsite\Excel\Excel::DOMPDF);
        }
        return (new UsersExport)->download('korisnici.xlsx');
    }
}
