@component('mail::message')
{{-- Greeting --}}
@if (! empty($greeting))
# {{ $greeting }}

@else
@if ($level === 'error')
# @lang('Whoops!')
@else
# @lang('Dobar dan!')
@endif
@endif
<br>
{{-- Intro Lines --}}
@foreach ($introLines as $line)
{{ $line }}

@endforeach

{{-- Action Button --}}
@isset($actionText)
<?php
    switch ($level) {
        case 'success':
        case 'error':
            $color = $level;
            break;
        default:
            $color = 'primary';
    }
?>
@component('mail::button', ['url' => $actionUrl, 'color' => 'primary'])
{{ $actionText }}
@endcomponent
@endisset

{{-- Outro Lines --}}
@foreach ($outroLines as $line)
{{ $line }}

@endforeach

{{-- Salutation --}}
@if (! empty($salutation))
{{ $salutation }}
@else
@lang('Srdačan pozdrav'),<br>
{{-- {{ config('app.name') }} --}}
Sunčana vura team
@endif

{{-- Subcopy --}}
@isset($actionText)
@slot('subcopy')
@lang(
    "Ukoliko imate problema s poveznicom \":actionText\" , kopirajte slijedeći URL \n".
    'u Vaš preglednik:',
    [
        'actionText' => $actionText,
    ]
) <span class="break-all">[{{ $displayableActionUrl }}]({{ $actionUrl }})</span>
@endslot
@endisset
@endcomponent
