<?php

namespace App\Http\Controllers\Messages;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Traits\MessageTrait;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;


class MassMessageController extends Controller
{
    use MessageTrait;

    public function index()
    {
        config()->set('database.connections.mysql.strict', false);
        DB::reconnect();
        $messages = $this->getMassMessages();
        return Inertia::render('MassMessages/Index', [
            'filters' => [
                'search' => request('search'),
                'with_deleted' => boolval(request('with_deleted'))
            ],
            'messages' => $messages,
        ]);
    }
}
