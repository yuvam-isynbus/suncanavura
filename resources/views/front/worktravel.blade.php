<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <title>Work & Travel - Sunčana Vura</title>

        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
    </head>
    <body>
        

      <x-header/>


<div class="relative py-16 bg-white overflow-hidden">
    <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
      <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
        <svg class="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
        </svg>
        <svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
        </svg>
        <svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
        </svg>
      </div>
    </div>
    <div class="relative px-4 sm:px-6 lg:px-8">
      <div class="text-lg max-w-prose mx-auto">
        <h1>
          <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">Online</span>
          <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Work & Travel prijava</span>
        </h1>
        <p class="mt-8 text-xl text-gray-500 leading-8">Work and Travel USA je program kulturološke razmjene pod pokroviteljstvom State Departmenta. Program je namijenjen studentima koji svoje ljetne praznike žele provesti na drugačiji način: radeći, putujući i zabavljajući se u SAD-u!</p>
        <p class="mt-8 text-xl text-gray-500 leading-8">Studenti su zaposleni na jednom ili više sezonskih poslova u kompanijama koje posluju u turističkim mjestima i privremeno imaju povećanu potražnju za radnicima. Program Work and Travel omogućava stjecanje radnog iskustva (koje budući poslodavci jako cijene!), usavršavanje engleskog, osamostaljivanje i stjecanje prijatelja iz cijelog svijeta! </p>

            
      </div>
      <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">

        <div class="bg-yellow-600 p-4 px-10 rounded-lg text-white mt-10">

          <h2 style="color: rgba(253, 230, 138, var(--tw-text-opacity));">Tko može biti Work and Travel student?</h2>
          <p>U Work & Travel program možeš se prijaviti ako si:</p>
          <ul>
              <li>redovan ili izvanredan student koji redovno polaže ispite</li>
              <li>imaš između 18 i 29 godina</li>
              <li>znanje engleskog ti je na konverzacijskom nivou</li>
              <li>imaš dobre komunikacijske vještine</li>
          </ul>

        </div>


        <h2>Vrste Work and Travel programa</h2>
        <strong style="color: rgba(251, 191, 36, var(--tw-text-opacity));">Independent placement</strong>
        <ul>
            <li>obrada aplikacije</li>
            <li>testiranje engleskog</li>
            <li>zdravstveno osiguranje</li>
            <li>dokumenti za vizu (DS 2019)</li>
            <li>orijentacijski sastanak prije puta</li>
            <li>24/7 podrška za hitne slučajeve</li>
        </ul>
        <strong style="color: rgba(251, 191, 36, var(--tw-text-opacity));">Premium</strong>
        <ul>
            <li>obrada aplikacije</li>
            <li>testiranje engleskog</li>
            <li>ponuda poslova</li>
            <li>interviju s poslodavcem</li>
            <li>zdravstveno osiguranje</li>
            <li>dokumenti za vizu (DS 2019)</li>
            <li>SEVIS (obavezna uplata za bazu podataka pri Američkoj ambasadi)</li>
            <li>orijentacijski sastanak prije puta</li>
            <li>24/7 podrška za hitne slučajeve</li>
            <li>usluga pronalaska leta i ponude avionske karte</li>
        </ul>

        <div class="bg-yellow-600 p-4 px-10 rounded-lg text-white mt-10">

          <h2 style="color: rgba(253, 230, 138, var(--tw-text-opacity));">Trajanje programa</h2>
          <p>Datume programa propisuje Američka ambasada za svaku zemlju posebno, prema kalendaru nastavnih obaveza u pojedinoj zemlji.</p>
          <p>Za hrvatske studente <strong style="color: rgba(253, 230, 138, var(--tw-text-opacity));">Work and Travel program traje od 4.6- 10.10. 2021.</strong> </p>
          <p>U tom periodu možeš nekoliko mjeseci raditi, a ostatak (ne više od mjesec dana) provesti putujući.</p>

        </div>



        <h2>Kompanije</h2>
        <p>U Work & Travel program mogu se prijaviti kompanije koje imaju povećanu sezonsku potrebu za radnom snagom (u turističkim mjestima): restorani, zabavni parkovi, hoteli, suvenirnice…</p>

        <strong style="color: rgba(251, 191, 36, var(--tw-text-opacity));">S obzirom na više od 25 godina iskustva klijenti su nam i poznate kompanije kao:</strong>

        <ul>
            <li>Hyatt Regency</li>
            <li>Bacara Resort</li>
            <li>Princess Lodges</li>
            <li>Home Depot</li>
            <li>Ocean Edge Resort</li>
            <li>Hard Rock Café</li>
            <li>Rainforrest Cafe </li>
            <li>High Sierra Pool</li>
            <li>Amusement Parks</li>
            <li>mnoge druge</li>
        </ul>

        <h2>Lokacije</h2>

        <strong style="color: rgba(251, 191, 36, var(--tw-text-opacity));"> Kompanije koje zapošljavaju Work and Travel studente nalaze se širom SAD-a, ali sve su u turističkim lokacijama:</strong>

        <ul>
            <li>Cape Cod</li>
            <li>Washington DC</li>
            <li>Santa Barbara</li>
            <li>Los Angeles</li>
            <li>Aljaska</li>
            <li>New York City</li>
            <li>San Francisco </li>
            <li>Miami</li>
            <li>Chicago</li>
            <li>Myrtle Beach</li>
            <li>mnoge druge</li>
        </ul>

        <h2>Poslovi</h2>
        <p>Poslovi za Work & Travel studente su početnički poslovi za koje ne trebaš imati iskustvo i nude ga najčešće kompanije u uslužnim djelatnostima: restorani, hoteli, golf klubovi, zabavni parkovi, nacionalni parkovi, trgovački centri…</p>

        <strong style="color: rgba(251, 191, 36, var(--tw-text-opacity));">U njima možeš raditi kao:</strong>

        <ul>
            <li>konobar (Food Runner/ Busser/ Server)</li>
            <li>sobar</li>
            <li>radnik za poslove u domaćinstvima hotela (House keeping)</li>
            <li>pomoćnik u kuhinji</li>
            <li>spasilac na bazenima</li>
            <li>prodavač u suvenirnicama</li>
            <li>recepcioner </li>
            <li>host/hostese</li>
            <li>razna zanimanja u zabavnim parkovima i slično</li>
        </ul>

        <div class="bg-yellow-600 p-4 px-10 rounded-lg text-white mt-10">
          <h2 style="color: rgba(253, 230, 138, var(--tw-text-opacity));">Plaća</h2>
          <p>Studenti su plaćeni po satu, a satnica ovisi o vrsti posla i lokaciji.
              Poslodavac nudi u prosjeku 32 sata rada tjedno s mogućnošću prekovremenih sati koji se plaćaju 50% više.
              Povrh toga moći ćeš dodatno zaraditi i na drugom poslu koji ćeš tražiti samostalno po dolasku i taj drugi posao trebaš prijaviti sponzoru.</p>
  
          <p>Poslodavci plaću isplaćuju svaka dva tjedna pa trebaš ponijeti minimalno 1000 USD džeparca za početne troškove.</p>
  
        </div>


        <h2>Smještaj</h2>
        <p>Kompanija će ti s ponudom posla poslati i prijedloge smještaja s adresom i kontaktima.
            Troškove smještaja snosiš sam i podmiruješ ih po dolasku.</p>

        <p>Studenti dijele smještaj u hostelima, stanovima, studentskim ili privatnim kućama.</p>

        <div class="bg-yellow-600 p-4 px-10 rounded-lg text-white mt-10">

          <h2 style="color: rgba(253, 230, 138, var(--tw-text-opacity));">Cijene programa</h2>

          <strong style="color: rgba(253, 230, 138, var(--tw-text-opacity));">Independent placement - 7.275,00 HRK - bez:</strong>
  
          <ul>
              <li>VISA - 160 USD</li>
              <li>avionska karta</li>
  
          </ul>
  
          <strong style="color: rgba(253, 230, 138, var(--tw-text-opacity));">Premium - 10.015,00 HRK - bez:</strong>
  
          <ul>
              <li>VISA - 160 USD</li>
              <li>avionska karta</li>
  
          </ul>
        </div>


        <h2>Procedura</h2>

        <ul>
            <li>prikupljaš dokumente potrebne za prijavu</li>
            <li>uplaćuješ upisninu</li>
            <li>ispunjavaš on line aplikaciju</li>
            <li>izabireš posao iz naših ponuda</li>
            <li>obavljaš intervju s poslodavcem</li>
            <li>potpisuješ Job Offer ili čekaš drugu ponudu</li>
            <li>predajemo ti dokumente za vizu </li>
            <li>uplaćuješ drugu ratu za program</li>
            <li>kupuješ avio kartu  </li>
            <li>odlaziš na intervju za vizu</li>
            <li>prisustvuješ orijentacijskom sastanku prije puta zajedno sa svim ostalim studentima</li>
            <li>šalješ nam pozdrave i fotke iz SAD-a 🙂  </li>
        </ul>

        <h2>Dokumenti za prijavu</h2>

        <strong>Dokumenti koje nam trebaš donijeti ili poslati:</strong>

        <ul>
            <li>potvrdu od fakulteta da ste upisali tekući semestar </li>
            <li>kopiju putovnice*</li>
            <li>fotografija na kojoj ste nasmiješeni</li>
            <li>životopis sa svim iskustvom koje ste stekli uključujući i volontiranja i praksu, na engleskom, u formatu koji se može korigirati</li>
            <li>video</li>
        </ul>

        <p>*ukoliko vam je putovnica istekla možete se prijaviti u program, a kopiju nove putovnice trebamo primiti u najkraćem mogućem roku.</p>

        <h2>Razgovori za posao – job interviews, će se ove godine odvijati na dva načina:</h2>

        <strong>Dokumenti koje nam trebaš donijeti ili poslati:</strong>

        <ul>
            <li>Skype intervju</li>
            <li>Odabir aplikanata putem video životopisa</li>
        </ul>

        <h2>Viza</h2>

        <p>U sklopu programa potrebno je aplicirati on-line za <strong>J-1 Work and Travel vizu.</strong> Agencija će ti pomoći pri svakom koraku, ali intervju svaki student treba osobno obaviti na Američkoj ambasadi.</p>

        <p>U slučaju odbijene vize <strong>VRAĆAMO CIJELOKUPAN IZNOS CIJENE PROGRAMA*</strong> osim u  slučaju kad je razlog odbijanja netočan, neistinit i/ ili nepredočeni ključni podatak prilikom prijave u Program i kod ispunjavanja upitnika za vizu.</p>

        <p>*ne odnosi se na iznos 160 USD uplaćen Američkoj ambasadi za proces obrade zahtjeva za vizu</p>

        <h2>Povrat poreza</h2>

        <p>Američki poslodavci imaju obavezu plaćanja poreza (state i federal taxes) za svakog radnika pa tako i za međunarodne studente.
            Budući da nećeš koristiti te beneficije, imaš pravo na povrat poreza za koji apliciraš po povratku u Hrvatsku. Mi te možemo uputiti kome da se javiš u vezi povrata poreza.</p>

        
        
      </div>
    </div>
  </div>


   
  
  
  
  <x-footer-register/>
  <x-footer/>

  
    
  
    </body>
</html>
