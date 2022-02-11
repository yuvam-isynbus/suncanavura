<?php

namespace App\Models;

use DateTime;
use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Payment extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $guarded = [];

    protected $casts = [
        'payment_date' => 'date:d. m. Y.',
    ];

    // Statuses
    const PENDING = 'pending';
    const COMPLETED = 'completed';
    const CANCELED = 'canceled';

    // Types
    const BANK = 'bank';
    const REFUND = 'refund';
    const CORVUS = 'corvus';

    // Sub Types 'Internet', 'Gotovina', 'Kartica'
    const ADMIN_INTERNET = 'Internet';
    const ADMIN_CASH = 'Gotovina';
    const ADMIN_CARD = 'Kartica';
    const USER_CARD_FREE = 'Slobodna uplata';
    const USER_CARD_APPLICATION = 'Uplata za aplikaciju';

    public function setPaymentDateAttribute($value)
    {
        if ($value instanceof DateTime) {
            $this->attributes['payment_date'] = $value;
            return;
        }
        $this->attributes['payment_date'] =  Carbon::createFromFormat('d. m. Y.', $value);
    }

    public function application()
    {
        return $this->belongsTo(Application::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id');
    }

    public function scopeFilter($query, array $filters)
    {
        $query
            ->when($filters['search'] ?? null, function ($query, $search) {
                $query->whereHas('application', function ($query) use ($search) {
                    $query->whereHas('user', function ($query) use ($search) {
                        $query->where('name', 'like', '%' . $search . '%');
                        $query->orWhere('email', 'like', '%' . $search . '%');
                    });
                })
                ->orWhereHas('user', function ($query) use ($search) {
                    $query->where('name', 'like', '%' . $search . '%');
                    $query->orWhere('email', 'like', '%' . $search . '%');
                });
            })
            ->when($filters['start_date'] ?? null, function ($query, $startDate) {
                $carbonStartDate = Carbon::createFromFormat('d. m. Y.', $startDate);
                $query->whereDate('payment_date', '>=', $carbonStartDate);
            })
            ->when($filters['end_date'] ?? null, function ($query, $endDate) {
                $carbonEndDate = Carbon::createFromFormat('d. m. Y.', $endDate);
                $query->whereDate('payment_date', '<=', $carbonEndDate);
            })
            ->when($filters['payment_type'] ?? null, function ($query, $paymentType) {
                if ($paymentType == 'Aplikacija') {
                    $query->whereNotNull('application_id');
                }
                if ($paymentType == 'Work & travel' || $paymentType == 'Au pair') {
                    $query->whereHas('application', function ($query) use ($paymentType) {
                        $query->where('type', $paymentType);
                    });
                }
                if ($paymentType == 'Slobodna') {
                    $query->whereNotNull('user_id');
                }
                $query;
            });
    }

    public function paymentType()
    {
        // Uplate za aplikaciju
        if (
            $this->type === self::BANK
            && $this->application_id
        ) {
            if ($this->sub_type === self::ADMIN_CARD) {
                return 'Unesena kartična uplata za aplikaciju ' . $this->application->type . '.';
            }
            if ($this->sub_type === self::ADMIN_CASH) {
                return 'Gotovinska uplata za aplikaciju ' . $this->application->type . '.';
            }
            if ($this->sub_type === self::ADMIN_INTERNET) {
                return 'Bankovna uplata za aplikaciju ' . $this->application->type . '.';
            }
            return 'Uplata za aplikaciju ' . $this->application->type . '.';
        }

        // Povrati za aplikaciju
        if (
            $this->type === self::REFUND
            && $this->application_id
        ) {
            if ($this->sub_type === self::ADMIN_CARD) {
                return 'Povrat unesene kartične uplate za aplikaciju ' . $this->application->type . '.';
            }
            if ($this->sub_type === self::ADMIN_CASH) {
                return 'Povrat gotovinske uplate za aplikaciju ' . $this->application->type . '.';
            }
            if ($this->sub_type === self::ADMIN_INTERNET) {
                return 'Povrat bankovne uplate za aplikaciju ' . $this->application->type . '.';
            }
            return 'Povrat uplate za aplikaciju ' . $this->application->type . '.';
        }

        // Slobodne uplate
        if (
            $this->type === self::BANK
            && $this->user_id
        ) {
            if ($this->sub_type === self::ADMIN_CARD) {
                return 'Unesena kartična slobodna uplata.';
            }
            if ($this->sub_type === self::ADMIN_CASH) {
                return 'Gotovinska slobodna uplata.';
            }
            if ($this->sub_type === self::ADMIN_INTERNET) {
                return 'Bankovna slobodna uplata.';
            }
            return 'Slobodna uplata.';
        }

        // Povrati slobodnih uplata
        if (
            $this->type === self::REFUND
            && $this->user_id
        ) {
            if ($this->sub_type === self::ADMIN_CARD) {
                return 'Povrat unesene kartične slobodne uplate.';
            }
            if ($this->sub_type === self::ADMIN_CASH) {
                return 'Povrat gotovinske slobodne uplate.';
            }
            if ($this->sub_type === self::ADMIN_INTERNET) {
                return 'Povrat bankovne slobodne uplate.';
            }
            return 'Povrat slobodne uplate.';
        }

        // Kartična uplata od strane korisnika
        if ( $this->type === self::CORVUS) {
            if ($this->sub_type === self::USER_CARD_APPLICATION || $this->application_id) {
                return 'Automatska kartična uplata za aplikaciju ' . $this->application->type . '.';
            }
            if ($this->sub_type === self::USER_CARD_FREE  || $this->user_id) {
                return 'Automatska slobodna kartična uplata.';
            }
        }
    }
}
