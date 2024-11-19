<?php

use App\Http\Controllers\ReservasiBengkelController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/login', [UserController::class, 'login'])->name('login');
Route::post('/logout', [UserController::class, 'logout'])->name('logout');

Route::middleware('auth.check')->group(function () {
    Route::get('reservasi', [ReservasiBengkelController::class, 'index'])->name('reservasi.index');
    Route::post('/reservasi/updateStatus/{id}', [ReservasiBengkelController::class, 'updateStatus'])->name('reservasi.updateStatus');
    // Route::put('reservasi/{id}/update-status', [ReservasiBengkelController::class, 'updateStatus'])->name('reservasi.updateStatus');
    Route::delete('reservasi/{id}', [ReservasiBengkelController::class, 'destroy'])->name('reservasi.destroy');
    Route::get('reservasi/{id}', [ReservasiBengkelController::class, 'show'])->name('reservasi.show');
});