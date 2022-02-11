<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <title>Kontakt - Sunčana Vura</title>

    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
</head>
<body>
   

    <x-header/>

  
<div class="relative">
    <div class="absolute inset-0">
      <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
    </div>
    <div class="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
      <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12 border-b-8 border-yellow-600">
        <div class="max-w-lg mx-auto">
          <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Kontaktirajte nas   
          </h2>
          <p class="mt-3 text-lg leading-6 text-gray-500">
            Ukoliko imate bilo kakvih pitanja vezanih uz naše usluge pošaljite nam upit
          </p>
          <dl class="mt-8 text-base text-gray-500">
            <div>
              <dt class="sr-only">Adresa</dt>
              <dd>
                <p>Kožarska 2, 10000</p>
                <p>Zagreb, Hrvatska</p>
              </dd>
            </div>
            <div class="mt-6">
              <dt class="sr-only">Telefon</dt>
              <dd class="flex">
                <!-- Heroicon name: outline/phone -->
                <svg class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span class="ml-3">
                    + 385 1 4813 726
                </span>
              </dd>
            </div>
            <div class="mt-3">
              <dt class="sr-only">Email</dt>
              <dd class="flex">
                <!-- Heroicon name: outline/mail -->
                <svg class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="ml-3">
                    travelsv@suncana.org
                </span>
              </dd>
            </div>
            <div class="mt-3">
              <dt class="sr-only">Radno vrijeme</dt>
              <dd class="flex">
                <!-- Heroicon name: outline/mail -->
                <svg class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="ml-3">
                  pon - pet 9 - 17 h
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12 border-b-8 border-yellow-600">
        <div class="max-w-lg mx-auto lg:max-w-none">
          <form action="#" method="POST" class="grid grid-cols-1 gap-y-6">
            <div>
              <label for="full_name" class="sr-only">Full name</label>
              <input type="text" name="full_name" id="full_name" autocomplete="name" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md" placeholder="Ime i prezime">
            </div>
            <div>
              <label for="email" class="sr-only">Email</label>
              <input id="email" name="email" type="email" autocomplete="email" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md" placeholder="E-mail">
            </div>
            <div>
              <label for="phone" class="sr-only">Phone</label>
              <input type="text" name="phone" id="phone" autocomplete="tel" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md" placeholder="Telefon">
            </div>
            <div>
              <label for="message" class="sr-only">Message</label>
              <textarea id="message" name="message" rows="4" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md" placeholder="Poruka"></textarea>
            </div>
            <div>
              <button type="submit" class="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                Pošalji
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-gray-50 ">
  <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
      <div>
        <h2 class="text-2xl font-extrabold text-black sm:text-3xl">
          Dodatne informacije 
        </h2>
        <div class="mt-3">
          <p class="text-md text-gray-600">
              ID KOD:	HR-AB-080092804 <br>
              MB:	1222040 <br>
              OIB:	81240702858 <br>
              Žiro račun:	2484008-1100342768 <br>
              IATA No:	75-3 20884 <br>
              IBAN:	HR4724840081100342768 <br>
              SWIFT:	RZBHHR2X <br>
              UPRAVA:	Elica Rajlić
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  
  
  
  
  
  
<x-footer-register/>
<x-footer/>
  
    
</body>
</html>