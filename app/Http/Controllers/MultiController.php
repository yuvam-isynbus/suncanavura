<?php

namespace App\Http\Controllers;

use App\Models\Language;
use Illuminate\Http\Request;

class MultiController extends Controller
{
    public function __invoke()
    {
        return inertia('Multi', [
            'languages' => Language::all()
                ->transform(function ($language) {
                    return [
                        'value' => $language->name,
                        'label' => $language->name,
                    ];
                })
        ]);
    }
}
