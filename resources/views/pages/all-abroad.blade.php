@extends('layouts.layout')

@section('content')

<x-header-hero-pages
title="all abroad programi"
content="LATINSKA AMERIKA <br>
TEACHING ENGLISH ABROAD <br>
ALL ABROAD EUROPE"
img="all-abroad-header.jpg"
url="o-nama-i-kontakt#forma"
button="Pošalji upit"
/>

<x-cta-button
content="Izloženost raznolikim iskustvima je ključ rasta, a putovanja su izvor nadahnuća. <br><br>
Naši programi omogućuju vam upoznavanje kultura drugih zemalja kroz praktično učenje. <br>
Pronađite najbolju verziju sebe dok razvijate važne životne vještine!"
url="o-nama-i-kontakt#forma"
button="Pošalji upit"
/>

{{-- <x-offer-grid-gray
title="Aktualno"
undertitle=""
type="all_abroad"
/> --}}

@foreach (tag('nav:collection:all_abroad', ['limit' => 100]) as $entry)

    <x-akcije-i-novosti-item
        title="{{ $entry['title'] }}"
        undertitle="{{$entry['podnaslov']}}"
        img="{{$entry['assets']->value('raw')->count() > 0 ?
                $entry['assets']->value('raw')[0]->augmentedValue('path') : ''}}"
        yellowtext="{{$entry['badge']}}"
        content="{!!$entry['content']!!}"
        excerpt="{!!$entry['excerpt']!!}"
        url="{{$entry['link']}}"
        targ="yes"
        />

@endforeach

@foreach (tag('collection:novosti', ['limit' => 100]) as $entry)

    @if( $entry->augmentedValue('all_abroad')->value('raw') == true)

        <x-cta-custom-home-cms
        title="Novosti i događanja"
        img="{{$entry->augmentedValue('assets')->value('raw')[0]->augmentedValue('path')}}"
        undertitle="{{$entry->augmentedValue('title')}}"
        content="{!!$entry->augmentedValue('content')!!}"
        excerpt="{!!$entry->augmentedValue('excerpt')!!}"
        url="{{$entry->augmentedValue('url')}}"
        />

    @endif

@endforeach





@endsection
