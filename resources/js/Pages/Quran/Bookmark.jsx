import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Show({ surat }) {
    const [bookmarks, setBookmarks] = useState([]);

    // Load bookmark dari localStorage saat halaman dibuka
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('quran_bookmarks')) || [];
        setBookmarks(saved);
    }, []);

    const toggleBookmark = (ayat) => {
        let updated;
        const isExist = bookmarks.find(b => b.id === `${surat.nomor}:${ayat.nomorAyat}`);
        
        if (isExist) {
            updated = bookmarks.filter(b => b.id !== `${surat.nomor}:${ayat.nomorAyat}`);
        } else {
            updated = [...bookmarks, { 
                id: `${surat.nomor}:${ayat.nomorAyat}`, 
                surat: surat.namaLatin, 
                nomorAyat: ayat.nomorAyat 
            }];
        }
        
        setBookmarks(updated);
        localStorage.setItem('quran_bookmarks', JSON.stringify(updated));
    };

    return (
        <div className="min-h-screen bg-black text-[#f0f0f0] font-mono pb-20">
            <Head title={`${surat.namaLatin} - Read_`} />
            
            <nav className="border-b border-[#222] p-6 sticky top-0 bg-black/80 backdrop-blur-md z-50">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <Link href="/quran" className="text-xs text-emerald-500 hover:underline">← BACK_TO_INDEX</Link>
                    <span className="text-xs tracking-[0.3em] uppercase">{surat.namaLatin} // {surat.nomor}</span>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto p-6 mt-10">
                <div className="text-center mb-20 space-y-4">
                    <h1 className="text-6xl font-black tracking-tighter uppercase">{surat.namaLatin}</h1>
                    <div className="inline-block px-3 py-1 border border-emerald-500/30 text-emerald-500 text-[10px] uppercase tracking-widest">
                        {surat.arti} // {surat.jumlahAyat}_AYAT
                    </div>
                    
                    <div className="pt-8">
                        <audio controls className="mx-auto w-full max-w-sm invert opacity-80">
                            <source src={surat.audioFull['01']} type="audio/mpeg" />
                        </audio>
                    </div>
                </div>

                <div className="space-y-24">
                    {surat.ayat.map((a) => {
                        const isBookmarked = bookmarks.some(b => b.id === `${surat.nomor}:${a.nomorAyat}`);
                        return (
                            <div key={a.nomorAyat} className="group relative">
                                <div className="flex justify-between items-start mb-8">
                                    <button 
                                        onClick={() => toggleBookmark(a)}
                                        className={`text-[10px] px-3 py-1 border transition-all ${isBookmarked ? 'bg-emerald-500 text-black border-emerald-500' : 'border-[#333] text-[#555] hover:border-emerald-500'}`}
                                    >
                                        {isBookmarked ? 'SAVED_' : 'SAVE_'}
                                    </button>
                                    <h2 className="text-5xl text-right leading-[4.5rem] font-serif" dir="rtl" style={{ fontFamily: "'Amiri', serif" }}>
                                        {a.teksArab}
                                    </h2>
                                </div>
                                <div className="space-y-4 border-l border-[#222] pl-6 group-hover:border-emerald-500/50 transition-colors">
                                    <p className="text-emerald-500/80 italic text-sm tracking-tight">{a.teksLatin}</p>
                                    <p className="text-[#888] text-sm leading-relaxed lowercase">{a.teksIndonesia}</p>
                                </div>
                                <span className="absolute -left-12 top-0 text-[10px] text-[#222] group-hover:text-emerald-900 font-bold transition-colors">
                                    {String(a.nomorAyat).padStart(3, '0')}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}