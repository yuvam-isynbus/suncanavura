<?php

namespace App\Models\Enums;

use Spatie\Enum\Laravel\Enum;

/**
 * @method static self CORVUS()
 * @method static self BANK()
 * @method static self REFUND()
 * @method static self ADMIN_INTERNET()
 * @method static self ADMIN_CASH()
 * @method static self ADMIN_CARD()
 */
class PaymentType extends Enum
{
    public function label(): string
    {
        return match($this->value) {
            self::CORVUS()->value => 'corvus',
            self::BANK()->value => 'bank',
            self::REFUND()->value => 'refund',
            self::ADMIN_INTERNET()->value => 'admin_internet',
            self::ADMIN_CASH()->value => 'admin_cash',
            self::ADMIN_CARD()->value => 'admin_card',
        };
    }

/*     public function color(): string
    {
        return match($this->value) {
            self::DRAFT()->value => 'bg-red-500',
            self::PUBLISHED()->value => 'bg-green-500',
        };
    } */
}
