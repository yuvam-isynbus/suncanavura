<div class="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto  my-8 bg-white rounded  shadow-xl">

    <div class="relative col-span-1 ">
      <div class="w-full px-6 lg:px-10 py-6">

        <h2 class="mt-6 text-3xl uppercase font-extrabold text-left text-gray-900 sm:text-3xl">
          {{$title}}
        </h2>
        <p class=" uppercase text-lg font-bold text-gray-700 mt-4">{{$undertitle}}</p>
        <p class="mt-4 text-base text-gray-500 ">
          {{$content}}
        </p>
        <a href="/{{$url}}" class=" inline-block mt-4 rounded bg-myindigo px-6 py-3 text-white text-base font-bold transition ease-in-out duration-700 hover:bg-indigo-800">Pošalji upit</a>
      </div>
    </div>
    <div class="order-1 lg:order-2 col-span-1 items-center rounded">
        <img src="/img/{{$img}}" loading="lazy" alt="{{$title}}" class="object-fit rounded p-4 mx-auto w-full">
    </div>
  </div>
