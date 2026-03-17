<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http; // Import library HTTP Client
use Illuminate\View\View;

class QuranController extends Controller
{
    public function index(): View
    {
        $baseUrl = config('services.equran.url');

    $response = Http::get("{$baseUrl}/surat");

    if ($response->successful()) {
        $surats = $response->json()['data'];
        return view('quran.index', compact('surats'));
    }

    return back()->with('error', 'Gagal memuat data.');
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