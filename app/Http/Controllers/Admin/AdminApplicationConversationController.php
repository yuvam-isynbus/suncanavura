<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Application;
use Illuminate\Http\Request;
use App\Http\Traits\MessageTrait;
use App\Http\Controllers\Controller;

class AdminApplicationConversationController extends Controller
{
    use MessageTrait;

    public function __invoke(Application $application)
    {
        $user = User::find($application->user_id);
        $messages = $this->getAdminConversation($user);
        return Inertia::render('Chat/ApplicatonIndex', [
        'user' => [
          'id' => $user->id,
          'name' => $user->name,
          'email' => $user->email,
          'role' => $user->role,
          'avatar' => $user->profile_photo_url
        ],
        'application' => $application,
        'messages' => $messages,
        // 'documents' => $documents,
        'route_url' => 'admin/users/',
        // 'documentsOpen' => session('document_deleted') ? true : false
      ]);
    }
}
