<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="{{ mix('css/app.css') }}">
  <title>O nama - Sunčana Vura</title>
  <meta name="description" content="Imamo široko znanje, svi redom smo strastveni putnici i cilj nam je pružiti Vam sigurno putovanje i nezaboravno iskustvo.">
  <meta name="robots" content="index, follow" />
  <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
</head>
<body>
  @include('cookieConsent::index')
  <x-header/>
  <div class="py-16 bg-gray-50 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
        <div class="text-base max-w-prose mx-auto lg:max-w-none">
          <h2 class="text-base text-yellow-600 font-semibold tracking-wide uppercase">Tko smo mi?</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Upoznajte nas</p>
        </div>
        <div class="relative  text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
          <p class="text-lg text-gray-500">SUNČANA VURA, specijalizirana putnička agencija za prodaju aviokarata.
          Agencija je osnovana 2000., vlasnica ELICA RAJLIĆ</p>
        </div>
        <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div class="relative">
            <div class="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">

              <h3>Tko smo?</h3>
              <p>U 30 godina postojanja postali smo glavni pružatelji usluge vodećim svjetskim i domaćim kompanijama te svim ljubiteljima putovanja i učenja.  </p>

              <h3>Što nudimo?</h3>
              <p>Sve što vam treba na jednom mjestu - avio karte, turistički aranžman ili samo smještaj, krstarenje, obrazovne programe u inozemstvu
                i sve popratne turističke usluge.</p>

              <h3>Zašto baš mi?</h3>
              <p>U svakom području se prilagođavamo osobnim potrebama klijenata i poslovnim potrebama naših partnera.
                Bez obzira na to na kojem kraju svijeta se nalazite, mi smo uz vas 24 sata dnevno, 7 dana u tjednu.</p>

            </div>
          </div>
          <div class="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
            <svg class="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
              <defs>
                <pattern id="bedc54bc-7371-44a2-a2bc-dc68d819ae60" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
            </svg>
            <blockquote class="relative bg-white rounded-lg shadow-lg">
              <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <img src="/img/logo.jpeg" alt="Suncana Vura" class="h-8">
                <div class="relative text-lg text-gray-700 font-medium mt-8">
                  <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p class="relative">Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus.</p>
                </div>
              </div>
              <cite class="relative flex items-center sm:items-start bg-yellow-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                <div class="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                  <img class="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300" src="/img/elica_rajlic.png" alt="Elica Rajlic">
                </div>
                <span class="relative ml-4 text-yellow-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                  <p class="text-white font-semibold sm:inline">Elica Rajlić</p>
                  <p class="sm:inline">Direktorica</p>
                </span>
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>

  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-white">
      <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-12">
          <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 class="text-3xl font-extrabold text-black tracking-tight sm:text-4xl">Upoznajte naš tim</h2>
            <p class="text-xl text-gray-600">Imamo široko znanje, svi redom smo strastveni putnici i cilj nam je pružiti Vam sigurno putovanje i nezaboravno iskustvo.</p>
          </div>
          <ul class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
              <x-employee-list-item image="elica_rajlic.png" name="Elica Rajlić" role="Direktorica"/>
              <x-employee-list-item image="predrag_rajlic.png" name="Predrag Rajlić" role="Direktor crew centra"/>
              <x-employee-list-item image="alida_bolaric.png" name="Alida Bolarić" role="Voditeljica odijela za programe"/>
              <x-employee-list-item image="nikola_prpic.png" name="Nikola Prpić" role="Voditelj odjela za turizam"/>
              <x-employee-list-item image="circle-cropped.png" name="Nataša Bogdanić" role="Ticketing manager"/>
              <x-employee-list-item image="andreja_bicak.png" name="Andreja Bičak" role="Ticketing manager"/>
              <x-employee-list-item image="danijela_mandic.png" name="Danijela Mandić" role="Ticketing manager"/>
              <x-employee-list-item image="vedran_rozmaric.png" name="Vedran Rožmarić" role="Dizajn i web podrska"/>
              <x-employee-list-item image="darko_kovac.png" name="Darko Kovač" role="Ticketing manager"/>
              <x-employee-list-item image="ivana_selendic.png" name="Ivana Selendić" role="Ticketing manager"/>
              <x-employee-list-item image="martina.jpg" name="Marina Kljajić" role="Računovodstvo i financije"/>
              <x-employee-list-item image="ante_mikulic.jpg" name="Ante Mikulić" role=""/>
          </ul>
        </div>
      </div>
    </div>
    <x-footer-register/>
    <x-footer/>
  </body>
</html>
