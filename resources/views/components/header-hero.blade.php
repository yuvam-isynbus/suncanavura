




<div class="relative bg-graybase">
  <div class="slider-hero swiper">

    <div class="swiper-wrapper" style="height: 540px;">

      @foreach (tag('nav:collection:heros', ['limit' => 10]) as $entry)

        <div class="swiper-slide">
          <div class="absolute inset-0">
            @foreach ($entry['assets']->value() as $value)
            <img class="swiper-lazy w-full h-full object-cover" data-src="{{ $value }}"
            alt="{{ $entry['title'] }}">
            @endforeach
            <div class="absolute inset-0 bg-graylight" style="mix-blend-mode: multiply;" aria-hidden="true"></div>
          </div>
          <div class="relative max-w-7xl mx-auto py-24 px-6 sm:py-32 lg:px-10">
            <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl uppercase">{{ $entry['title'] }}</h1>
            <div class="text-graylighter">
              <p class="mt-6 text-lg  text-graylighter max-w-3xl">{!! $entry['content'] !!}</p>
            </div>

            <a href="/o-nama-i-kontakt#forma" class=" mt-16 inline-block  rounded bg-myindigo px-6 py-3 text-white text-base font-semibold transition ease-in-out duration-700 hover:bg-indigo-800">Pošalji upit</a>
          </div>
        </div>

      @endforeach


    </div>


  </div>
  <div class="hidden md:block swiper-button-next-unique-hero absolute z-20 right-2 top-1/2 cursor-pointer">
    <svg class="w-12 h-12 text-myindigo" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
</div>

<div class=" hidden md:block swiper-button-prev-unique-hero absolute z-20 left-2 top-1/2 cursor-pointer">
    <svg class="w-12 h-12 text-myindigo" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
</div>
</div>
