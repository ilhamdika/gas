<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Fitur;
use App\Models\JenisToko;
use App\Models\Karir;

class LandingController extends Controller
{
    public function index()
    {
        $fitur = Fitur::all();
        $jenisToko = JenisToko::all();
        $karir = Karir::all();


        return Inertia::render('User/Index', [
            'fiturs' => $fitur,
            'jenisTokos' => $jenisToko,
            'karirs' => $karir
        ]);
    }

    public function toko()
    {
        $jenisToko = JenisToko::all();

        return Inertia::render('User/Toko', [
            'jenisTokos' => $jenisToko
        ]);
    }

    public function karir()
    {
        $karir = Karir::all();

        return Inertia::render('User/Karir', [
            'karirs' => $karir
        ]);
    }
}
