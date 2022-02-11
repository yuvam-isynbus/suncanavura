@extends('layouts.layout')

@section('content')

@entry('obrazovni_programi', request()->segment(2))

    <div class="flex flex-col-reverse lg:flex-row lg:space-x-6 max-w-7xl mx-auto py-12 px-6">

        <div class="lg:w-1/2">

            <h1 class="text-gray-900 font-bold text-4xl">{{$title}}</h1>
            <h2 class="text-gray-800 uppercase font-medium text-xl py-4">{{$podnaslov}}</h2>
            <div class="text-gray-600 text-base prose">{!!$content!!}</div>

        </div>

        <div class="flex-1">
            <div class="aspect-w-16 aspect-h-9">
                <img src="{{count($assets) > 0 ? $assets[0]['url'] : ''}}" alt="{{$title}}" class="rounded object-cover object-center">
            </div>
        </div>

    </div>


@endentry



@endsection
