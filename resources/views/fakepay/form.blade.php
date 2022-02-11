<x-proba-layout>
  <section class="container mx-auto px-4 py-4">
    <div class="flex flex-col font-medium text-xl">
      <div class="mx-auto">Plaćate {{ request('amount') }} kn</div>
      <div class="mx-auto mt-8">
        <form action="{{ route('fake.pay.cancel') }}" method="GET">
          <input type="hidden" name="order_number" value="{{ $order_number }}">
          <input type="hidden" name="language" value="hr">
          <span class="inline-flex rounded-md shadow-sm">
            <button type="submit"
              class="text-center w-full justify-center py-2 px-4 border border-transparent leading-5 font-medium rounded text-gray-800 bg-gray-300 hover:bg-gray-200 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray active:bg-gray-500 transition duration-150 ease-in-out">
              Odustani
            </button>
          </span>
          <span class="ml-3 inline-flex rounded-md shadow-sm">
            <a href="{{ route('fake.pay.success',
            ['order_number' => $order_number, 'signature' =>'c9a53c3525e557da', 'language' => 'hr', 'approval_code' => '88888']) }}"
              class="inline-flex text-center w-full justify-center py-2 px-4 border border-transparent leading-5 font-medium rounded text-white bg-pink-600 hover:bg-pink-500 focus:outline-none focus:border-pink-700 focus:shadow-outline-pink active:bg-pink-700 transition duration-150 ease-in-out">
              Plati
            </a>
          </span>
        </form>
      </div>
    </div>
  </section>
</x-proba-layout>
