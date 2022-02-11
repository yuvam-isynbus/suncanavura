@extends('layouts.layout')

@section('content')

@entry('putovanja', request()->segment(2))


    <div class="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto py-12 px-6">

        <div class="order-2 md:order-1 relative col-span-1 m-4">

            <h1 class="text-gray-900 font-bold text-4xl">{{$title}}</h1>
            <h2 class="text-gray-800 uppercase font-medium text-xl py-4">{{$podnaslov}}</h2>
            <div class="text-gray-600 text-base prose">{!!$content!!}</div>

        </div>

        <div class="order-1 md:order-2 col-span-1 aspect-w-16 aspect-h-9 m-4">

            <img src="/assets/public/putovanja/{{$assets[0]['title']}}" alt="{{$title}}" class="rounded object-cover object-center">

        </div>

    </div>

@endentry

{{-- <div class="bg-gray-50 relative pb-10 pt-4 w-full">
    <div class="px-6 max-w-7xl mx-auto ">
        <div class="slider-top-ponuda swiper bg-gray-50" style="padding: 2%;">
            <div class="swiper-wrapper absolute ">
                @foreach (tag('collection:daleka_putovanja', ['limit' => 10]) as $entry)
                    <x-offer-grid-item
                        title="{{$entry->augmentedValue('title')}}"
                        undertitle="{{$entry->augmentedValue('podnaslov')}}"
                        img="{{$entry->augmentedValue('assets')->value('raw')[0]->augmentedValue('path')}}"
                        price="{{$entry->augmentedValue('cijena')}}"
                        url="{{$entry->augmentedValue('url')}}"
                        />

                @endforeach
            </div>
        </div>
    </div>
    <!-- If we need navigation buttons -->
    <div class="hidden md:block swiper-button-next-unique-top absolute z-20 right-2 cursor-pointer"  style="top: 58%;">
        <svg class="w-12 h-12 text-myindigo" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
    </div>

    <div class="hidden md:block swiper-button-prev-unique-top absolute z-20 left-2 cursor-pointer" style="top: 58%;">
        <svg class="w-12 h-12 text-myindigo" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
    </div>

</div> --}}

<div class="bg-gray-50 w-full relative  pb-10">
    <div class="slider-top-ponuda swiper max-w-7xl mx-auto bg-gray-50" style="padding: 2%;">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-900 max-w-7xl mx-auto  px-6 lg:px-10 pb-4 uppercase"></h2>
        <p class="text-gray-600 max-w-7xl mx-auto  px-6 lg:px-10 pb-10 "></p>
        <div class="swiper-wrapper absolute ">
            @foreach (tag('collection:' . request()->segment(2), ['limit' => 10]) as $entry)
                <x-offer-grid-item
                title="{{$entry->augmentedValue('title')}}"
                undertitle="{{$entry->augmentedValue('podnaslov')}}"
                img="{{$entry->augmentedValue('assets')->value('raw')[0]->augmentedValue('path')}}"
                price="{{$entry->augmentedValue('cijena')}}"
                url="{{$entry->augmentedValue('url')}}"
                />
            @endforeach
        </div>
    </div>
    <div class="hidden md:block swiper-button-next-unique-top absolute z-20 right-2 cursor-pointer" style="top: 45%;">
        <svg class="w-12 h-12 text-myindigo" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
    </div>

    <div class="hidden md:block swiper-button-prev-unique-top absolute z-20 left-2 cursor-pointer" style="top: 45%;"">
        <svg class="w-12 h-12 text-myindigo" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
    </div>
</div>

@endsection
