<?php

namespace App\Http\Controllers\Admin;

use App\Models\WorkTravel;
use App\Models\Type;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class WorkTravelController extends Controller
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
                    'slug' => $wt->slug,
                    'image' => $wt->getFirstMediaUrl('default'),
                    'satnica' => number_format($wt->satnica / 100, 2, ',', '.'),
                    'smjestaj' => $wt->smjestaj,
                    'smjestaj_price' => number_format($wt->smjestaj_price / 100, 2, ',', '.')
                  ];
              }),
            'columns' => [
                [
                    'label' => "Image",
                    'name' => "image"
                ],
                [
                    'label' => "Name",
                    'name' => "name"
                ],
                [
                    'label' => "Satnica (USD)",
                    'name' => "satnica"
                ],
                [
                    'label' => "Smještaj",
                    'name' => "smjestaj"
                ],
                [
                    'label' => "Cijena smještaja (USD)",
                    'name' => "smjestaj_price"
                ],
                [
                    'label' => "",
                    'name' => "actions"
                ],

            ],
        ]);
    }

    public function show(WorkTravel $worktravel)
    {
      $worktravel->load('media');

      return Inertia::render('Admin/WorkTravels/Show', [
          'worktravel' => [
              'id' => $worktravel->id,
              'name' => $worktravel->name,
              'slug' => $worktravel->slug,
              'description' => $worktravel->description,
              'dodatne_informacije' => $worktravel->dodatne_informacije,
              'publish' => (boolean) $worktravel->publish,
              'satnica' => number_format($worktravel->satnica / 100, 2, ',', '.'),
              'smjestaj' => (boolean) $worktravel->smjestaj,
              'smjestaj_price' => $worktravel->smjestaj_price ?
                  number_format($worktravel->smjestaj_price / 100, 2, ',', '.') : null,
              'files' => $worktravel->photo,
              'photo' => $worktravel->photo->pluck('file_name'),
              'image' => $worktravel->getFirstMediaUrl('default'),
           ]
      ]);
    }

    public function create()
    {
        return Inertia::render('Admin/WorkTravels/Create', [
            // 'types' => Type::with('children')->where('parent_id', null)->get(),
        ]);
    }

    public function store()
    {
        request()->validate([
            'name' => ['required', 'string'],
            'description' => ['required', 'string'],
            'smjestaj_price' => ['nullable', 'numeric'],
        ]);

        $data = array_merge(request()->except(['photo']), [
            'slug' => Str::slug(request('name'), '-'),
        ]);


        $worktravel = WorkTravel::create($data);

        if (is_array(request('photo'))) {
            foreach (request('photo') as $key => $photo) {
                $path = 'tmp/uploads/' . $photo;
                $worktravel->addMedia(storage_path($path))->toMediaCollection('default');
            }
        }

        return redirect(route('admin.worktravels.index'))->with('success', 'Worktravel je uspješno kreiran.');
    }

    public function edit(WorkTravel $worktravel)
    {
        $worktravel->load('media');

        return Inertia::render('Admin/WorkTravels/Edit', [
            'worktravel' => [
                'id' => $worktravel->id,
                'name' => $worktravel->name,
                'slug' => $worktravel->slug,
                'description' => $worktravel->description,
                'dodatne_informacije' => $worktravel->dodatne_informacije,
                'publish' => (boolean) $worktravel->publish,
                'smjestaj' => (boolean) $worktravel->smjestaj,
                'satnica' => number_format($worktravel->satnica / 100, 2, ',', '.'),
                'smjestaj_price' => $worktravel->smjestaj_price ?
                    number_format($worktravel->smjestaj_price / 100, 2, ',', '.') : null,
                'files' => $worktravel->photo,
                'photo' => $worktravel->photo->pluck('file_name'),
             ]
        ]);
    }

    public function update(WorkTravel $worktravel)
    {
        request()->validate([
            'name' => ['required', 'string'],
            'description' => ['required', 'string'],
            'smjestaj_price' => ['nullable', 'numeric'],
        ]);

        $data = array_merge(request()->except(['photo', '_method']), [
            'slug' => Str::slug(request('name'), '-'),
        ]);

        $worktravel->update($data);

        if (count($worktravel->photo) > 0) {
            foreach ($worktravel->photo as $photo) {
                if (!in_array($photo->file_name, request('photo', []))) {
                    $photo->delete();
                }
            }
        }

        $photo = $worktravel->photo->pluck('file_name')->toArray();

        foreach (request('photo', []) as $file) {
            if (count($photo) === 0 || !in_array($file, $photo)) {
                $worktravel->addMedia(storage_path('tmp/uploads/' . $file))->toMediaCollection('default');
            }
        }

        // return redirect(route('admin.worktravels.edit', $worktravel->id))->with('success', 'WorkTravel updated.');
        return redirect(route('admin.worktravels.index'))->with('success', 'WorkTravel updated.');
    }

    public function destroy(WorkTravel $worktravel)
    {
        $worktravel->delete();

        return redirect(route('admin.worktravels.index'))->with('success', 'WorkTravel deleted.');
    }
}
