<?php
use App\Http\Controllers\QuranController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::resource('/quran', QuranController::class);