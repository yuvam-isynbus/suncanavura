    <form wire:submit.prevent="submitForm" action="/contact" method="POST" class="grid grid-cols-1 gap-y-6">
      @csrf
      {{-- <div style="display: none">
        <input wire:model="hfield" type="text" name="hfield" id="hfield">
        <input wire:model="htime" type="text" name="htime" id="htime">
      </div> --}}
      <x-honey recaptcha/>
      {{-- <x-honey /> --}}
      @if ($successMessage)
        <div class="rounded-md bg-green-50 p-4 mt-8">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm leading-5 font-medium text-green-800">
                {{ $successMessage ?? '' }}
              </p>
            </div>
          </div>
        </div>
      @endif
      @if (count($errors) > 0 || !$successMessage)
        <div>
          <label for="name" class="sr-only">Ime i prezime</label>
          <div class="relative rounded-md shadow-sm">
            <input wire:model="full_name" type="text" id="full_name" name="full_name" value="{{ old('full_name') }}"
              class="@error('full_name') border border-red-500 @enderror
                    block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-yellow-500
                    focus:border-yellow-500 border-gray-300 rounded-md" placeholder="Ime i prezime">
          </div>
          @error('full_name')
            <p class="text-red-500 mt-1">{{ $message }}</p>
          @enderror

        </div>
        <div>
          <label for="email" class="sr-only">Email</label>
          <div class="relative rounded-md shadow-sm">
            <input wire:model="email" id="email" type="text" name="email" value="{{ old('email') }}"
              class="@error('email') border border-red-500 @enderror block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
              placeholder="Email">
          </div>
          @error('email')
            <p class="text-red-500 mt-1">{{ $message }}</p>
          @enderror
        </div>
        <div>
          <label for="phone" class="sr-only">Kontakt broj</label>
          <div class="relative rounded-md shadow-sm">
            <input wire:model="phone" type="text" id="phone" name="phone" value="{{ old('phone') }}"
              class="@error('phone') border border-red-500 @enderror block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
              placeholder="Kontakt broj">
          </div>
          @error('phone')
            <p class="text-red-500 mt-1">{{ $message }}</p>
          @enderror
        </div>
        <div>
          <label for="company" class="sr-only">Tvrtka</label>
          <div class="relative rounded-md shadow-sm">
            <input wire:model="company" type="text" id="company" name="company" value="{{ old('company') }}"
              class="@error('company') border border-red-500 @enderror block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
              placeholder="Tvrtka">
          </div>
{{--           @error('company')
            <p class="text-red-500 mt-1">{{ $message }}</p>
          @enderror --}}
        </div>
        <div>
          <label for="message" class="sr-only">Poruka</label>
          <div class="relative rounded-md shadow-sm">
            <textarea wire:model="message" id="message" rows="4" name="message"
              class="@error('message')border border-red-500 @enderror block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-yellow-500 focus:border-yellow-500 border-gray-300 rounded-md"
              placeholder="Poruka">{{ old('message') }}</textarea>
          </div>
          @error('message')
            <p class="text-red-500 mt-1">{{ $message }}</p>
          @enderror
        </div>
        <div class="">
          <span class="inline-flex rounded-md shadow-sm">
            <button type="submit"
              wire:loading.attr="disabled" wire:target="submitForm"
              class="inline-flex items-center justify-center py-3 px-6 border border-transparent shadow-sm text-base
              font-medium rounded-md text-white bg-myindigo hover:bg-indigo-700 focus:outline-none focus:ring-2
              focus:ring-offset-2 focus:ring-indigo-500">
              <svg wire:loading wire:target="submitForm" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
              <span>Pošalji</span>
            </button>
          </span>
        </div>
      @endif
    </form>
