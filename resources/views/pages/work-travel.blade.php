@extends('layouts.layout')

@section('content')

<x-header-hero-pages
title="work and travel"
content="Provedi nezaboravno ljeto u Americi!
Putuj, zabavi se i zaradi"
img="wt-hero.jpg"
button="Prijavi se"
url="/login"
/>

<x-cta-button
content="Work and Travel USA je program kulturološke razmjene pod pokroviteljstvom State Departmenta i namijenjen je studentima
koji svoje ljetne praznike žele provesti na drugačiji način: radeći, putujući i zabavljajući se u SAD-u!"
url="http://www.work-and-travel-agencija.info/"
targ="yes"
button="Saznaj više"
/>



<x-work-travel-icons/>

    @foreach (tag('nav:collection:novosti', ['limit' => 100]) as $entry)

        @if( $entry['work_and_travel']->value('raw') == true)

            <x-cta-custom-home-cms
            title="{{ $entry['title'] }}"
            undertitle="{{$entry['podnaslov']}}"
            img="{{$entry['assets']->value('raw')->count() > 0 ?
                    $entry['assets']->value('raw')[0]->augmentedValue('path') : ''}}"
            content="{!!$entry['content']!!}"
            excerpt="{!!$entry['excerpt']!!}"
            url="{{$entry['url']}}"
            ctalabel="{{$entry['cta_button_label']}}"
            ctalink="{{$entry['cta_button_link']}}"
            />

        @endif

    @endforeach

@endsection
