<a href="@if (auth()->user()->role == 'admin') /admin/dashboard @else
    /user/dashboard @endif"
    class="w-full flex items-center justify-center px-4 py-2 border border-transparent
                rounded-md shadow-sm text-base font-medium text-gray-500 bg-yellow hover:bg-yellow"
    role="menuitem">Kontrolna ploča</a>
