<?php

namespace App\Http\Controllers\User;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserProfilePhotoController extends Controller
{
    public function show()
    {
        return Inertia::render('User/Profile/Photo');
    }

    public function update()
    {
        request()->validate([
          'photo' => ['required', 'image', 'max:1024']
        ]);
        auth()->user()->updateProfilePhoto(request('photo'));
        return back(303)->with('status', 'profile-photo-updated');
        // return Inertia::render('User/Profile/Photo');
    }

    public function destroy()
    {
        auth()->user()->deleteProfilePhoto();
        return back(303)->with('status', 'profile-photo-deleted');
    }
}
