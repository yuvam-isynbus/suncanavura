<?php

namespace App\Http\Controllers\User;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserProfilePasswordController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('User/Profile/Password');
    }
}
