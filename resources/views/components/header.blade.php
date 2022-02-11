<div x-data="{mobile: false,programi: false,menu: true}" class="relative bg-gray-50">
    <div class="relative bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center py-5 lg:justify-start lg:space-x-10">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span class="sr-only">Sunčana vura</span>
              <img class="h-10 w-auto sm:h-12" src="/img/logo.jpeg" alt="Suncana Vura">
            </a>
          </div>
          <div class="-mr-2 -my-2 lg:hidden">
            <button @click="mobile = true" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Open menu</span>
              <!-- Heroicon name: outline/menu -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav class="hidden lg:flex justify-start space-x-8  text-sm">

            <a href="/avio-karte" class=" uppercase font-medium text-gray-600 hover:text-gray-900">
              aviokarte
            </a>
            <a href="/hoteli" class=" uppercase font-medium text-gray-600 hover:text-gray-900">
              hoteli
            </a>
            <a href="/putovanja" class=" uppercase font-medium text-gray-600 hover:text-gray-900">
              putovanja
            </a>
            <div x-data="{open1: false}" class="relative">
              <button @click="open1 = true" type="button" class="text-gray-600 group uppercase bg-white rounded-md inline-flex items-center text-sm font-medium hover:text-gray-900 focus:outline-none focus:text-gray-600" aria-expanded="false">
                <span>Programi</span>
                <svg class="text-gray-400 ml-2 h-4 w-4 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>

              <div x-show.transition="open1" x-cloak @click.away="open1 = false" class="absolute z-10  mt-3 px-2 w-screen max-w-md sm:px-0">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">

                    <a href="/work-and-travel" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                      <svg class="flex-shrink-0 h-8 w-8 flex items-center justify-center text-myyellow" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          Work and travel
                        </p>
                        <p class="mt-1 text-xs text-gray-500">
                          Provedi nezaboravno ljeto u Americi!
                        </p>
                      </div>
                    </a>

                    <a href="/au-pair" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                      <svg class="flex-shrink-0 h-8 w-8 flex items-center justify-center text-myyellow" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          Au pair
                        </p>
                        <p class="mt-1 text-xs text-gray-500">
                          Au pair je mlada osoba koja živi kao član jedne obitelji u nekoj stranoj zemlji.
                        </p>
                      </div>
                    </a>

                    <a href="/obrazovni-programi" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                      <svg class="flex-shrink-0 h-8 w-8 flex items-center justify-center text-myyellow" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          Obrazovni programi
                        </p>
                        <p class="mt-1 text-xs text-gray-500">
                          Naš iskusni tim budno prati programe u inozemstvu za studente, djecu i odrasle.
                        </p>
                      </div>
                    </a>

                    <a href="/all-abroad" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150">
                        <svg class="flex-shrink-0 h-8 w-8 flex items-center justify-center text-myyellow" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                        </svg>
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900">
                            All Abroad
                          </p>
                          <p class="mt-1 text-xs text-gray-500">
                            Izloženost raznolikim iskustvima je ključ rasta, a putovanja su izvor nadahnuća.
                          </p>
                        </div>
                      </a>
                  </div>
                  <div class="px-5 py-2 bg-white space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">


                  </div>
                </div>
              </div>
            </div>

            <a href="/akcije" class="uppercase font-medium text-gray-600 hover:text-gray-900">
              akcije
            </a>
         <!--   <a href="/novosti" class="uppercase font-medium text-gray-600 hover:text-gray-900">
              novosti
            </a> -->
            <a href="/o-nama-i-kontakt" class="uppercase font-medium text-gray-600 hover:text-gray-900">
              Kontakt
            </a>

          </nav>
          @guest
          <div class="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">

            <a href="{{route('login')}}" class="whitespace-nowrap text-sm uppercase font-medium text-indigo-600 hover:text-gray-900 ">
              Prijava
            </a>
            <a href="{{route('register')}}" class="ml-6 whitespace-nowrap inline-flex items-center justify-center px-3 py-2 border border-transparent rounded shadow-sm text-sm font-semibold uppercase text-white bg-myindigo hover:bg-indigo-700">
              Registracija
            </a>
          </div>
          @else
          <div class="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
            <div class="lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                <!-- Profile dropdown -->
                <div @click.away="open = false" class="flex-shrink-0 relative ml-4" x-data="{ open: false }">
                  <div @click="open = !open" class="flex items-center space-x-2">
                    <span class="cursor-pointer font-medium uppercase text-indigo-600 text-sm">{{ auth()->user()->name }}</span>
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
                    class="origin-top-right absolute right-0 mt-2 w-48 rounded shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1"
                    role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                  <a href="@if (auth()->user()->role == 'admin') /admin/dashboard @else
                      /user/dashboard @endif"
                      class="block py-2 px-4 font-medium uppercase text-sm text-gray-600 hover:bg-gray-100"
                      role="menuitem">Kontrolna ploča</a>
                    <form method="POST" action="{{ route('logout') }}">
                      @csrf
                      <button type="submit"
                        class="block w-full py-2 px-4 text-left font-medium uppercase text-sm text-gray-600 hover:bg-gray-100 focus:outline-none">
                        Odjavi se
                      </button>
                    </form>
                    {{-- <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a> --}}
                  </div>
                </div>
              </div>
            {{-- <a href="{{route('login')}}" class="whitespace-nowrap text-sm uppercase font-medium text-indigo-600 hover:text-gray-900 ">
              Prijava
            </a>
            <a href="{{route('register')}}" class="ml-6 whitespace-nowrap inline-flex items-center justify-center px-3 py-2 border border-transparent rounded shadow-sm text-sm font-semibold uppercase text-white bg-myindigo hover:bg-indigo-700">
              Registracija
            </a> --}}
          </div>
          @endguest
        </div>
      </div>

      <div x-cloak x-show.transition="mobile" class="absolute top-0 inset-x-0 z-30 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div  class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div class="w-full py-4 ">
                <img class=" h-12 " src="/img/logo.jpeg" alt="Suncana vura">
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

            <div x-show="menu" class="mt-6">
              <p class="text-2xl font-bold ml-3 text-myyellow uppercase p-3">Meni</p>
              <nav class="grid gap-y-1">
                <a href="/avio-karte" class=" p-3 flex items-center rounded-md hover:bg-gray-50">
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Aviokarte
                  </span>
                </a>

                <a href="/hoteli" class=" p-3 flex items-center rounded-md hover:bg-gray-50">
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Hoteli
                  </span>
                </a>

                <a href="/putovanja" class=" p-3 flex items-center rounded-md hover:bg-gray-50">
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Putovanja
                  </span>
                </a>

                <a  @click="menu=false,programi=true" class=" p-3 flex items-center rounded-md hover:bg-gray-50">
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Programi
                  </span>
                </a>

                <a href="/akcije" class=" p-3 flex items-center rounded-md hover:bg-gray-50">
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Akcije
                  </span>
                </a>

            <!--    <a href="/novosti" class=" p-3 flex items-center rounded-md hover:bg-gray-50">
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Novosti
                  </span>
                </a> -->

                <a href="/o-nama-i-kontakt" class=" p-3 flex items-center rounded-md hover:bg-gray-50">
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Kontakt
                  </span>
                </a>

              </nav>
            </div>

            <div x-show="programi" class="mt-6">
              <p @click="programi=false,menu=true" class="text-2xl font-bold ml-3 text-myyellow uppercase p-3">
                <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                </svg>
              </p>
              <nav class="grid gap-y-1">

                <a href="/work-and-travel" class=" p-3 flex items-center rounded-md hover:bg-gray-50">
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Work and travel
                  </span>
                </a>
                <a href="/au-pair"  class=" p-3 flex items-center rounded-md hover:bg-gray-50">
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Au pair
                  </span>
                </a>
                <a href="/obrazovni-programi"  class=" p-3 flex items-center rounded-md hover:bg-gray-50">
                  <span class="ml-3 text-base font-medium text-gray-900">
                    Obrazovni programi
                  </span>
                </a>
                <a href="/all-abroad" class=" p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span class="ml-3 text-base font-medium text-gray-900">
                      All Abroad
                    </span>
                  </a>

              </nav>
            </div>
          </div>
          @guest
          <div class="py-6 px-5 space-y-6">
            <div>
              <a href="{{route('register')}}" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-myindigo hover:bg-indigo-700">
                Registracija
              </a>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Postojeći korisnik?
                <a href="{{route('login')}}" class="text-myyellow hover:text-myyellow-500">
                  Prijava
                </a>
              </p>
            </div>
          </div>
          @else
          <div class="py-6 px-5 space-y-6">
            <div class="flex items-center ml-6">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full" src="{{ auth()->user()->profile_photo_url }}">
              </div>
              <div class="ml-3">
                <div class="text-base font-medium text-gray-800">{{ auth()->user()->name }}</div>
                <div class="text-sm font-medium text-gray-500">{{ auth()->user()->email }}</div>
              </div>
            </div>
            <div class="px-6">
              <a href="@if (auth()->user()->role == 'admin') /admin/dashboard @else
                /user/dashboard @endif"
                class="w-full flex items-center justify-center px-4 py-2 border border-transparent
                rounded-md shadow-sm text-base font-medium text-white bg-yellow hover:bg-yellow">
                Kontrolna ploča
              </a>
              <p class="mt-4 text-center text-base font-medium text-gray-500">
                <form method="POST" action="{{ route('logout') }}">
                  @csrf
                  <button type="submit"
                    class="w-full flex items-center justify-center px-4 py-2 border border-transparent
                    rounded-md shadow-sm text-base font-medium text-myyellow-600 bg-white hover:bg-gray-50">
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
          @endguest
        </div>
      </div>
    </div>
