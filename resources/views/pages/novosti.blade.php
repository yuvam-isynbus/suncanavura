@extends('layouts.layout', [
  'title' => 'Novosti',
  'meta' => 'Novosti'
])

@section('content')

<x-header-hero-pages
title="novosti i događanja"
content="Pregled naših novosti i događanja"
img="novosti-hero.jpeg"
/>

    @foreach (tag('collection:novosti', ['limit' => 10]) as $entry)

        <x-akcije-i-novosti-item
        title="{{$entry->augmentedValue('title')}}"
        undertitle="{{$entry->augmentedValue('podnaslov')}}"
        img="{{$entry->augmentedValue('assets')->value('raw')->count() > 0 ?
            $entry->augmentedValue('assets')->value('raw')[0]->augmentedValue('path') : ''}}"
        yellowtext="{{$entry->augmentedValue('badge')}}"
        content="{!!$entry->augmentedValue('content')!!}"
        url="{{$entry->augmentedValue('url')}}"
        />

    @endforeach

@endsection
