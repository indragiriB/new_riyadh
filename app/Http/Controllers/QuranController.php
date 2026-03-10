<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http; // Import library HTTP Client
use Illuminate\View\View;

class QuranController extends Controller
{
    public function index(): View
    {
        // 1. Melakukan request GET ke API
        $response = Http::get('https://equran.id/api/v2/surat');

        // 2. Mengecek apakah request berhasil
        if ($response->successful()) {
            // Mengambil bagian 'data' dari JSON (karena API v2 membungkusnya dalam status wrapper)
            $surats = $response->json()['data'];
        } else {
            // Jika gagal, berikan array kosong atau tangani errornya
            $surats = [];
        }

        // 3. Mengirim data ke view
        return view('quran.index', compact('surats'));
    }

    public function show($nomor){
        $response = Http::get("https://equran.id/api/v2/surat/{$nomor}");
       if ($response->successful()) {
        $surat = $response->json()['data'];
        return view('quran.show', compact('surat'));
    }

    abort(404, 'Surat tidak ditemukan');
    }
}