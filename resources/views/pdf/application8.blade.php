<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
  <title>Sunčana vura</title>
  {{-- <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" /> --}}
{{--   <style type="text/css">
    @font-face {
      font-family: 'Your custom font name';
      src: url({{ storage_path('fonts\your-custom-font.ttf') }}) format("truetype");
      font-weight: 400;
      font-style: normal;
    }
    body {
      font-family: DejaVu Sans, sans-serif;
    }
  </style> --}}
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
        font-size: 10px;
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

    h4, .h4 {
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
    }

    h4, .h4 {
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

    .table tbody + tbody {
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
    body, h1, h2, h3, h4, h5, h6, table, th, tr, td, p, div {
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
</style>
</head>
<body>
  <h1 style="border-bottom: 2px solid #dee2e6;padding-bottom:15px; font-weight:400;">
    Podaci o prijavi za korisnika <strong>{{ $application->user->name }}</strong>
  </h1>
  <p style="font-size:12pt">Datum izrade PDF datoteke: {{ $datum }}</p>
  <table>
    <tbody style="font-size:10pt">
        {{-- Items --}}
        <tr>
            <td width="40%">
              <p>Program</p>
              <p>{{ $application->program }}</p>
            </td>
            <td>
              <p>Email</p>
              <p>{{ $application->user->email }}</p>
            </td>
             <td>
                <p>Grad</p>
                <p>{{ $application->city }}</p>
            </td>
        </tr>
    </tbody>
</table>
{{-- <table class="table">
  <thead>
    <tr>
      <th class="border-0 pl-0 party-header">Podaci o prijavi za korisnika {{ $application->user->name }}</th>
    </tr>
  </thead>
</table> --}}
</body>

</html>
