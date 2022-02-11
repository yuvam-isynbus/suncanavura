<x-guest-layout>
  <div class="min-h-screen bg-white flex">
    <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <a href="/"><img class="h-12 w-auto" src="/img/logo.jpeg" alt="Sunčana vura"></a>
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
            Zaboravio si lozinku?
          </h2>
          <p class="mt-2 text-sm text-gray-600 max-w">
            upiši svoj e-mail i postavi novu lozinku !
          </p>
        </div>

        <div class="mt-8">

          <x-validation-error />

          <div class="mt-6">
            @if (session('status'))
            <div class="mb-4 font-medium text-sm text-green-600">
                {{ session('status') }}
            </div>
            @endif
            <form action="{{ route('password.email') }}" method="POST" class="space-y-6">
              @csrf
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">
                  Email adresa
                </label>
                <div class="mt-1">
                  <input id="email" name="email" type="text" autocomplete="email"
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                </div>
              </div>

              <div>
                <button type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Pošalji link za resetiranje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img class="absolute inset-0 h-full w-full object-cover" src="/img/login.jpg" alt="">
    </div>
  </div>
</x-guest-layout>
