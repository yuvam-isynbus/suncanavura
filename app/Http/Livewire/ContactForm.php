<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Mail\ContactFormMailable;
use App\Events\ContactFormMessage;
use Illuminate\Support\Facades\Mail;
use Lukeraymonddowning\Honey\Facades\Honey;
use Lukeraymonddowning\Honey\Models\Spammer;
use Lukeraymonddowning\Honey\Traits\WithHoney;
use Lukeraymonddowning\Honey\Traits\WithRecaptcha;

class ContactForm extends Component
{
  // use WithHoney, WithRecaptcha;
  use WithHoney;

  public $full_name;
  public $email;
  public $phone;
  public $company;
  public $message;
  public $successMessage;
  protected $rules = [
    'full_name' => 'required',
    'email' => 'required|email',
    'phone' => 'required',
    'company' => '',
    'message' => 'required|min:5',
  ];

  public function mount()
  {
    $this->htime = microtime(true);
  }

  public function updated($propertyName)
  {
    $this->validateOnly($propertyName);
  }

  public function submitForm()
  {
    $contact = $this->validate();
    if ($this->honeyPasses()) {
        foreach (['infosv@suncana.org', 'travelsv@suncana.org', 'boris@studiovista.hr' ] as $recipient) {
            Mail::to($recipient)->send(new ContactFormMailable($contact));
        }
      event(new ContactFormMessage($contact));
      $this->successMessage = 'Vaša poruka je uspješno poslana! Kontaktirat ćemo Vas u najkraćem mogućem roku. Hvala.';
    } else {
      Spammer::markAttempt(request()->ip());
      $this->successMessage = 'Došlo je do pogreške prilikom slanja poruke. Molimo Vas da probate kasnije.';
    }
    $this->resetForm();
  }

  private function resetForm()
  {
    $this->full_name = '';
    $this->email = '';
    $this->phone = '';
    $this->company = '';
    $this->message = '';
  }

  public function render()
  {
    return view('livewire.contact-form');
  }
}
