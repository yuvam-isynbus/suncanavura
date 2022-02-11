<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
  <title>Sunčana vura</title>
  {{-- <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" /> --}}
  <style type="text/css" media="screen">
    html {
      font-family: sans-serif;
      line-height: 1.15;
      margin: 0;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      font-weight: 400;
      line-height: 1.5;
      color: #212529;
      text-align: left;
      background-color: #fff;
      font-size: 12px;
      margin: 36pt;
    }

    h4 {
      margin-top: 0;
      margin-bottom: 0.5rem;
    }

    p {
      margin-top: 0;
      margin-bottom: 1rem;
    }

    strong {
      font-weight: bolder;
    }

    img {
      vertical-align: middle;
      border-style: none;
    }

    table {
      border-collapse: collapse;
    }

    th {
      text-align: inherit;
    }

    h4,
    .h4 {
      margin-bottom: 0.5rem;
      font-weight: 500;
      line-height: 1.2;
    }

    h4,
    .h4 {
      font-size: 1.5rem;
    }

    .table {
      width: 100%;
      margin-bottom: 1rem;
      color: #212529;
    }

    .table th,
    .table td {
      padding: 0.75rem;
      vertical-align: top;
      border-top: 1px solid #dee2e6;
    }

    .table thead th {
      vertical-align: bottom;
      border-bottom: 2px solid #dee2e6;
    }

    .table tbody+tbody {
      border-top: 2px solid #dee2e6;
    }

    .mt-5 {
      margin-top: 3rem !important;
    }

    .pr-0,
    .px-0 {
      padding-right: 0 !important;
    }

    .pl-0,
    .px-0 {
      padding-left: 0 !important;
    }

    .text-right {
      text-align: right !important;
    }

    .text-center {
      text-align: center !important;
    }

    .text-uppercase {
      text-transform: uppercase !important;
    }

    * {
      font-family: "DejaVu Sans";
    }

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    table,
    th,
    tr,
    td,
    p,
    div {
      line-height: 1.1;
    }

    .party-header {
      font-size: 1.5rem;
      font-weight: 400;
    }

    .total-amount {
      font-size: 12px;
      font-weight: 700;
    }

    .border-0 {
      border: none !important;
    }

    /* table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
} */

  </style>
</head>

<body>
  <h1 style="font-size:18px;border-bottom: 2px solid #dee2e6;padding-bottom:15px; font-weight:400;">
    Podaci o prijavi {{ $application->type }} za korisnika <strong>{{ $application->user->name }}</strong>
  </h1>
  <p style="font-size:12px;padding:0.75rem;">Datum izrade PDF datoteke: {{ $datum }}</p>
  <table class="table">
    <tbody>
      {{-- Items --}}
      <tr>
        <td width="33%">
          <p><strong>{{ $application->type === 'Work & travel' ? 'Program' : 'Destinacija' }}</strong></p>
          <p>{{ $application->type === 'Work & travel' ? $application->program : $application->destination->name }}</p>
        </td>
        <td width="33%">
          <p><strong>Email</strong></p>
          <p>{{ $application->user->email }}</p>
        </td>
        <td width="33%">
          <p><strong>Datum rođenja</strong></p>
          <p>{{ $birth_date }}</p>
        </td>
      </tr>
      @if ($application->type === 'Au pair')
      <tr>
        <td>
          <p><strong>Datum odlaska</strong></p>
          <p>{{ $university_start_date ?? '-------' }}</p>
        </td>
        <td>
          <p><strong>Datum povratka</strong></p>
          <p>{{ $university_end_date ?? '-------' }}</p>
        </td>
        {{-- <td width="33%">
          <p><strong>Adresa</strong></p>
          <p>{{ $university_start_date ?? '-------' }}</p>
        </td> --}}
      </tr>
      @endif

      <tr>
        <td>
          <p><strong>Država</strong></p>
          <p>{{ $application->country }}</p>
        </td>
        <td>
          <p><strong>Grad</strong></p>
          <p>{{ $application->city }}</p>
        </td>
        <td width="33%">
          <p><strong>Adresa</strong></p>
          <p>{{ $application->street_address ?? '-------' }}</p>
        </td>
      </tr>
      <tr>
        <td>
          <p><strong>Broj telefona</strong></p>
          <p>{{ $application->phone ?? '-------' }}</p>
        </td>
        <td>
          <p><strong>{{ $application->type === 'Work & travel' ? 'Skype' : 'Kontakt za hitni slučaj' }} </strong></p>
          <p>{{ $application->skype ?? '-------' }}</p>
        </td>
        <td width="33%">
        </td>
      </tr>
      <tr>
        <td>
          <p><strong>Broj putovnice ili osobne iskaznice</strong></p>
          <p>{{ $application->id_number ?? '-------' }}</p>
        </td>
        <td>
          <p><strong>Datum izdavanja dokumenta</strong></p>
          <p>{{ $id_start_date ?? '-------' }}</p>
        </td>
        <td width="33%">
          <p><strong>Datum isteka dokumenta</strong></p>
          <p>{{ $id_end_date ?? '-------' }}</p>
        </td>
      </tr>
      <tr>
        <td>
          <p><strong>Fakultet</strong></p>
          <p>{{ $application->university }}</p>
        </td>
        @if ($application->type === 'Work & travel')
        <td>
          <p><strong>Početak studija</strong></p>
          <p>{{ $university_start_date ?? '-------' }}</p>
        </td>
        <td width="33%">
          <p><strong>Završetak studija</strong></p>
          <p>{{ $university_end_date ?? '-------' }}</p>
        </td>
        @endif
      </tr>
      <tr>
        <td>
          <p><strong>Fakultetski program</strong></p>
          <p>{{ $application->university_program }}</p>
        </td>
        <td>
          <p><strong>Godina studija</strong></p>
          <p>{{ $application->university_year }}</p>
        </td>
        <td width="33%">
          <p><strong>Smjer</strong></p>
          <p>{{ $application->university_course  }}</p>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <p><strong>Strani jezici</strong></p>
          <p>{{ $languages }}</p>
        </td>
{{--         <td>
          <p><strong>Zdravstveni problemi</strong></p>
          <p>{{ $application->university_year }}</p>
        </td> --}}
        <td width="33%">
          <p><strong>Zdravstveni problemi</strong></p>
          <p>{{ $application->university_course  }}</p>
        </td>
      </tr>
    </tbody>
  </table>
  <p style="font-size:12px;padding:0.75rem;"><strong>Učitani dokumenti</strong></p>
  @forelse ($documents as $document)
      <p style="font-size:12px;padding-left:0.75rem;">{{ $document }}</p>
  @empty
      <p style="font-size:12px;padding-left:0.75rem;">Nema učitanih dokumenata</p>
  @endforelse
  {{-- <table class="table">
  <thead>
    <tr>
      <th class="border-0 pl-0 party-header">Podaci o prijavi za korisnika {{ $application->user->name }}</th>
    </tr>
  </thead>
</table> --}}
</body>

</html>
