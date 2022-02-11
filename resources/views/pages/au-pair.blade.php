@extends('layouts.layout')

@section('content')

<x-header-hero-pages
title="Au pair"
content="Oduvijek maštaš o putovanjima? <br>
San ti je da engleski, njemački,francuski ili španjolski govoriš kao izvorni govornik? <br>
Postani AU PAIR!"
img="au-pair-hero.jpg"
url="/login"
button="Prijavi se"
/>

<x-cta-button
content="Au pair je mlada osoba koja živi kao član jedne obitelji u nekoj stranoj zemlji.
Au pair pomaže oko djece i u nekim zemljama oko lakših kućanskih poslova, a zauzvrat ima smještaj, hranu i džeparac."
url="http://www.aupair-agencija.info/"
targ="yes"
button="Saznaj više"
/>



<x-all-abroad-icons/>


{{--     @foreach (tag('collection:novosti', ['limit' => 100]) as $entry)

        @if( $entry->augmentedValue('au_pair')->value('raw') == true)
                <x-cta-custom-home-cms
                title="Novosti i događanja"
                img="{{$entry->augmentedValue('assets')->value('raw')->count() > 0 ?
                        $entry->augmentedValue('assets')->value('raw')[0]->augmentedValue('path') : ''}}"
                undertitle="{{$entry->augmentedValue('title')}}"
                content="{!!$entry->augmentedValue('content')!!}"
                excerpt="{!!$entry->augmentedValue('excerpt')!!}"
                url="{{$entry->augmentedValue('url')}}"
                />
        @endif

    @endforeach --}}
    @foreach (tag('nav:collection:novosti', ['limit' => 100]) as $entry)

        @if( $entry['au_pair']->value('raw') == true)
                <x-cta-custom-home-cms
                title="Novosti i događanja"
                undertitle="{{$entry['podnaslov']}}"
                img="{{$entry['assets']->value('raw')->count() > 0 ?
                        $entry['assets']->value('raw')[0]->augmentedValue('path') : ''}}"
                content="{!!$entry['content']!!}"
                excerpt="{!!$entry['excerpt']!!}"
                url="{{$entry['url']}}"
                />
        @endif

    @endforeach
@endsection
