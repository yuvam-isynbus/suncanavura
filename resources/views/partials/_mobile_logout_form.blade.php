<form method="POST" action="{{ route('logout') }}">
    @csrf
    <button type="submit"
    class="w-full flex items-center justify-center px-4 py-2 border border-transparent
    rounded-md shadow-sm text-base font-medium text-yellow-600 bg-white hover:bg-gray-50">
      Odjavi se
    </button>
  </form>
