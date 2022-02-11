<x-guest-layout>
  <div class="min-h-screen bg-white flex">
    <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <a href="/"><img class="h-12 w-auto" src="/img/logo.jpeg" alt="Sunčana vura"></a>
          @if (url()->previous() == route('register'))
            <h1 class="mt-6 text-3xl font-extrabold text-gray-900">Hvala Vam što ste se registrirali</h1>
          @else
            <h1 class="mt-6 text-3xl font-extrabold text-gray-900">Vaša email adresa nije verificirana</h1>
          @endif
          <p class="mt-2 text-sm text-gray-600 max-w">
            Da bi završili proces registracije morate verificrati Vaš email putem poveznice
            koju smo Vam poslali na Vaš email.
            Ukoliko niste dobili email rado ćemo Vam ga opet poslati.
          <div class="flex flex-col">
            @if (session('status') == 'verification-link-sent')
              <div class="mt-4 text-sm text-green-700">
                Nova verifikacijska povaznica je poslana na e-mail adresu pomoću koje ste izvršili
                registraciju.
              </div>
            @endif
            <form method="POST" action="{{ route('verification.send') }}">
              @csrf
              <div>
                <button type="submit" class="mt-4 font-medium text-indigo-600 hover:text-indigo-500">
                  Ponovo pošalji verifikacijski email
                </button>
              </div>
            </form>
            <form method="POST" action="{{ route('logout') }}">
              @csrf
              <button type="submit" class="mt-4 font-medium text-indigo-600 hover:text-indigo-500">
                Odjavi se
              </button>
            </form>
          </div>
          </p>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img class="absolute inset-0 h-full w-full object-cover" src="/img/login.jpg" alt="">
    </div>
  </div>
</x-guest-layout>
