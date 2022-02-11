<div x-data="{mobile: false, open:false}" class="relative bg-gray-50">
  <div class="relative bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="{{ route('naslovna') }}">
            <span class="sr-only">Workflow</span>
            <img class="h-8 w-auto sm:h-10" src="/img/logo.jpeg" alt="Suncana Vura">
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button @click="mobile = true" type="button"
            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: outline/menu -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" aria-hidden="true">
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
        @guest
          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="{{ route('login') }}"
              class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Prijava
            </a>
            <a href="{{ route('register') }}"
              class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700">
              Registracija
            </a>
          </div>
        @else
          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <div class="lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
              <!-- Profile dropdown -->
              <div @click.away="open = false" class="flex-shrink-0 relative ml-4" x-data="{ open: false }">
                <div @click="open = !open" class="flex items-center space-x-2">
                  <span class="cursor-pointer font-medium">{{ auth()->user()->name }}</span>
                  <button
                    class="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    id="user-menu" aria-haspopup="true" x-bind:aria-expanded="open" aria-expanded="true">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-9 w-9 rounded-full" src="{{ auth()->user()->profile_photo_url }}" alt="">
                  </button>
                </div>
                <div x-show="open" x-description="Profile dropdown panel, show/hide based on dropdown state."
                  x-transition:enter="transition ease-out duration-100"
                  x-transition:enter-start="transform opacity-0 scale-95"
                  x-transition:enter-end="transform opacity-100 scale-100"
                  x-transition:leave="transition ease-in duration-75"
                  x-transition:leave-start="transform opacity-100 scale-100"
                  x-transition:leave-end="transform opacity-0 scale-95"
                  class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1"
                  role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <a href="@if (auth()->user()->role == 'admin') /admin/dashboard @else
                    /user/dashboard @endif"
                    class="block py-2 px-4 text-base font-medium text-gray-700 hover:bg-gray-100"
                    role="menuitem">Kontrolna ploča</a>
                  <form method="POST" action="{{ route('logout') }}">
                    @csrf
                    <button type="submit"
                      class="block w-full py-2 px-4 text-left text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none">
                      Odjavi se
                    </button>
                  </form>
                  {{-- <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a> --}}
                </div>
              </div>
            </div>
          </div>
        @endguest
      </div>
    </div>

    <div x-show.transition="mobile"
      class="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden">
      <div class="py-5 border-2 border-yellow-200 rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-100">
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between">
            <div>
              <img class="h-8 w-auto" src="/img/logo.jpeg" alt="Suncana vura">
            </div>
            <div class="-mr-2">
              <button @click="mobile = false" type="button"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6">
            <nav class="grid gap-y-8">
              <a href="/" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                <!-- Heroicon name: outline/chart-bar -->
                <svg class="flex-shrink-0 h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20" fill="currentColor">
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">
                  Naslovna
                </span>
              </a>

              <a href="/usluge" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                <!-- Heroicon name: outline/cursor-click -->
                <svg class="flex-shrink-0 h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd" />
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">
                  Usluge
                </span>
              </a>

              <a href="/o-nama" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                <!-- Heroicon name: outline/shield-check -->
                <svg class="flex-shrink-0 h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z"
                    clip-rule="evenodd" />
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">
                  O nama
                </span>
              </a>

              <a href="/kontakt" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                <!-- Heroicon name: outline/view-grid -->
                <svg class="flex-shrink-0 h-6 w-6 text-yellow-600" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20" fill="currentColor">
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
        @guest
          <div class="py-6 px-5 space-y-6">
            <div>
              <a href="{{ route('register') }}"
                class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700">
                Registracija
              </a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Postojeci korisnik?
                <a href="{{ route('login') }}" class="text-yellow-600 hover:text-yellow-500">
                  Prijava
                </a>
              </p>
            </div>
          </div>
        @else
        <div class="py-6 px-5 space-y-6">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" src="{{ auth()->user()->profile_photo_url }}">
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-gray-800">{{ auth()->user()->name }}</div>
              <div class="text-sm font-medium text-gray-500">{{ auth()->user()->email }}</div>
            </div>
          </div>
          <div>
            <a href="@if (auth()->user()->role == 'admin') /admin/dashboard @else
              /user/dashboard @endif"
              class="w-full flex items-center justify-center px-4 py-2 border border-transparent
              rounded-md shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700">
              Kontrolna ploča
            </a>
            <p class="mt-4 text-center text-base font-medium text-gray-500">
              <form method="POST" action="{{ route('logout') }}">
                @csrf
                <button type="submit"
                  class="w-full flex items-center justify-center px-4 py-2 border border-transparent
                  shadow rounded-md shadow-sm text-base font-medium text-yellow-600 bg-white hover:bg-gray-50">
                  Odjavi se
                </button>
              </form>
              {{-- Postojeci korisnik?
              <a href="#" class="text-yellow-600 hover:text-yellow-500">
                Prijava
              </a> --}}
            </p>
          </div>
        </div>
{{--           <div class="border-t border-gray-200 pt-4 pb-3 px-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full" src="{{ auth()->user()->profile_photo_url }}">
              </div>
              <div class="ml-3">
                <div class="text-base font-medium text-gray-800">{{ auth()->user()->name }}</div>
                <div class="text-sm font-medium text-gray-500">{{ auth()->user()->email }}</div>
              </div>
            </div>
            <div class="border-t border-gray-200 mt-4 px-2 py-5 space-y-5">
              <a href="/o-nama" class="-my-3 -mx-4 p-3 flex items-center rounded-md hover:bg-gray-50">
                <!-- Heroicon name: document-report -->
                <svg
                class="flex-shrink-0 h-6 w-6 text-yellow-600"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clip-rule="evenodd" />
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">
                  O nama
                </span>
              </a>
              <a href="/o-nama" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                <!-- Heroicon name: logout -->
                <svg
                class="flex-shrink-0 h-6 w-6 text-yellow-600"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span class="ml-3 text-base font-medium text-gray-900">
                  O nama
                </span>
              </a>
            </div>
          </div> --}}
        @endguest
      </div>
    </div>
  </div>
