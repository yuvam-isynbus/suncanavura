<div class="max-w-7xl mx-auto  py-12 bg-gray-50 px-6 lg:px-10">

    <div class=" col-span-1 ">
      <div class="w-full">

        <p class="text-lg leading-relaxed text-gray-600">
          {!! $content !!}
        </p>

        <a href="{{$url}}" @if($targ ?? '' === 'yes') target="_blank" @endif>
          <button href="#" class=" mt-8  rounded bg-myindigo px-6 py-3 text-white text-base font-semibold transition ease-in-out duration-700 hover:bg-myindigo-800">{{$button}}</button>
        </a>


      </div>
    </div>
  </div>
