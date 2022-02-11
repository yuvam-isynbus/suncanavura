@extends('layouts.layout', [
  'title' => 'Putovanja',
  'meta' => 'Putovanja'
])

@section('content')

<x-header-hero-pages
title="putovanja"
content="SUNČANA VURA vodi Vas na putovanja po Vašoj mjeri!"
img="putovanja-hero.jpeg"
button="Pošalji upit"
url="o-nama-i-kontakt#forma"
/>

<x-cta-button
content="„Putovanje je više od gledanja znamenitosti, to je duboka i trajna promjena ideja življenja.“<br>
Tu smo da Vam pomognemo izabrati aranžman iz naše ponude ili stvorimo putovanje po vašoj mjeri."
url="o-nama-i-kontakt#forma"
button="Pošalji upit"
/>

<x-offer-grid-gray
title="Top ponuda"
undertitle=""
type="putovanja"
/>

@foreach (tag('nav:collection:putovanja', ['limit' => 10]) as $entry)

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
