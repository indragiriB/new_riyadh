import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Show({ surat }) {
    return (
        <div className="max-w-4xl mx-auto  min-h-screen ">
            <Head title={surat.namaLatin} />
            
            <Link href="/" className="text-green-600 hover:underline mb-4 inline-block">
                ← Kembali ke Daftar Surat
            </Link>

            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-2">{surat.namaLatin}</h1>
                <p className="text-gray-600 italic">{surat.arti} • {surat.jumlahAyat} Ayat</p>
                
                <audio controls className="mx-auto mt-6 w-full max-w-md">
                    <source src={surat.audioFull['01']} type="audio/mpeg" />
                </audio>
            </div>

            <div className="space-y-12">
                {surat.ayat.map((a) => (
                    <div key={a.nomorAyat} className="border-b pb-8">
                        <div className="flex justify-between items-start gap-4 mb-6">
                            <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-gray-300 rounded-full text-sm">
                                {a.nomorAyat}
                            </span>
              <h2 className="text-5xl text-right leading-[4.5rem] font-arabic mb-4">
                     {a.teksArab}
                    </h2>
                        </div>
                        <div className="space-y-2">
                            <p className="text-green-700 italic text-sm">{a.teksLatin}</p>
                            <p className="text-gray-800 leading-relaxed">{a.teksIndonesia}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}