@extends('layouts.layout')

@section('content')

<x-header-hero-pages
title="obrazovni programi"
content="TEČAJEVI JEZIKA <br>
WEST END STAGE SUMME SCHOOL <br>
INTERNSHIP <br>
INTERNATIONAL SUMMER CAMPS"
img="obrazovni-programi-hero.jpeg"
button="Pošalji upit"
url="o-nama-i-kontakt#forma"
/>

<x-cta-button
content="“Obrazovanje nije priprema za život, obrazovanje je život. ” John Dewey
<br><br>
Nikad nije prerano za izlaganje znanjima i vještinama, niti prekasno za nova otkrića.
Naš iskusni tim budno prati programe u inozemstvu za studente, djecu i odrasle."
url="o-nama-i-kontakt#forma"
button="Pošalji upit"
/>

{{-- <x-offer-grid-gray
title="Aktualno"
undertitle=""
type="obrazovni_programi"
/> --}}

@foreach (tag('nav:collection:obrazovni_programi', ['limit' => 10]) as $entry)
    <x-akcije-i-novosti-item
    title="{{ $entry['title'] }}"
    undertitle="{{$entry['podnaslov']}}"
    img="{{$entry['assets']->value('raw')->count() > 0 ?
            $entry['assets']->value('raw')[0]->augmentedValue('path') : ''}}"
    yellowtext="{{$entry['badge']}}"
    content="{!!$entry['content']!!}"
    excerpt="{!!$entry['excerpt']!!}"
    url="{{$entry['url']}}"
    />
@endforeach



    @foreach (tag('collection:novosti', ['limit' => 100]) as $entry)

        @if( $entry->augmentedValue('obrazovni_programi')->value('raw') == true)

            <x-cta-custom-home-cms
            title="Novosti i događanja"
            img="{{$entry->augmentedValue('assets')->value('raw')[0]->augmentedValue('path')}}"
            undertitle="{{$entry->augmentedValue('title')}}"
            content="{!!$entry->augmentedValue('content')!!}"
            url="{{$entry->augmentedValue('url')}}"
            />

        @endif

    @endforeach

@endsection
