<table>
    <thead>
        <tr>
            <th>No</th>
            <th>Nama Surat</th>
            <th>Arti</th>
            <th>Jumlah Ayat</th>
        </tr>
    </thead>
    <tbody>
        @foreach($surats as $surat)
        <tr>
            <td>{{ $surat['nomor'] }}</td>
         <a href={{route('quran.show', $surat['nomor'] )}}>
               {{ $surat['namaLatin'] }} 
         </a>
         <td>({{ $surat['nama'] }})</td>
            <td>{{ $surat['arti'] }}</td>
            <td>{{ $surat['jumlahAyat'] }}</td>
        </tr>
        @endforeach
    </tbody>
</table>