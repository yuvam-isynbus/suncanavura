<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <title>Sunčana Vura</title>

        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
    </head>
    <body>
        

      <x-header/>

      <x-cover/>

  

 


  <!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-yellow-900">
    <div class="pt-12 sm:pt-16 lg:pt-24">
      <div class="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">
          <h2 class="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
            Usluge
          </h2>
          <p class="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Istražite usluge koje nudimo
          </p>
          <p class="text-xl text-gray-300">
           Naše usluge vam omogučavaju kvalitetu koju garantiramo
          </p>
        </div>
      </div>
    </div>
    <div class="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
      <div class="relative">
        <div class="absolute inset-0 h-3/4 bg-yellow-900"></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                <div>
                  <h3 class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-yellow-100 text-yellow-600" id="tier-standard">
                    Novo
                  </h3>
                </div>
                <div class="mt-4 flex items-baseline text-5xl font-extrabold">
                  Online prijave
                  <span class="ml-1 text-2xl font-medium text-gray-500">
                    
                  </span>
                </div>
                <p class="mt-5 text-lg text-gray-500">
                  Work & travel i zaposljavanje u inozemstvu
                </p>
              </div>
              <div class="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Work & Travel
                    </p>
                  </li>
  
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Zapošljavanje u inozemstvu
                    </p>
                  </li>
  
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Brze online prijave
                    </p>
                  </li>
  
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Podrška
                    </p>
                  </li>
                </ul>
                <div class="rounded-md shadow">
                  <a href="/usluge" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-800 hover:bg-yellow-900" aria-describedby="tier-standard">
                    Saznaj više
                  </a>
                </div>
              </div>
            </div>
  
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                <div>
                  <h3 class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-pink-100 text-pink-600" id="tier-standard">
                    Uskoro
                  </h3>
                </div>
                <div class="mt-4 flex items-baseline text-5xl font-extrabold">
                  Turizam
                  <span class="ml-1 text-2xl font-medium text-gray-500">
                  
                  </span>
                </div>
                <p class="mt-5 text-lg text-gray-500">
                 Dijelatnosti vezane uz turizam
                </p>
              </div>
              <div class="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Aviokarte
                    </p>
                  </li>
  
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Hoteli
                    </p>
                  </li>
  
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Rent a car
                    </p>
                  </li>
  
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Aranžmani
                    </p>
                  </li>
                </ul>
                <div class="rounded-md shadow">
                  <a href="/usluge" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-800 hover:bg-yellow-900" aria-describedby="tier-standard">
                    Saznaj više
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  </div>
  
  
  


  <!-- This example requires Tailwind CSS v2.0+ -->
<div class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-yellow-600 font-semibold tracking-wide uppercase">Prijava</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Kako funkcionira prijava?
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Sunčana vura nudi online prijave za work & travel kao i za zapošljavanje u inozemstvu. Proces prijave je jednostavan i <i class="text-yellow-600">user friendly</i> !
        </p>
      </div>
  
      <div class="my-16">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                <!-- Heroicon name: outline/globe-alt -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Formular
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Formular je prvi korak prijave
              </dd>
            </div>
          </div>
  
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                <!-- Heroicon name: outline/scale -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Dokumenti
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Online ucitavanje i cuvanje dokumenata u aplikaciji
              </dd>
            </div>
          </div>
  
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                <!-- Heroicon name: outline/lightning-bolt -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Komunikacija
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                 Komuniciramo preko poruka unutar aplikacije
              </dd>
            </div>
          </div>
  
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                <!-- Heroicon name: outline/annotation -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Plaćanje
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Online plaćanje preko aplikacije
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-yellow-800">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          Ovo su naše trenutne brojke
        </h2>
        <p class="mt-3 text-xl text-yellow-200 sm:mt-4">
          Svakim danom se trudimo da svaki korisnik bude zadovoljan kvalitetnom uslugom!
        </p>
      </div>
      <dl class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
        <div class="flex flex-col">
          <dt class="order-2 mt-2 text-lg leading-6 font-medium text-yellow-200">
            Prijave
          </dt>
          <dd class="order-1 text-xl font-extrabold text-white">
            USKORO <br>
            DOSTUPNO
          </dd>
        </div>
        <div class="flex flex-col mt-10 sm:mt-0">
          <dt class="order-2 mt-2 text-lg leading-6 font-medium text-yellow-200">
            Poslovi
          </dt>
          <dd class="order-1 text-xl font-extrabold text-white">
            USKORO <br>
            DOSTUPNO
          </dd>
        </div>
        <div class="flex flex-col mt-10 sm:mt-0">
          <dt class="order-2 mt-2 text-lg leading-6 font-medium text-yellow-200">
            Korisnici
          </dt>
          <dd class="order-1 text-xl font-extrabold text-white">
            USKORO <br>
            DOSTUPNO
          </dd>
        </div>
      </dl>
    </div>
  </div>
  
  
  
  
  
  <x-footer/>

  
    
  
    </body>
</html>
