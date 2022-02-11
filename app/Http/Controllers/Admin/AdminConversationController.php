<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Traits\MessageTrait;
use App\Http\Controllers\Controller;

class AdminConversationController extends Controller
{
    use MessageTrait;

    public function __invoke(User $user)
    {
        $messages = $this->getAdminConversation($user);
        return Inertia::render('Chat/Index', [
        'user' => [
          'id' => $user->id,
          'name' => $user->name,
          'email' => $user->email,
          'role' => $user->role,
          'avatar' => $user->profile_photo_url
        ],
        'messages' => $messages,
        // 'documents' => $documents,
        'route_url' => 'admin/users/',
        // 'documentsOpen' => session('document_deleted') ? true : false
      ]);
    }
}
