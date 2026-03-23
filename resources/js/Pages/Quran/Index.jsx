import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Index({ surats }) {
    return (
        <div className="max-w-5xl mx-auto p-6">
            <Head title="Al-Quran Digital" />
            <h1 className="text-3xl font-bold text-center mb-8">Daftar Surat</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {surats.map((s) => (
                    <Link 
                        key={s.nomor} 
                        href={`/quran/${s.nomor}`}
                        className="p-4 bg-white border rounded-xl shadow-sm hover:border-green-500 transition-all flex justify-between items-center group"
                    >
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-700 rounded-full font-bold group-hover:bg-green-500 group-hover:text-white transition-colors">
                                {s.nomor}
                            </span>
                            <div>
                                <h3 className="font-semibold text-gray-800">{s.namaLatin}</h3>
                                <p className="text-sm text-gray-500">{s.arti}</p>
                            </div>
                        </div>
                        <span className="text-2xl font-serif text-gray-700">{s.nama}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}