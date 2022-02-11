@extends('layouts.layout')

@section('content')

@entry(request()->segment(2), request()->segment(3))


    <div class="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto ">

        <div class="relative col-span-1 m-4">

            <h1 class="text-gray-900 font-bold text-4xl">{{$title}}</h1>
            <h2 class="text-gray-800 uppercase font-medium text-xl py-4">{{$podnaslov}}</h2>
            <div class="text-gray-600 text-base">{!!$content!!}</div>

            <p class="mt-10 text-2xl text-indigo">{{$cijena}} HRK</p>

        </div>

        <div class="col-span-1 aspect-w-4 aspect-h-3 m-4">
            <img src="{{ $assets[0]['url'] }}" alt="{{$title}}" class="rounded object-cover object-center">
        </div>

    </div>



@endentry


@endsection
