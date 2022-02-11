<div x-data="{mobile: false}" class="relative bg-gray-50">
    <div class="relative bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span class="sr-only">Suncana vura</span>
              <img class="h-8 w-auto sm:h-10" src="/img/logo.jpeg" alt="Suncana Vura">
            </a>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button @click="mobile = true" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Open menu</span>
              <!-- Heroicon name: outline/menu -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav class="hidden md:flex space-x-10">

            <a href="/" class="text-base font-medium text-gray-500 hover:text-gray-900">
              Naslovna
            </a>
            <a href="/usluge" class="text-base font-medium text-gray-500 hover:text-gray-900">
              Usluge
            </a>
            <a href="/o-nama" class="text-base font-medium text-gray-500 hover:text-gray-900">
              O nama
            </a>
            <a href="/kontakt" class="text-base font-medium text-gray-500 hover:text-gray-900">
              Kontakt
            </a>

          </nav>

          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="{{-- {{route('login')}} --}}" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Prijava
            </a>
            <a href="{{-- {{route('register')}} --}}" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700">
              Registracija
            </a>
          </div>
        </div>
      </div>
  
      <div x-show.transition="mobile" class="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div class="w-full py-4 ">
                <img class=" w-24 " src="/img/logo.jpeg" alt="Suncana vura">
              </div>
              <div class="-mr-2">
                <button @click="mobile = false" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close menu</span>
                  <!-- Heroicon name: outline/x -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a href="/" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <!-- Heroicon name: outline/chart-bar -->
                  <svg class="flex-shrink-0 h-6 w-6 text-yellow-600"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Naslovna
                  </span>
                </a>
  
                <a href="/usluge" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <!-- Heroicon name: outline/cursor-click -->
                  <svg class="flex-shrink-0 h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Usluge
                  </span>
                </a>
  
                <a href="/o-nama" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <!-- Heroicon name: outline/shield-check -->
                  <svg class="flex-shrink-0 h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z" clip-rule="evenodd" />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-900">
                    O nama
                  </span>
                </a>
  
                <a href="/kontakt" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <!-- Heroicon name: outline/view-grid -->
                  <svg class="flex-shrink-0 h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Kontakt
                  </span>
                </a>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div>
              <a href="{{-- {{route('register')}} --}}" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700">
                Registracija
              </a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Postojeći korisnik?
                <a href="{{-- {{route('login')}} --}}" class="text-yellow-600 hover:text-yellow-500">
                  Prijava
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>