@extends('layouts.layout')

@section('content')

@entry('hoteli', request()->segment(2))


    <div class="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto py-12 px-6">

        <div class="order-2 md:order-1 relative col-span-1 m-4">

            <h1 class="text-gray-900 font-bold text-4xl">{{$title}}</h1>
            <h2 class="text-gray-800 uppercase font-medium text-xl py-4">{{$podnaslov}}</h2>
            <div class="text-gray-600 text-base prose">{!!$content!!}</div>

        </div>

        <div class="order-1 md:order-2 col-span-1 aspect-w-16 aspect-h-9 m-4">

            <img src="/assets/public/hoteli/{{$assets[0]['title']}}" alt="{{$title}}" class="rounded object-cover object-center">

        </div>

    </div>

@endentry

@endsection
