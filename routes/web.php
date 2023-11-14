<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TransactionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [MenuController::class,'index'])->name('menu');
Route::get('/tambah-menu', [MenuController::class,'create']);
Route::post('/store-menu', [MenuController::class,'store']);
Route::get('/edit-menu', [MenuController::class,'edit'])->name('menu.edit');
Route::post('/update-menu/{id}', [MenuController::class,'update'])->name('menu.update');
Route::post('/destroy-menu', [MenuController::class,'destroy'])->name('menu.destroy');

Route::get('/transaction', [CartController::class,'index'])->name('transaction');
Route::post('/transaction/store', [CartController::class,'store'])->name('transaction.store');
Route::post('/transaction/clear', [CartController::class,'destroy'])->name('transaction.clear');

Route::post('/payment/store', [TransactionController::class, 'store'])->name('payment.store');


// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
