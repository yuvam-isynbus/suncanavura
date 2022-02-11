@extends('layouts.layout', [
  'title' => '',
  'meta' => 'Sunčana vura'
])

@section('content')

    <x-header-hero title="avio karte" content="regularne, pomorske, korporativne,
        work and travel, studentske, erasmus,
        windmill, offshore.." />

    <x-image-grid />
    <x-cta-plane />

    <x-cta-custom-home title="poslovni korisnici" img="logotipi_partnera.jpeg" undertitle=""
    content="Poslovna putovanja su neizostavan segment uspjeha.
        Svakom klijentu pristupamo individualno i dostupni smo 24/7.
        Za Vas ćemo organizirati transfere i avio karte, rezervirat ćemo smještaj
        u hotelima sukladno Vašim mogućnostima i potrebama.
        Nama možete prepustiti brigu oko putnog osiguranja, rent a cara
        i svega ostalog što će Vaše putovanje učiniti ugodnijim.
        Ispunite direktan zahtjev ili nam pošaljite upit za rezervaciju mailom
        i naši će Vam stručni djelatnici odgovoriti u najkraćem roku." url="o-nama-i-kontakt#forma" />

    <x-offer-grid title="top ponuda" undertitle="Provjerite predlog ponuda koje smo izdvojili za Vas. <br>
        Ukoliko nema destinacije koja Vas interesira, obratite nam se mailom ili ispunite direktan zahtjev, <br>
        te ćemo Vam poslati ponudu za putovanje po Vašoj mjeri.<br>" type="top" />
    <!-- <x-cta-novosti/> -->

    @foreach (tag('collection:posebna_ponuda', ['limit' => 1]) as $entry)
        <x-cta-custom-home-cms title="{{ $entry->augmentedValue('title') }}"
            img="{{$entry->augmentedValue('assets')->value('raw')->count() > 0 ?
            $entry->augmentedValue('assets')->value('raw')[0]->augmentedValue('path') : ''}}"
            undertitle="{{ $entry->augmentedValue('podnaslov') }}"
            content="{!! $entry->augmentedValue('content') !!}"
            excerpt="{!!$entry->augmentedValue('excerpt')!!}"
            url="{{ $entry->augmentedValue('url') }}" />
    @endforeach
    <x-contact-line />
    <x-footer-top />

@endsection
