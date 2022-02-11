<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Language;
use App\Models\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use App\Http\Controllers\Controller;
use App\Models\WorkTravel;

class AdminWorkTravelController extends Controller
{
    public function index()
    {

        return Inertia::render('Admin/WorkTravels/Index', [
            'filters' => request()->all('search'),
            'worktravels' => WorkTravel::query()
                ->filter(request()->only('search'))
                ->paginate(10)
                ->transform(function ($wt) {
                    return [
                        'id' => $wt->id,
                        'name' => $wt->name,
                        'price' => $wt->price,
                    ];
                }),
            'columns' => [
                [
                    'label' => "Name",
                    'name' => "name"
                ],
                [
                    'label' => "Price",
                    'name' => "price",
                ],
            ],
            'addUserLabel' => 'Dodaj novi W&T posao'
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/WorkTravels/Create');
    }

    public function store()
    {
        $data = request()->validate([
            'name' => ['required', 'string'],
            'price' => ['required', 'integer'],
        ]);
        WorkTravel::create(array_merge($data));
        return redirect(route('admin.worktravels.index'))->with('success', 'Work & travel je uspješno kreiran.');
    }

    public function show(Language $note)
    {
        //
    }

    public function edit(WorkTravel $worktravel)
    {
        return Inertia::render('Admin/WorkTravels/Edit', [
            'worktravel' => $worktravel
        ]);
    }

    public function update(WorkTravel $worktravel)
    {
        $data = request()->validate([
            'name' => ['required', 'string'],
            'price' => ['required', 'integer'],
        ]);
        $worktravel->update($data);
        return redirect()->back()->with('success', 'Work & travel je uspješno izmjenjen.');
    }

    public function destroy(WorkTravel $worktravel)
    {
        $worktravel->delete();
        return redirect(route('admin.worktravels.index'))->with('success', 'Work & travel je uspješno izbrisan.');
    }
}
