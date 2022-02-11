@if ($errors->any())
<div>
    <div class="font-medium text-red-600">{{ __('Opaaa! Nešto nije uredu.') }}</div>

      <ul class="mt-3 list-disc list-inside text-sm text-red-600">
        @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
        @endforeach
      </ul>
    </div>
@endif