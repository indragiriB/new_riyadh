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
            <td>{{ $surat['namaLatin'] }} ({{ $surat['nama'] }})</td>
            <td>{{ $surat['arti'] }}</td>
            <td>{{ $surat['jumlahAyat'] }}</td>
        </tr>
        @endforeach
    </tbody>
</table>