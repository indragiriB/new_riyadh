import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <div className="min-h-screen bg-[#080808] text-[#e0e0e0] font-mono selection:bg-emerald-500/30 selection:text-emerald-400">
            <Head title="NEO_QURAN // 01" />

            {/* Background Layer: Grid & Noise */}
            <div className="fixed inset-0 z-0 opacity-[0.15]" 
                 style={{ 
                     backgroundImage: `radial-gradient(circle, #10b981 0.5px, transparent 0.5px)`, 
                     backgroundSize: '32px 32px' 
                 }}>
            </div>

            {/* Header / Top Terminal Bar */}
            <header className="relative z-10 border-b border-white/5 bg-black/50 backdrop-blur-xl">
                <div className="max-w-[1400px] mx-auto px-6 h-16 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="h-6 w-[2px] bg-emerald-500 animate-pulse"></div>
                        <span className="text-xs font-bold tracking-[0.4em] uppercase text-emerald-500">
                            Neo_Quran.Sys
                        </span>
                    </div>
                    <div className="flex gap-8 text-[10px] tracking-widest text-gray-500 uppercase">
                        <Link href="/quran" className="hover:text-emerald-400 transition-colors">Index_</Link>
                        <Link href="/login" className="hover:text-emerald-400 transition-colors">Login_</Link>
                        <span className="text-gray-800">v2.0.26</span>
                    </div>
                </div>
            </header>

            <main className="relative z-10 max-w-[1400px] mx-auto px-6 pt-24 pb-32">
                <div className="grid lg:grid-cols-12 gap-16 items-end">
                    
                    {/* Hero Section: Extreme Typography */}
                    <div className="lg:col-span-8 space-y-16">
                        <section>
                            <h1 className="text-[12vw] lg:text-[10rem] font-black leading-[0.8] tracking-tighter text-white uppercase italic">
                                Divine <br />
                                <span className="text-transparent" style={{ WebkitTextStroke: '2px #10b981' }}>
                                    Interface
                                </span>
                            </h1>
                            <div className="mt-8 flex items-center gap-6">
                                <div className="h-[1px] w-24 bg-emerald-500/50"></div>
                                <p className="text-sm text-gray-500 max-w-sm lowercase leading-relaxed">
                                    [status: stable] // [focus: high] // [distraction: zero]
                                    <br />optimizing spiritual frequency for modern engineers.
                                </p>
                            </div>
                        </section>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/quran" className="px-10 py-5 bg-emerald-500 text-black font-black text-sm uppercase tracking-widest hover:bg-white transition-all hover:-rotate-2">
                                Initiate_Session
                            </Link>
                            <button className="px-10 py-5 border border-white/10 text-white font-black text-sm uppercase tracking-widest hover:border-emerald-500 transition-all">
                                Documentation
                            </button>
                        </div>
                    </div>

                    {/* Side Panel: Functional Widget */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="group relative bg-white/[0.02] border border-white/5 p-8 rounded-tr-[4rem] hover:border-emerald-500/50 transition-all">
                            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-emerald-500"></div>
                            
                            <div className="space-y-12">
                                <div className="flex justify-between items-start">
                                    <span className="text-[10px] text-emerald-500 border border-emerald-500/30 px-2 py-1">SURAT_18</span>
                                    <span className="text-4xl font-arabic text-white opacity-40 group-hover:opacity-100 transition-opacity">الكهف</span>
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-3xl font-arabic text-right leading-loose text-emerald-400">
                                        الْحَمْدُ لِلَّهِ
                                    </h2>
                                    <div className="flex justify-end gap-1">
                                        {[1,2,3,4,5].map(i => (
                                            <div key={i} className={`h-1 w-4 ${i === 1 ? 'bg-emerald-500' : 'bg-white/5'}`}></div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-600 tracking-tighter uppercase">
                                    <span>Last_Activity: 10:26_AM</span>
                                    <span className="text-emerald-900">Surakarta_Node</span>
                                </div>
                            </div>
                        </div>

                        {/* Social / Dev Links */}
                        <div className="flex justify-between px-2 text-[10px] font-bold text-gray-700 uppercase tracking-widest">
                            <span className="hover:text-emerald-500 cursor-pointer transition-colors">GitHub</span>
                            <span className="hover:text-emerald-500 cursor-pointer transition-colors">Dribbble</span>
                            <span className="hover:text-emerald-500 cursor-pointer transition-colors">Contact</span>
                        </div>
                    </div>
                </div>
            </main>

            {/* Bottom Marquee (Decorative) */}
            <div className="fixed bottom-0 w-full overflow-hidden border-t border-white/5 py-3 bg-black">
                <div className="flex gap-12 whitespace-nowrap animate-marquee text-[10px] font-bold text-gray-800 uppercase tracking-[0.5em]">
                    {[...Array(5)].map((_, i) => (
                        <span key={i}>
                            Bismillah // Read with the name of your Lord // Explore 114 Surahs // Minimalist Interface // No Distraction // 
                        </span>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            ` }} />
        </div>
    );
}