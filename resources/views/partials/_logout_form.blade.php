<form method="POST" action="{{ route('logout') }}">
    @csrf
    <button type="submit"
      class="block w-full py-2 px-4 text-left font-medium uppercase text-sm text-gray-600 hover:bg-gray-100 focus:outline-none">
      Odjavi se
    </button>
  </form>
