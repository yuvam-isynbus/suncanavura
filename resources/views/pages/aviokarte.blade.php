@extends('layouts.layout', [
  'title' => 'Aviokarte',
  'meta' => 'Aviokarte'
])

@section('content')

    <x-header-hero-pages
    title="aviokarte"
    content="Kvaliteta našeg poslovanja temelji se
    na dugogodišnjem iskustvu, suradnji
    sa svjetskim aviokompanijama
    i zadovoljnim putnicima."
    img="avio-hero.jpeg"
    url="/o-nama-i-kontakt#forma"
    button="Pošalji upit"
    />

    <x-cta-button
    content="Agencija SUNČANA VURA pruža uslugu prodaje svih vrsta aviokarata za poslovne i privatne korisnike te za sve destinacije svijeta po najpovoljnijim
    cijenama. Kvaliteta našeg poslovanja temelji se na dugogodišnjem iskustvu, suradnji sa svjetskim aviokompanijama i zadovoljnim putnicima.<br><br>
    Naše usluge dostupne su 24/7 čime Vam pružamo sigurnost da se možete osloniti na nas bez obzira gdje se i u kojem trenutku zatekli.
    Svakom klijentu pristupamo individualno i profesionalno vodeći računa o specifičnostima potreba.<br><br>
    Ispunite direktan zahtjev ili nam pošaljite upit za rezervaciju mailom i naši će Vam stručni djelatnici odgovoriti u najkraćem roku. <br>
    Sve vrste avio karata na jednom mjestu: <br><br>
    <b class='text-myindigo'>REGULARNE, POMORSKE, KORPORATIVNE, WORK AND TRAVEL, STUDENTSKE, ERASMUS, WINDMILL, OFFSHORE...</b>"
    url="/o-nama-i-kontakt#forma"
    button="Pošalji upit"
    />

    <x-offer-grid-gray
    title="Akcije"
    undertitle=""
    type="aktualno"
    />


    <x-icon-text-block/>

@endsection
