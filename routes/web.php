<?php
use App\Http\Controllers\QuranController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/quran', [QuranController::class, 'index'])->name('quran.index');
Route::get('/quran/{nomor}', [QuranController::class, 'show'])->name('quran.show');