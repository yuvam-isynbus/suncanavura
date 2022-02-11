<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>{{ config('app.name', 'Laravel') }}</title>

  <!-- Fonts -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

  <!-- Styles -->
  <link rel="stylesheet" href="{{ mix('css/app.css') }}">

  @livewireStyles

  <!-- Scripts -->
  {{-- <script src="{{ mix('js/app.js') }}" defer></script> --}}
</head>

<body class="antialiased">

  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span class="sr-only">Sunčana vura</span>
                  <img class="h-8 w-auto sm:h-10" src="img/logo.jpeg">
                </a>
                <div class="-mr-2 flex items-center md:hidden">
                  <button type="button"
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    id="main-menu" aria-haspopup="true">
                    <span class="sr-only">Open main menu</span>
                    <!-- Heroicon name: menu -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              <a href="/" class="font-medium text-gray-500 hover:text-gray-900">Početna</a>
              <a href="#" class="font-medium text-gray-500 hover:text-gray-900">O nama</a>
              <a href="#" class="font-medium text-gray-500 hover:text-gray-900">Kontakt</a>
            </div>
          </nav>
        </div>

        <!--
                  Mobile menu, show/hide based on menu open state.

                  Entering: "duration-150 ease-out"
                    From: "opacity-0 scale-95"
                    To: "opacity-100 scale-100"
                  Leaving: "duration-100 ease-in"
                    From: "opacity-100 scale-100"
                    To: "opacity-0 scale-95"
                -->
        <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right hidden md:hidden">
          <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div class="px-5 pt-4 flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="">
              </div>
              <div class="-mr-2">
                <button type="button"
                  class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close main menu</span>
                  <!-- Heroicon name: x -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
              <div class="px-2 pt-2 pb-3 space-y-1" role="none">
                <a href="#"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem">Product</a>

                <a href="#"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem">Features</a>

                <a href="#"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem">Marketplace</a>

                <a href="#"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  role="menuitem">Company</a>
              </div>
              <div role="none">
                <a href="#"
                  class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  role="menuitem">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>

        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block xl:inline">Prijavite se za</span>
              <span class="block text-yellow-300 xl:inline">work&travel</span>
            </h1>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Sunčana vura vam omogućuje automatizirnu prijavu za work&travel s našim timom koji je s vama uz svaki
              korak
            </p>
            @guest
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <a href="{{ route('register') }}"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10">
                    Registriraj se
                  </a>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <a href="{{ route('login') }}"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent
                          text-base font-medium rounded-md text-yellow-700 bg-yellow-100 hover:bg-yellow-200 md:py-4 md:text-lg md:px-10">
                    Prijavi se
                  </a>
                </div>
              </div>
            @else
              <div class="mt-5 sm:mt-8">
                <div class="py-4 text-lg md:text-2xl text-yellow-700 text-center lg:text-left">
                  Dobrodošli <span class="font-semibold">{{ auth()->user()->email }}</span>
                </div>
                <div class="rounded-md shadow lg:w-10/12">
                  <a href="@if(auth()->user()->role == 'admin') /admin/dashboard @else /user/dashboard @endif"
                    class="w-full flex items-center justify-center px-8 py-3 border
                            border-transparent text-base font-medium rounded-md text-white bg-yellow-600
                            hover:bg-yellow-700 md:py-4 md:text-lg md:px-10">
                    Idi na kontrolnu ploču
                  </a>
                </div >
                <form method="POST" action="{{ route('logout') }}">
                  @csrf
                  <button type="submit"
                    class="w-full mt-4 text-lg font-medium text-yellow-600 hover:text-yellow-500
                    text-center lg:text-left focus:outline-none">
                    Odjavi se
                  </button>
                </form>
              </div>
            @endguest
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="img/cover.jpg" alt="">
    </div>
  </div>

  <!-- Usluge -->

  <div class="bg-white overflow-hidden">
    <div class="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <svg
        class="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
        width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
        <defs>
          <pattern id="8b1b5f72-e944-4457-af67-0c6d15a99f38" x="0" y="0" width="20" height="20"
            patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
      </svg>

      <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div class="lg:col-span-1">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Kako funkcionira prijava?
          </h2>
        </div>
        <dl class="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
          <div>
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
              <!-- Heroicon name: globe-alt -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div class="mt-5">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Registracija
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Prvi korak je registracija na stranicu tako da se kreira vaš profil
              </dd>
            </div>
          </div>

          <div>
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
              <!-- Heroicon name: scale -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <div class="mt-5">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Prijava
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Drugi korak je početak same prijave untutar postojećeg korisničkog računa
              </dd>
            </div>
          </div>

          <div>
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
              <!-- Heroicon name: lightning-bolt -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div class="mt-5">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Dijelovi
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Treći korak je popunjavanje dijelova same prijave gdje svakim zavšenim dijelom korisnik prelazi na novi
              </dd>
            </div>
          </div>

          <div>
            <div class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
              <!-- Heroicon name: mail -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="mt-5">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Plaćanje
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Nakon zavšetka same prijave, online plaćanje je omogućeno za troškove prijave
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>


  <!-- Paketi -->

  <div class="bg-yellow-900">
    <div class="pt-12 sm:pt-16 lg:pt-24">
      <div class="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">
          <h2 class="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
            Paketi
          </h2>
          <p class="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Prava cijena za vas
          </p>
          <p class="text-xl text-gray-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sequi unde repudiandae natus.
          </p>
        </div>
      </div>
    </div>
    <div class="mt-8 pb-12 bg-white sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
      <div class="relative">
        <div class="absolute inset-0 h-3/4 bg-yellow-900"></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                <div>
                  <h3
                    class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-yellow-100 text-yellow-600"
                    id="tier-standard">
                    Independent placement
                  </h3>
                </div>
                <div class="mt-4 flex items-baseline text-5xl font-extrabold">
                  7.275,00 HRK
                  <span class="ml-1 text-2xl font-medium text-gray-500">

                  </span>
                </div>
                <p class="mt-5 text-lg text-gray-500">
                  Viza i avionska karta nisu uključene u cijenu!
                </p>
              </div>
              <div class="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Pariatur quod similique
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Sapiente libero doloribus modi nostrum
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Vel ipsa esse repudiandae excepturi
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Itaque cupiditate adipisci quibusdam
                    </p>
                  </li>
                </ul>
                <div class="rounded-md shadow">
                  <a href="#"
                    class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-800 hover:bg-yellow-900"
                    aria-describedby="tier-standard">
                    Prijava
                  </a>
                </div>
              </div>
            </div>

            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                <div>
                  <h3
                    class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-yellow-100 text-yellow-600"
                    id="tier-standard">
                    Premium Placement
                  </h3>
                </div>
                <div class="mt-4 flex items-baseline text-5xl font-extrabold">
                  10.015,00 HRK
                  <span class="ml-1 text-2xl font-medium text-gray-500">

                  </span>
                </div>
                <p class="mt-5 text-lg text-gray-500">
                  Viza i avionska karta nisu uključene u cijenu!
                </p>
              </div>
              <div class="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Pariatur quod similique
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Sapiente libero doloribus modi nostrum
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Vel ipsa esse repudiandae excepturi
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Itaque cupiditate adipisci quibusdam
                    </p>
                  </li>
                </ul>
                <div class="rounded-md shadow">
                  <a href="#"
                    class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-800 hover:bg-yellow-900"
                    aria-describedby="tier-standard">
                    Prijava
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Tim -->

  <div class="bg-white">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
        <div class="space-y-5 sm:space-y-4">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Upoznajte naš tim</h2>
          <p class="text-xl text-gray-500">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum
            enim vitae ullamcorper suspendisse. Vivamus fringilla.</p>
        </div>
        <div class="lg:col-span-2">
          <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
            <li>
              <div class="flex items-center space-x-4 lg:space-x-6">
                <img class="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="">
                <div class="font-medium text-lg leading-6 space-y-1">
                  <h3>Leslie Alexander</h3>
                  <p class="text-indigo-600">Co-Founder / CEO</p>
                </div>
              </div>
            </li>

            <li>
              <div class="flex items-center space-x-4 lg:space-x-6">
                <img class="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="">
                <div class="font-medium text-lg leading-6 space-y-1">
                  <h3>Michael Foster</h3>
                  <p class="text-indigo-600">Co-Founder / CTO</p>
                </div>
              </div>
            </li>

            <li>
              <div class="flex items-center space-x-4 lg:space-x-6">
                <img class="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="">
                <div class="font-medium text-lg leading-6 space-y-1">
                  <h3>Dries Vincent</h3>
                  <p class="text-indigo-600">Manager, Business Relations</p>
                </div>
              </div>
            </li>

            <li>
              <div class="flex items-center space-x-4 lg:space-x-6">
                <img class="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="">
                <div class="font-medium text-lg leading-6 space-y-1">
                  <h3>Lindsay Walton</h3>
                  <p class="text-indigo-600">Front-end Developer</p>
                </div>
              </div>
            </li>

            <li>
              <div class="flex items-center space-x-4 lg:space-x-6">
                <img class="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="">
                <div class="font-medium text-lg leading-6 space-y-1">
                  <h3>Courtney Henry</h3>
                  <p class="text-indigo-600">Designer</p>
                </div>
              </div>
            </li>

            <li>
              <div class="flex items-center space-x-4 lg:space-x-6">
                <img class="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="">
                <div class="font-medium text-lg leading-6 space-y-1">
                  <h3>Tom Cook</h3>
                  <p class="text-indigo-600">Director, Product Development</p>
                </div>
              </div>
            </li>

            <!-- More people... -->
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->

  <footer class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
        <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-500 hover:text-gray-900">
            Usluge
          </a>
        </div>

        <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-500 hover:text-gray-900">
            O nama
          </a>
        </div>

        <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-500 hover:text-gray-900">
            Kontakt
          </a>
        </div>

      </nav>
      <div class="mt-8 flex justify-center space-x-6">
        <a href="#" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Facebook</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clip-rule="evenodd" />
          </svg>
        </a>

        <a href="#" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Instagram</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clip-rule="evenodd" />
          </svg>
        </a>

        <a href="#" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Twitter</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>

      </div>
      <p class="mt-8 text-center text-base text-gray-400">
        &copy; 2020 Sunčana Vura d.o.o. Sva prava pridržana.
      </p>
    </div>
  </footer>

</body>

</html>
