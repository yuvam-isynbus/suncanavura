{{-- <div class="bg-gray-50 relative pb-10 pt-4 w-full">
    <div class="max-w-7xl mx-auto pb-4 px-6 lg:px-10 space-y-4">
        <h2 class="text-3xl sm:text-3xl font-extrabold text-gray-900 uppercase">{{$title}}</h2>
        <p class="text-gray-600">{!!$undertitle!!}</p>
    </div>
    <div class="px-6 max-w-7xl mx-auto ">
        <div class="slider-top-ponuda swiper bg-gray-50" style="padding: 2%;">
            <div class="swiper-wrapper absolute ">
                @foreach (tag('collection:akcije', ['limit' => 10]) as $entry) --}}

@if ($type == 'aktualno')
    <div class="w-full bg-gray-200 relative pb-10 pt-10">
        <div class="max-w-7xl mx-auto pb-4 px-6 lg:px-10 space-y-4">
            <h2 class="text-3xl sm:text-3xl font-extrabold text-gray-900 uppercase">{{ $title }}</h2>
            <p class="text-gray-600">{!! $undertitle !!}</p>
        </div>
        <div class="px-6 max-w-7xl mx-auto ">
            <div class="slider-top-ponuda swiper bg-gray-200" style="padding: 2%;">
                <div class="swiper-wrapper absolute ">
                    @foreach (tag('nav:collection:akcije', ['limit' => 50]) as $entry)
                        @if ($entry['avio_karte']->value('raw') == true)
                            <x-offer-grid-item
                            title="{{ $entry['title'] }}"
                            undertitle="{{$entry['podnaslov']}}"
                            img="{{$entry['assets']->value('raw')->count() > 0 ?
                                $entry['assets']->value('raw')[0]->augmentedValue('path') : ''}}"
                            price="{{ $entry['cijena'] }}"
                            url="{{ $entry['url'] }}" />
                        @endif
                    @endforeach
                </div>
            </div>
        </div>

        <!-- If we need navigation buttons -->
        <div class="hidden md:block swiper-button-next-unique-top absolute z-20 right-2 top-1/2 cursor-pointer">
            <svg class="w-12 h-12 text-myindigo" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </div>

        <div class="hidden md:block swiper-button-prev-unique-top absolute z-20 left-2 top-1/2 cursor-pointer">
            <svg class="w-12 h-12 text-myindigo" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
        </div>

    </div>
@endif

@if ($type == 'hoteli')
    <div class="w-full bg-gray-200 relative pb-10 pt-10">
        <div class="max-w-7xl mx-auto pb-4 px-6 lg:px-10 space-y-4">
            <h2 class="text-3xl sm:text-3xl font-extrabold text-gray-900 uppercase">{{ $title }}</h2>
            <p class="text-gray-600">{!! $undertitle !!}</p>
        </div>
        <div class="px-6 max-w-7xl mx-auto ">
            <div class="slider-top-ponuda swiper bg-gray-200" style="padding: 2%;">
                <div class="swiper-wrapper absolute ">

                    @foreach (tag('collection:akcije', ['limit' => 50]) as $entry)

                        @if ($entry->augmentedValue('hoteli')->value('raw') == true)

                            <x-offer-grid-item title="{{ $entry->augmentedValue('title') }}"
                                undertitle="{{ $entry->augmentedValue('podnaslov') }}"
                                img="{{ $entry->augmentedValue('assets')->value('raw')[0]->augmentedValue('path') }}"
                                price="{{ $entry->augmentedValue('cijena') }}"
                                url="{{ $entry->augmentedValue('url') }}" />

                        @endif

                    @endforeach

                </div>
            </div>

            <!-- If we need navigation buttons -->
            <div class="hidden md:block swiper-button-next-unique-top absolute z-20 right-2 cursor-pointer"
                style="top: 51%;">
                <svg class="w-12 h-12 text-myindigo" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </div>

            <div class="hidden md:block swiper-button-prev-unique-top absolute z-20 left-2 cursor-pointer"
                style="top: 51%;">
                <svg class="w-12 h-12 text-myindigo" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </div>
        </div>
    </div>
@endif

@if ($type == 'putovanja')
    <div class="w-full bg-gray-200 relative pb-10 pt-10">
        <div class="max-w-7xl mx-auto pb-4 px-6 lg:px-10 space-y-4">
            <h2 class="text-3xl sm:text-3xl font-extrabold text-gray-900 uppercase">{{ $title }}</h2>
            <p class="text-gray-600">{!! $undertitle !!}</p>
        </div>
        <div class="px-6 max-w-7xl mx-auto ">
            <div class="slider-top-ponuda swiper bg-gray-200" style="padding: 2%;">
                <div class="swiper-wrapper absolute ">

                    @foreach (tag('nav:collection:akcije', ['limit' => 50]) as $entry)

                        @if ( $entry['putovanja']->value('raw') == true )

                            <x-offer-grid-item
                                title="{{ $entry['title'] }}"
                                undertitle="{{$entry['podnaslov']}}"
                                img="{{$entry['assets']->value('raw')->count() > 0 ?
                                    $entry['assets']->value('raw')[0]->augmentedValue('path') : ''}}"
                                price="{{ $entry['cijena'] }}"
                                url="{{ $entry['url'] }}" />

                        @endif

                    @endforeach

                </div>
            </div>
        </div>
{{--         @foreach (tag('nav:collection:putovanja', ['limit' => 10]) as $entry)

            <x-akcije-i-novosti-item
            title="{{ $entry['title'] }}"
            undertitle="{{$entry['podnaslov']}}"
            img="{{$entry['assets']->value('raw')->count() > 0 ?
                    $entry['assets']->value('raw')[0]->augmentedValue('path') : ''}}"
            yellowtext="{{$entry['badge']}}"
            content="{!!$entry['content']!!}"
            excerpt="{!!$entry['excerpt']!!}"
            url="{{$entry['url']}}"
            />

        @endforeach --}}
        <!-- If we need navigation buttons -->
        <div class="hidden md:block swiper-button-next-unique-top absolute z-20 right-2 cursor-pointer"
            style="top: 51%;">
            <svg class="w-12 h-12 text-myindigo" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </div>

        <div class="hidden md:block swiper-button-prev-unique-top absolute z-20 left-2 cursor-pointer"
            style="top: 51%;">
            <svg class="w-12 h-12 text-myindigo" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
        </div>
    </div>
@endif

@if ($type == 'all_abroad')
    <div class="w-full bg-gray-200 relative pb-10 pt-10">
        <div class="max-w-7xl mx-auto pb-4 px-6 lg:px-10 space-y-4">
            <h2 class="text-3xl sm:text-3xl font-extrabold text-gray-900 uppercase">{{ $title }}</h2>
            <p class="text-gray-600">{!! $undertitle !!}</p>
        </div>
        <div class="px-6 max-w-7xl mx-auto ">
            <div class="slider-top-ponuda swiper bg-gray-200" style="padding: 2%;">
                <div class="swiper-wrapper absolute ">

                    @foreach (tag('collection:akcije', ['limit' => 50]) as $entry)

                        @if ($entry->augmentedValue('all_abroad')->value('raw') == true)

                            <x-offer-grid-item title="{{ $entry->augmentedValue('title') }}"
                                undertitle="{{ $entry->augmentedValue('podnaslov') }}"
                                img="{{ $entry->augmentedValue('assets')->value('raw')[0]->augmentedValue('path') }}"
                                price="{{ $entry->augmentedValue('cijena') }}"
                                url="{{ $entry->augmentedValue('url') }}" />

                        @endif

                    @endforeach

                </div>
            </div>

            <!-- If we need navigation buttons -->
            <div class="hidden md:block swiper-button-next-unique-top absolute z-20 right-2 top-1/2 cursor-pointer">
                <svg class="w-12 h-12 text-myindigo" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </div>

            <div class="hidden md:block swiper-button-prev-unique-top absolute z-20 left-2 top-1/2 cursor-pointer">
                <svg class="w-12 h-12 text-myindigo" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </div>

        </div>
@endif

@if ($type == 'obrazovni_programi')
    <div class="bg-gray-200 w-full relative  pb-10">
        <div class="slider-top-ponuda swiper max-w-7xl mx-auto bg-gray-200" style="padding: 2%;">
            <h2 class="text-3xl sm:text-3xl font-extrabold text-gray-900 max-w-7xl mx-auto py-10 uppercase">
                {{ $title }}</h2>
            <p class="text-gray-600 max-w-7xl mx-auto mt-4 ">{!! $undertitle !!}</p>
            <div class="swiper-wrapper absolute ">

                @foreach (tag('collection:akcije', ['limit' => 50]) as $entry)

                    @if ($entry->augmentedValue('obrazovni_programi')->value('raw') == true)

                        <x-offer-grid-item title="{{ $entry->augmentedValue('title') }}"
                            undertitle="{{ $entry->augmentedValue('podnaslov') }}"
                            img="{{ $entry->augmentedValue('assets')->value('raw')[0]->augmentedValue('path') }}"
                            price="{{ $entry->augmentedValue('cijena') }}"
                            url="{{ $entry->augmentedValue('url') }}" />

                    @endif

                @endforeach

            </div>
        </div>

        <!-- If we need navigation buttons -->
        <div class="hidden md:block swiper-button-next-unique-top absolute z-20 right-2 top-1/2 cursor-pointer">
            <svg class="w-12 h-12 text-myindigo" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </div>

        <div class="hidden md:block swiper-button-prev-unique-top absolute z-20 left-2 top-1/2 cursor-pointer">
            <svg class="w-12 h-12 text-myindigo" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
        </div>

    </div>
@endif
