<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Application;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdminDashboardController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Admin/Dashboard', [
          'number_of_users' => User::user()->count(),
          'number_of_worktravel_applications' => Application::where('type', 'Work & travel')->count(),
          'number_of_aupair_applications' => Application::where('type', 'Au pair')->count()
        ]);
    }
}
