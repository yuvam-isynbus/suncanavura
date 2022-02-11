@component('mail::message')
# Podaci za prijavu na Sunčanu Vuru
Email: {{ $user->email}}<br>
Lozinka: {{ $password }}
@component('mail::button', ['url' => url(route('login')), 'color' => 'primary'])
Prijavi se
@endcomponent
Srdačan pozdrav<br>
{{-- {{ config('app.name') }} --}}
Sunčana vura team
@endcomponent
