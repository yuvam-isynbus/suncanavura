<?php

use App\Models\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('chat', function ($user) {
    return Auth::check();
});

/* Broadcast::channel('applications.{applicationUuid}', function ($user, $applicationUuid) {
    return true;
}); */

Broadcast::channel('applications', function ($user) {
    return $user->role === 'admin';
});

Broadcast::channel('notifications', function ($user) {
    return $user->role === 'admin';
});
