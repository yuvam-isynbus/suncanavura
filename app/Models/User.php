<?php

namespace App\Models;

use App\Models\Note;
use App\Models\Payment;
use Laravel\Sanctum\HasApiTokens;
use App\Http\Traits\HasProfilePhoto;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Dyrynda\Database\Support\CascadeSoftDeletes;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Notifications\VerifyEmail as VerifyEmailNotification;
use App\Notifications\ResetPassword as ResetPasswordNotification;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use SoftDeletes;
    use CascadeSoftDeletes;
    // use TwoFactorAuthenticatable;

    protected $guarded = [];
    protected $cascadeDeletes = ['applications', 'notes'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'profile_photo_url',
        'role',
        'superadmin',
        'unread_messages',
        'unread_notices',
        'application_type'
    ];

    public const ROLES = [
        1 => 'admin',
        2 => 'user',
        3 => 'anonimus',
    ];

    public function getApplicationTypeAttribute()
    {
        return $this->application?->type;
    }

    public function getSuperadminAttribute()
    {
        return $this->can('beVuraSuperadmin');
    }

    public static function getRoleID($role)
    {
        return array_search($role, self::ROLES);
    }

    public function getRoleAttribute()
    {
        return self::ROLES[$this->attributes['role_id']];
    }

    public function setRoleAttribute($value)
    {
        $roleID = self::getRoleID($value);
        if ($roleID) {
            $this->attributes['role_id'] = $roleID;
        }
    }

    public function getUnreadMessagesAttribute()
    {
        if ($this->role === 'user') {
            return $this->notifications()
                ->where('data->deleted_from_receiver', 0)
                ->where('read_at', null)
                ->count();
        }
        return DatabaseNotification::whereIn('notifiable_id', $this->admin()->pluck('id'))
            ->where('data->deleted_from_receiver', 0)
            ->where('read_at', null)
            ->count();
    }

    public function getUnreadNoticesAttribute()
    {
        if ($this->role === 'user') {
            return 0;
        }
        return DatabaseNotification::query()
            ->where(function ($query) {
                $query->where('type', 'App\Notifications\NewApplicationCreatedByUserNotification')
                    ->orWhere('type', 'App\Notifications\NewWorkTravelApplicationCreatedByUserNotification')
                    ->orWhere('type', 'App\Notifications\NewAuPairApplicationCreatedByUserNotification')
                    ->orWhere('type', 'App\Notifications\NewVerifiedUserNotification')
                    ->orWhere('type', 'App\Notifications\NewContactFormMessageNotification');
            })
            ->where('read_at', null)
            ->where('data->deleted_at', null)
            ->count();
    }

    public function scopeAdmin($query)
    {
        return $query->where('role_id', self::getRoleID('admin'));
    }

    public function scopeUser($query)
    {
        return $query->where('role_id', self::getRoleID('user'));
    }

    public function hasPassword()
    {
        return !is_null($this->password);
    }

    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPasswordNotification($token));
    }

    public function sendEmailVerificationNotification()
    {
        $this->notify(new VerifyEmailNotification());
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('name', 'like', '%' . $search . '%')
                    ->orWhere('email', 'like', '%' . $search . '%');
            });
        })
            ->when($filters['application_type'] ?? null, function ($query, $applicationType) {
                if ($applicationType == 'Work & travel') {
                    $query->where('has_application', 1);
                }
                if ($applicationType == 'Au pair') {
                    $query->where('has_aupair', 1);
                }
                if ($applicationType == 'Bez prijave') {
                    $query->where('has_application', 0);
                    $query->where('has_aupair', 0);
                }
                $query;
                /* $applicationType == 'Svi' ? $query : ($applicationType == 'Work & travel' ?
          $query->where('has_application', 1) :
          $query->where('has_aupair', 1)); */
            });
    }

    /*   public function application()
  {
    return $this->hasOne(Application::class);
  } */
    public function applications()
    {
        return $this->hasMany(Application::class);
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
}
