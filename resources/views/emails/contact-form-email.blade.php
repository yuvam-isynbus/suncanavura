@component('mail::message')
# Nova poruka s web stranice

Pošiljatej: {{ $contact['full_name'] }}

Email: {{ $contact['email'] }}

Kontakt broj: {{ $contact['phone'] }}

Tvrtka: {{ $contact['company'] ?? '' }}

Poruka: {{ $contact['message'] }}

@endcomponent
