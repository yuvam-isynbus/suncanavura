<?php

namespace App\Http\Controllers\User;

use App\Models\WorkTravel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserWorkTravelController extends Controller
{
  public function index()
  {
    return inertia('User/WorkTravel', [
      'filters' => request()->all('search'),
      'worktravels' => WorkTravel::query()
        ->where('publish', true)
        ->filter(request()->only('search'))
        ->get()
        ->transform(function ($wt) {
          return [
            'id' => $wt->id,
            'name' => $wt->name,
            'slug' => $wt->slug,
            'description' => $wt->description,
            'image' => $wt->getFirstMediaUrl('default'),
            'satnica' => number_format($wt->satnica / 100, 2, ',', '.'),
            'smjestaj' => $wt->smjestaj,
            'smjestaj_price' => number_format($wt->smjestaj_price / 100, 2, ',', '.')
          ];
        }),
    ]);
  }

  public function show(WorkTravel $worktravel)
  {
    $worktravel->load('media');

    return inertia('User/WorkTravelShow', [
      'worktravel' => $worktravel->withoutRelations(),
      'name' => $worktravel->name,
      'description' => $worktravel->description,
      'dodatne_informacije' => $worktravel->dodatne_informacije,
      'satnica' => number_format($worktravel->satnica / 100, 2, ',', '.'),
      'smjestaj' => $worktravel->smjestaj,
      'smjestaj_price' => number_format($worktravel->smjestaj_price / 100, 2, ',', '.'),
      'image' => $worktravel->getFirstMediaUrl('default'),
    ]);
  }
}
