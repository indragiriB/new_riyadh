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
        <div class="ayat-item" style="margin-bottom: 40px; text-align: right;">
            <h2 style="line-height: 2.5;">
                {{ $ayat['teksArab'] }} 
                <span style="border: 1px solid #000; border-radius: 50%; padding: 5px 10px; font-size: 14px;">
                    {{ $ayat['nomorAyat'] }}
                </span>
            </h2>
            
            <div style="text-align: left; margin-top: 10px;">
                <p><em>{{ $ayat['teksLatin'] }}</em></p>
                <p>{{ $ayat['teksIndonesia'] }}</p>
            </div>
        </div>
        <hr>
    @endforeach
</div>