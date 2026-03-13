<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://fonts.googleapis.com/css2?family=Amiri&display=swap" rel="stylesheet">

<style>
    .teks-arab {
        font-family: 'Amiri', serif;
        direction: rtl; 
        font-size: 32px;
        line-height: 2.5;
    }
</style>
</head>
<body>
    <div class="container">
    <h1>{{ $surat['namaLatin'] }} ({{ $surat['nama'] }})</h1>
    <p><em>{{ $surat['arti'] }} - {{ $surat['jumlahAyat'] }} Ayat</em></p>
    <hr>

    @if($surat['nomor'] != 1 && $surat['nomor'] != 9)
        <h3 class="text-center" style="font-family: 'serif'; margin-bottom: 30px;">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </h3>
    @endif

@foreach($surat['ayat'] as $ayat)
    <div style="margin-bottom: 50px;">
        <h2 class="teks-arab" style="text-align: right;">
            {{ $ayat['teksArab'] }} 
            <span style="font-size: 18px; border: 1px solid #ccc; border-radius: 50%; padding: 5px;">
                {{ $ayat['nomorAyat'] }}
            </span>
        </h2>

        <p style="color: green;"><em>{!! $ayat['teksLatin'] !!}</em></p>
        
        <p>{{ $ayat['teksIndonesia'] }}</p>
    </div>
    <hr>
@endforeach
</div>
</body>
</html>