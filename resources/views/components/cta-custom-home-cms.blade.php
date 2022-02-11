  <div class="flex flex-col lg:flex-row max-w-7xl mx-auto mb-16 bg-white rounded shadow-xl p-6 lg:px-10">
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
          <div class="mt-4 text-base text-gray-500 ">
            {!!$excerpt!!}
          </div>
          <a href="{{$url}}" class=" mt-8 inline-block transform hover:-translate-y-2 rounded bg-myindigo px-6 py-3 text-white text-base font-semibold transition ease-in-out duration-500 hover:bg-myindigo-800">Saznaj više</a>
    </div>
    <div class="flex-1">
        <div class="aspect-w-16 aspect-h-9">
            <img class="object-cover object-center" loading="lazy" src="{{$img}}" alt="{{$title}}"/>
        </div>
    </div>
    <div class="lg:hidden">
          <div class="mt-4 text-base text-gray-500 ">
            {!!$excerpt!!}
          </div>
          <a href="{{$url}}" class=" mt-8 inline-block transform hover:-translate-y-2 rounded bg-myindigo px-6 py-3 text-white text-base font-semibold transition ease-in-out duration-500 hover:bg-myindigo-800">Saznaj više</a>
    </div>

</div>
