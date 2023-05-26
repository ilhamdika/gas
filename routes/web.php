<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\LandingController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\FiturController as AdminFiturController;
use App\Http\Controllers\Admin\JenisTokoController;
use App\Http\Controllers\Admin\KarirController;

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

// Route::get('admin', function () {
//     return 'Hi admin';
// })->middleware('role:admin');
// Route::get('user', function () {
//     return 'Hi user';
// })->middleware('role:user');

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [LandingController::class, 'index'])->name('index');
Route::get('/toko', [LandingController::class, 'toko'])->name('toko');
Route::get('/karir', [LandingController::class, 'karir'])->name('karir');
Route::get('fitur', [LandingController::class, 'fitur'])->name('fitur');

Route::get('/login', function () {
    return Inertia::render('Auth/Login');
})->name('login');

Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.dashboard.')->group(function () {
    Route::resource('fitur', AdminFiturController::class);
    Route::resource('jenis-toko', JenisTokoController::class);
    Route::resource('karir', KarirController::class);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

Route::prefix('prototype')->name('prototype.')->group(function () {
    route::get('/index', function () {
        return Inertia::render('Prototype/Index');
    })->name('index');
    route::get('/toko', function () {
        return Inertia::render('Prototype/Toko');
    })->name('toko');
});

require __DIR__ . '/auth.php';
