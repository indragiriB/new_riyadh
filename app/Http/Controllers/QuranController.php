<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Inertia\Response;

class QuranController extends Controller
{
    public function index(): Response
    {
        $baseUrl = config('services.equran.url');
        $response = Http::get("{$baseUrl}/surat");

        $surats = $response->successful() ? $response->json()['data'] : [];

        return Inertia::render('Quran/Index', [
            'surats' => $surats
        ]);
    }

    public function show($nomor): Response
    {
        $baseUrl = config('services.equran.url');
        $response = Http::get("{$baseUrl}/surat/{$nomor}");

        if ($response->successful()) {
            return Inertia::render('Quran/Show', [
                'surat' => $response->json()['data']
            ]);
        }

        abort(404, 'Surat tidak ditemukan');
    }
}