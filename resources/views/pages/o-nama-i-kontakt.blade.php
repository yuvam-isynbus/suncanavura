@extends('layouts.livewire-layout')

@section('content')

    <x-header-hero-pages title="O nama & kontakt" content="" img="kontakt_header.jpg" url="o-nama-i-kontakt#forma"
        button="Pošalji upit" />

    <div class="relative max-w-7xl px-6 lg:px-10 mx-auto bg-gray-50">
        <dl class="space-y-12 py-16 lg:px-10">
            <div>
                <dt class="text-lg font-medium text-warm-gray-900">
                    O NAMA
                </dt>
                <dd class="mt-2 text-lg text-warm-gray-500">
                    Svi mi zaposleni u Sunčanoj vuri smo znatiželjni i strastveni putnici, prvi koji će isprobati vlastitu ponudu!
                    Veseli nas kad vam možemo prenijeti svoja iskustva i cilj nam je pružiti vam sigurno i nezaboravno putovanje.
                    Jako smo ponosni i što je naša, na početku mala, agencija iz Tkalčićeve u 30 godina postojanja postala glavni pružatelj
                    usluge vodećim svjetskim i domaćim kompanijama kao i svim ljubiteljima putovanja i učenja.
                </dd>
            </div>

            <div>
                <dt class="text-lg font-medium text-warm-gray-900">
                    Što nudimo?
                </dt>
                <dd class="mt-2 text-lg text-warm-gray-500">
                    Sve što vam treba na jednome mjestu - aviokarte za stotine svjetskih destinacija, turističke aranžmane ili samo smještaj,
                    krstarenja, obrazovne programe u inozemstvu za velike i male, sve popratne turističke usluge: rent-a-car, transfere, vodiče…
                    U svakom području se prilagođavamo vašim potrebama i željama, osobnim ili poslovnim.
                    Bez obzira na to na kojem kraju svijeta se nalazitemi smo uz vas 24 sata dnevno, 7 dana u tjednu!
                </dd>
            </div>

        </dl>
    </div>

    <div class="relative w-full bg-graylighter py-10">
        <div class="slider-zaposleni swiper max-w-7xl grid grid-cols-1 lg:grid-cols-3 grid-rows-1 p-10 mx-auto">
            <div class="swiper-wrapper">

                @foreach (tag('nav:collection:zaposleni', ['limit' => 10]) as $entry)

                    <div class="swiper-slide col-span-1 flex flex-col">
                        @foreach ($entry['assets']->value() as $value)
                            <img src="{{ $value }}" alt="{{ $entry['title'] }}"
                                class="h-32 w-32 mx-auto shadow rounded-full object-cover object-center">
                        @endforeach
                        <p class="text-gray-900 font-bold text-lg text-center">{{ $entry['title'] }}</p>
                        <p class="text-gray-500 text-center">{{ $entry['uloga'] }}</p>

                    </div>

                @endforeach


            </div>
        </div>
        <div class="hidden md:block swiper-button-next-unique-zaposleni absolute z-20 right-2 cursor-pointer" style="top:40%">
            <svg class="w-12 h-12 text-myindigo" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </div>

        <div class="hidden md:block swiper-button-prev-unique-zaposleni absolute z-20 left-2 cursor-pointer"  style="top:40%">
            <svg class="w-12 h-12 text-myindigo" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
        </div>
    </div>


    <div class="relative max-w-7xl px-6 lg:px-10 mx-auto bg-gray-50">
        <h2 class="text-2xl px-4 lg:px-8 pt-16 font-medium text-warm-gray-900">
            Mi smo putnička agencija s tridesetogodišnjim iskustvom - obratite nam se s povjerenjem!
        </h2>

        <div class="relative lg:grid lg:grid-cols-5">

            <div class="bg-gray-50 py-16 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                <div>
                    <p class="  text-md text-gray-500">
                        <b class="text-gray-800">SUNČANA VURA d.o.o.</b> <br>
                        za poslovne usluge i turizam,
                        Kožarska 2,<br>
                        10000 Zagreb, Hrvatska<br>
                        OIB: 81240702858
                        <br><br>
                        <b class="text-gray-800">RADNO VRIJEME</b> <br>
                        Pon-pet: 09:00-17:00h <br>
                        *izvan radnog vremena po dogovoru <br>
                        *podrška 0-24 <br>
                        <br>
                        <b class="text-gray-800">POSLOVNA BANKA</b> <br>
                        RBA Raiffeisenbank Austria d.d., <br>
                        Magazinska cesta 69, Zagreb <br>
                        Broj računa: 24840081100342768 <br>
                        IBAN: HR4724840081100342768 <br>
                        SWIFT: RZBHHR2X <br>
                        <br>
                        Registracija: Trgovački sud u Zagrebu <br>
                        MBS: HR-AB-080092804 <br>
                        Temeljni kapital: 20.000,00 Kn, <br>
                        uplaćen u cijelosti <br>
                        Član uprave: Elica Rajlić <br>
                        <br>
                        <b class="text-gray-800">IATA No:</b> 75-3 20884

                    </p>

                </div>
            </div>
            <div id="forma" class="bg-gray-50 py-8 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                <div class="max-w-lg mx-auto lg:max-w-none">
                    <h2 class="text-gray-900 font-extrabold text-4xl  mb-6">Kontakt obrazac</h2>
                    <livewire:contact-form />
                </div>
            </div>
        </div>
    </div>

    <iframe id="mapa" class="max-w-7xl w-full py-10 px-6 lg:px-10 mx-auto rounded " height="500" frameborder="0" scrolling="no"
        marginheight="0" marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Ko%C5%BEarska%202,%20Zagreb,%20Croatia+(Sun%C4%8Dana%20Vura)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>



@endsection
