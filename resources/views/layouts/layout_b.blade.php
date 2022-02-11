<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8" />
        <title>Sunčana vura - {{ $title ?? '' }}</title>
        <meta name="description" content="{{ $meta ?? '' }}">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        @if (request()->segment(1) == '')
            <link rel="preload" as="image" href="/assets/public/naslovna/1.aviokarte.jpeg">
        @endif
        <link href="{{ mix('/css/app.css') }}" rel="stylesheet">

        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet">

        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

        <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />

        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">

    </head>
    <body class="bg-gray-50">

        <x-header/>

        @yield('content')

        <x-footer/>

        <script src="{{ mix('/js/front.js') }}"></script>
    </body>
</html>
