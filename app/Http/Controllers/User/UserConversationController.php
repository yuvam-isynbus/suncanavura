<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Traits\MessageTrait;
use App\Http\Controllers\Controller;

class UserConversationController extends Controller
{
    use MessageTrait;

    public function __invoke()
    {
        $admin = User::admin()->firstOrFail();
        // $messages = $this->getConversation($admin);
        $messages = $this->getUserConversation();
        return Inertia::render('Chat/Index', [
        'user' => [
          'id' => $admin->id,
          'name' => $admin->name,
          'email' => $admin->email,
          'role' => $admin->role,
          'avatar' => $admin->profile_photo_url
        ],
        'messages' => $messages,
        // 'documents' => $documents,
        'route_url' => 'admin/admins/',
        // 'documentsOpen' => session('document_deleted') ? true : false
      ]);
    }
}
