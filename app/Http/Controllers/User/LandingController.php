<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Fitur;
use App\Models\JenisToko;

class LandingController extends Controller
{
    public function index()
    {
        $fitur = Fitur::all();
        $jenisToko = JenisToko::all();


        return Inertia::render('User/Index', [
            'fiturs' => $fitur,
            'jenisTokos' => $jenisToko
        ]);
    }

    public function toko()
    {
        $jenisToko = JenisToko::all();

        return Inertia::render('User/Toko', [
            'jenisTokos' => $jenisToko
        ]);
    }
}
