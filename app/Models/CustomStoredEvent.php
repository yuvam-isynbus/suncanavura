<?php

namespace App\Models;

use Spatie\EventSourcing\StoredEvents\Models\EloquentStoredEvent;

class CustomStoredEvent extends EloquentStoredEvent
{
  public const EVENTS = [
    'App\StorableEvents\ApplicationCreatedByUser' =>  [
      'name' => 'Prijava upisana od strane korisnika',
      'icon' => 'check',
      'color' => 'green',
      'colorClass' => 'bg-green-700',
    ],
    'App\StorableEvents\ApplicationCreatedByAdmin' =>  [
      'name' => 'Prijava upisana od strane administratora',
      'icon' => 'check',
      'color' => 'green',
      'colorClass' => 'bg-green-400',
    ],
    'App\StorableEvents\ApplicationUpdatedByUser' => [
      'name' => 'Korisnik je izmjenjenio prijavu',
      'icon' => 'refresh',
      'color' => 'gray',
      'colorClass' => 'bg-gray-700',
    ],
    'App\StorableEvents\ApplicationUpdatedByAdmin' => [
      'name' => 'Administrator je izmjenjenio prijavu',
      'icon' => 'refresh',
      'color' => 'gray',
      'colorClass' => 'bg-gray-400',
    ],
    'App\StorableEvents\DocumentsAddedByUser' => [
      'name' => 'Korisnik je učitao dokument',
      'icon' => 'paper-clip',
      'color' => 'rose',
      'colorClass' => 'bg-rose-700',
    ],
    'App\StorableEvents\DocumentsAddedByAdmin' => [
      'name' => 'Administrator je učitao dokument',
      'icon' => 'paper-clip',
      'color' => 'rose',
      'colorClass' => 'bg-rose-400',
    ],
    'App\StorableEvents\UserPayment' => [
      'name' => 'Korisnik je izvršio uplatu',
      'icon' => 'cash',
      'color' => 'blue',
      'colorClass' => 'bg-blue-700',
    ],
    'App\StorableEvents\AdminPayment' => [
      'name' => 'Administrator je unio uplatu',
      'icon' => 'cash',
      'color' => 'blue',
      'colorClass' => 'bg-blue-400',
    ],
    'App\StorableEvents\AdminPaymentUpdate' => [
      'name' => 'Administrator je izmjenio uplatu',
      'icon' => 'cash',
      'color' => 'yellow',
      'colorClass' => 'bg-yellow-500',
    ],
    'App\StorableEvents\AdminPaymentDelete' => [
      'name' => 'Administrator je izbrisao uplatu',
      'icon' => 'cash',
      'color' => 'yellow',
      'colorClass' => 'bg-yellow-300',
    ],

  ];

  public static function boot()
  {
    parent::boot();
    static::creating(function (CustomStoredEvent $storedEvent) {
      if (auth()->user()) {
        $storedEvent->meta_data['user'] = auth()->user();
      } else {
        $user = User::find($storedEvent->event_properties['data']['user_id']);
        $storedEvent->meta_data['user'] = $user;
      }
    });
  }

  public function scopeFilter($query, array $filters)
  {

    $query->when($filters['search'] ?? null, function ($query, $search) {
      $query->where(function ($query) use ($search) {
        $query->where('name', 'like', '%' . $search . '%')
          ->orWhere('email', 'like', '%' . $search . '%');
      });
    })
      ->when($filters['color'] ?? null, function ($query, $color) {
        $query->where(function ($query) use ($color) {
          foreach ($color as $k => $c) {
            $query->orWhereIn('event_class', $this->searchArray($c, self::EVENTS));
            // ray($this->searchArray($c, self::EVENTS));
          }
        });
      });
  }
  public function searchArray($search_value, $array)
  {
    // Iterating over main array
    $result = [];
    foreach ($array as $key1 => $val1) {
      if (is_array($val1) and count($val1)) {
        // Iterating over the nested array
        foreach ($val1 as $key2 => $val2) {
          if ($val2 == $search_value) {
            array_push($result, $key1);
          }
        }
      }
    }
    return $result;
  }
}
