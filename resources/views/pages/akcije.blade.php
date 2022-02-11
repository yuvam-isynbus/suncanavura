@extends('layouts.layout', [
  'title' => 'Akcije',
  'meta' => 'Akcije'
])

@section('content')

<x-header-hero-pages
title="akcije i popusti"
content="Pregled naših akcija i sniženja"
img="akcije-hero.jpeg"
url="o-nama-i-kontakt#forma"
button="Pošalji upit"
/>

@foreach (tag('nav:collection:akcije', ['limit' => 10]) as $entry)

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



@endsection
