<div class="swiper-slide transition cursor-pointer transform ease-in-out duration-500 hover:-translate-y-4 relative  flex items-center rounded justify-center " style="height: 250px;">

    <a href="{{$url}}" class="absolute inset-0">

        <img data-src="/assets/{{$img}}" alt="Slika 1" class="swiper-lazy rounded object-cover object-center w-full h-full">
        <div class="absolute  bg-gray-600 opacity-80 rounded h-1/3 bottom-0 w-full" style="mix-blend-mode: multiply;" aria-hidden="true"></div>
        <div class="absolute  rounded h-1/3 bottom-0 w-full flex flex-col items-start justify-center ml-2"  aria-hidden="true">

            <p class="font-extrabold text-gray-50 uppercase">{{$title}}</p>
            <p class="font-medium text-gray-50">{{$undertitle}}</p>
        </div>
        <div class="absolute -top-2 -left-2 w-2/5 md:w-1/3 rounded text-sm font-extrabold bg-myyellow h-10 flex items-center justify-center">
            <p>{{$price}} HRK</p>
        </div>

    </a>

</div>
