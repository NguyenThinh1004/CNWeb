<?php

use App\Http\Controllers\SinhVienController;
use Illuminate\Support\Facades\Route;

Route::get('/sinhvien', [SinhVienController::class, 'index'])
    ->name('sinhvien.index');

Route::post('/sinhvien', [SinhVienController::class, 'store'])
    ->name('sinhvien.store');
