{{-- <div class="flex max-w-7xl mx-auto  my-8 bg-white rounded shadow-xl"> --}}
    <div class="flex flex-col lg:flex-row max-w-7xl mx-auto my-8 bg-white rounded shadow-xl py-8 px-6 lg:px-10">
        <div class="lg:hidden">
            <h2 class="text-3xl uppercase font-extrabold text-left text-gray-900 sm:text-3xl">
                {{$title}}
            </h2>
            <p class=" uppercase text-lg text-gray-800 my-2">{{$undertitle}}</p>
        </div>
        <div class="lg:w-1/2 hidden lg:block">
            <h2 class="text-3xl uppercase font-extrabold text-left text-gray-900 sm:text-3xl">
                {{$title}}
              </h2>
              <p class=" uppercase text-lg text-gray-800 mt-4">{{$undertitle}}</p>
              <div class="mt-4 text-base text-gray-500 prose">
                {!! $excerpt ?? '' !!}
              </div>
              @if ($title == 'Tailor made')
                <a href="/o-nama-i-kontakt#forma"  class="mt-8 inline-block transform hover:-translate-y-2 rounded bg-myindigo px-6 py-3 text-white
                text-base font-semibold transition ease-in-out duration-500 hover:bg-myindigo-800">Pošalji upit</a>
              @elseif ($title == 'Internship')
                <a href="http://www.work-and-travel-agencija.info/index.php/internship/" target="_blank" class="mt-8 inline-block transform hover:-translate-y-2 rounded bg-myindigo px-6 py-3 text-white
                text-base font-semibold transition ease-in-out duration-500 hover:bg-myindigo-800">Saznaj više</a>
              @else
                <a href="{{$url}}" @if($targ ?? '' === 'yes') target="_blank" @endif
                class="mt-8 inline-block transform hover:-translate-y-2 rounded bg-myindigo px-6 py-3 text-white
                text-base font-semibold transition ease-in-out duration-500 hover:bg-myindigo-800">Saznaj više</a>
              @endif

        </div>
            <div class="flex-1">
                <div class="aspect-w-16 aspect-h-9">
                    <img class="object-cover object-center"
                        src="{{ $img }}"
                        alt="Whitney leaning against a railing on a downtown street"/>
                </div>
            </div>
            <div class="lg:hidden">
                <div class="mt-4 text-base text-gray-500 ">
                  {!!$excerpt!!}
                </div>
                @if ($title == 'Tailor made')
                    <a href="/o-nama-i-kontakt#forma" class=" mt-8 inline-block transform hover:-translate-y-2 rounded
                    bg-myindigo px-6 py-3 text-white text-base font-semibold transition ease-in-out duration-500
                    hover:bg-myindigo-800">Pošalji upit</a>
                @elseif ($title == 'Internship')
                    <a href="/o-nama-i-kontakt#forma" class=" mt-8 inline-block transform hover:-translate-y-2 rounded
                        bg-myindigo px-6 py-3 text-white text-base font-semibold transition ease-in-out duration-500
                        hover:bg-myindigo-800">Internship</a>
                @else
                    <a href="{{$url}}" class=" mt-8 inline-block transform hover:-translate-y-2 rounded
                    bg-myindigo px-6 py-3 text-white text-base font-semibold transition ease-in-out duration-500
                    hover:bg-myindigo-800">Saznaj više</a>
                @endif

          </div>
    </div>
{{--     <div class="p-10 w-1/2">
      <div class="w-full">

        <h2 class="mt-6 text-3xl uppercase font-extrabold text-left text-gray-900 sm:text-3xl">
          {{$title}}
        </h2>
        <p class=" uppercase text-lg text-gray-800 mt-4">{{$undertitle}}</p>
        <div class="mt-4 text-base text-gray-500 ">
          {!!$content!!}
        </div>
        <a href="{{$url}}" class=" mt-16 inline-block transform hover:-translate-y-2 rounded bg-myindigo px-6 py-3 text-white text-base font-semibold transition ease-in-out duration-500 hover:bg-myindigo-800">Saznaj više</a>
      </div>
    </div> --}}
{{--     <div class="aspect-h-9">
        <img class="rounded-lg shadow-lg object-cover object-center" src="/assets/{{$img}}" alt="Whitney leaning against a railing on a downtown street"/>
      </div> --}}

    {{-- <img src="/assets/{{$img}}" alt="" class="object-center  object-cover rounded-r"> --}}
{{--     <div class="h-12 aspect-w-16 aspect-h-9">

    </div> --}}
{{--   </div> --}}
