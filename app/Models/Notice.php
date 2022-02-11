<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notice extends Model
{
    use HasFactory;
    public const MESSAGES = [
      'App\Notifications\NewApplicationCreatedByUserNotification' =>  'Predana je nova prijava.',
      'App\Notifications\NewWorkTravelApplicationCreatedByUserNotification' =>  'Predana je nova prijava za Work & travel.',
      'App\Notifications\NewAuPairApplicationCreatedByUserNotification' =>  'Predana je nova prijava za Au pair.',
      'App\Notifications\NewVerifiedUserNotification' =>  'Verficiran je novi korisnik.',
      'App\Notifications\NewContactFormMessageNotification' =>  'Stigla je nova poruka s web stranice.',
    ];
}
