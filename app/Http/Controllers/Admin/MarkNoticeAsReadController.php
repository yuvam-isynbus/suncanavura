<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Notifications\DatabaseNotification;

class MarkNoticeAsReadController extends Controller
{
    public function __invoke()
    {
        DatabaseNotification::query()
            ->where(function ($query) {
                $query->where('type', 'App\Notifications\NewApplicationCreatedByUserNotification')
                    ->orWhere('type', 'App\Notifications\NewWorkTravelApplicationCreatedByUserNotification')
                    ->orWhere('type', 'App\Notifications\NewAuPairApplicationCreatedByUserNotification')
                    ->orWhere('type', 'App\Notifications\NewVerifiedUserNotification')
                    ->orWhere('type', 'App\Notifications\NewContactFormMessageNotification');
            })
            ->when(request('id'), function ($query) {
                return $query->where('id', request('id'));
            })
            ->get()
            ->markAsRead();
        return redirect()->back()->with('success', 'Obavijest označena kao pročitaaana');
    }
}
