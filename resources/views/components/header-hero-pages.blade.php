<div class="relative bg-graylight">
    <div class="absolute inset-0">
        <img class="w-full h-full object-cover" src="/img/{{$img}}" alt="{{$title}}">
        <div class="absolute inset-0 bg-graylight" style="mix-blend-mode: multiply;" aria-hidden="true"></div>
    </div>
    <div class="relative max-w-7xl mx-auto py-24 px-6 sm:py-32 lg:px-10">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl uppercase">{{$title}}</h1>
        <div class="text-graylighter">
        <p class="mt-6 text-lg  text-graylighter max-w-3xl">{!!$content!!}</p>
        </div>

        <a href="{{ $url }}" class=" mt-16 inline-block  rounded bg-myindigo px-6 py-3 text-white text-base
        font-semibold transition ease-in-out duration-700 hover:bg-indigo-800">{{$button}}</a>
    </div>
</div>
