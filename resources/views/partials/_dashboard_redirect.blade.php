<a href="@if (auth()->user()->role == 'admin') /admin/dashboard @else
    /user/dashboard @endif"
    class="block py-2 px-4 font-medium uppercase text-sm text-gray-600 hover:bg-gray-100"
    role="menuitem">Kontrolna ploča</a>
