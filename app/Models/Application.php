<?php

namespace App\Models;

use DateTime;
use App\Models\Note;
use App\Http\Traits\HasUuid;
use Illuminate\Support\Carbon;
use Spatie\MediaLibrary\HasMedia;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\SoftDeletes;
use Dyrynda\Database\Support\CascadeSoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Application extends Model implements HasMedia
{
  use InteractsWithMedia;
  use HasFactory;
  use HasUuid;
  use SoftDeletes;
  use CascadeSoftDeletes;

  protected $guarded = [];
  protected $cascadeDeletes = ['notes', 'payments'];

  public function getRouteKeyName()
  {
    return 'uuid';
  }

  protected $casts = [
    'enter_date' => 'date:d. m. Y.',
    'birth_date' => 'date:d. m. Y.',
    'id_start_date' => 'date:d. m. Y.',
    'id_end_date' => 'date:d. m. Y.',
    'university_start_date' => 'date:d. m. Y.',
    'university_end_date' => 'date:d. m. Y.',
    'enter_date' => 'date:d. m. Y.',
    'languages' => 'array',
  ];

  public function setPriceAttribute($value)
  {
    $this->attributes['price'] = $value ? filter_var($value, FILTER_SANITIZE_NUMBER_INT) : null;
  }

  public function setEnterDateAttribute($value)
  {
    if ($value instanceof DateTime) {
      $this->attributes['enter_date'] = $value;
      return;
    }
    $this->attributes['enter_date'] =  Carbon::createFromFormat('d. m. Y.', $value);
  }

  public function setBirthDateAttribute($value)
  {
    if ($value instanceof DateTime) {
      $this->attributes['birth_date'] = $value;
      return;
    }
    $this->attributes['birth_date'] =  Carbon::createFromFormat('d. m. Y.', $value);
  }
  public function setIdStartDateAttribute($value)
  {
    if ($value instanceof DateTime) {
      $this->attributes['id_start_date'] = $value;
      return;
    }
    $this->attributes['id_start_date'] =  Carbon::createFromFormat('d. m. Y.', $value);
  }
  public function setIdEndDateAttribute($value)
  {
    if ($value instanceof DateTime) {
      $this->attributes['id_end_date'] = $value;
      return;
    }
    $this->attributes['id_end_date'] =  Carbon::createFromFormat('d. m. Y.', $value);
  }
  public function setUniversityStartDateAttribute($value)
  {
    if ($value instanceof DateTime) {
      $this->attributes['university_start_date'] = $value;
      return;
    }
    $this->attributes['university_start_date'] =  Carbon::createFromFormat('d. m. Y.', $value);
  }
  public function setUniversityEndDateAttribute($value)
  {
    if ($value instanceof DateTime) {
      $this->attributes['university_end_date'] = $value;
      return;
    }
    $this->attributes['university_end_date'] =  Carbon::createFromFormat('d. m. Y.', $value);
  }

  /* public const INSTALMENTS = [
      [ 'key' => 1, 'value' => 75000],
      [ 'key' => 2, 'value' => 120000],
   ]; */

  const INDEPENDNET = 'Independent';
  const PREMIUM = 'Premium';

  const WORKTRAVEL = 'Work & travel';
  const AUPAIR = 'Au pair';

  public function user()
  {
    return $this->belongsTo(User::class);
  }

  public function sponsor()
  {
    return $this->belongsTo(Sponsor::class);
  }

  public function destination()
  {
    return $this->belongsTo(Destination::class);
  }

  public function payments()
  {
    return $this->hasMany(Payment::class);
  }

  public function notes()
  {
    // return $this->hasMany(Note::class);
    return $this->morphMany(Note::class, 'noteable');
  }

  public function scopeFilter($query, array $filters)
  {
    $query
      ->when($filters['search'] ?? null, function ($query, $search) {
        $query->whereLike(['university_program', 'city', 'university', 'sponsor.name', 'user.name', 'user.email'], $search);
        /* $query->where('university_program', 'like', '%' . $search . '%');
                $query->orWhereHas('user', function ($query) use ($search) {
                    $query->where('name', 'like', '%' . $search . '%');
                    $query->orWhere('email', 'like', '%' . $search . '%');
                }); */
      })
      ->when($filters['godina'] ?? null, function ($query, $godina) {
        $query->where('university_year', $godina);
      })
      ->when($filters['country'] ?? null, function ($query, $country) {
        $query->where('country', $country);
      })
      ->when($filters['program'] ?? null, function ($query, $program) {
        $query->where('program', $program);
      })
      ->when($filters['sponsor'] ?? null, function ($query, $sponsor) {
        $query->whereHas('sponsor', function ($q) use ($sponsor) {
            $q->where('name', $sponsor);
          });
        // $query->where('destination.name', $destination);
      })
      ->when($filters['destination'] ?? null, function ($query, $destination) {
        $query->whereHas('destination', function ($q) use ($destination) {
            $q->where('name', $destination);
          });
      })
      ->when($filters['language'] ?? null, function ($query, $language) {
          $query->where('languages', 'like', "%{$language}%");
        /* $query->whereHas('language', function ($q) use ($language) {
            $q->where('name', $language);
          }); */
      })
      ->when($filters['birth_year'] ?? null, function ($query, $birth_year) {
        $query->whereYear('birth_date', $birth_year);
      })
      ->when($filters['start_date'] ?? null, function ($query, $startDate) {
        $carbonStartDate = Carbon::createFromFormat('d. m. Y.', $startDate);
        $query->whereDate('created_at', '>=', $carbonStartDate);
      })
      ->when($filters['end_date'] ?? null, function ($query, $endDate) {
        $carbonEndDate = Carbon::createFromFormat('d. m. Y.', $endDate);
        $query->whereDate('created_at', '<=', $carbonEndDate);
      })
      ->when($filters['payment_type'] ?? null, function ($query, $paymentType) {
        if ($paymentType == 'Aplikacija') {
            $query;
        }
        if ($paymentType == 'Work & travel' || $paymentType == 'Au pair') {
                $query->where('type', $paymentType);
        }
    });
  }
}
