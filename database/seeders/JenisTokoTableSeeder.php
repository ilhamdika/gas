<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\JenisToko;

class JenisTokoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $jenisToko = [
            [
                'name' => 'Jenis Toko 1',
                'thumbnail' => 'https://img.lovepik.com/free-png/20210926/lovepik-delivery-staff-delivery-courier-icon-free-vector-png-image_401494755_wh1200.png',
                'deskripsi' => 'Deskripsi Jenis Toko 1'
            ],
            [
                'name' => 'Jenis Toko 2',
                'thumbnail' => 'https://cdn.pixabay.com/photo/2022/01/31/22/46/icon-6985161_1280.png',
                'deskripsi' => 'Deskripsi Jenis Toko 2'
            ],
            [
                'name' => 'Jenis Toko 3',
                'thumbnail' => 'https://img.freepik.com/free-vector/printer-with-paper-illustration_138676-2396.jpg',
                'deskripsi' => 'Deskripsi Jenis Toko 3'

            ],
            [
                'name' => 'Jenis Toko 4',
                'thumbnail' => 'https://cdn-icons-png.flaticon.com/512/5164/5164023.png',
                'deskripsi' => 'Deskripsi Jenis Toko 4'
            ],
            [
                'name' => 'Jenis Toko 5',
                'thumbnail' => 'https://cdn-icons-png.flaticon.com/512/5164/5164023.png',
                'deskripsi' => 'Deskripsi Jenis Toko 5'
            ],
            [
                'name' => 'Jenis Toko 6',
                'thumbnail' => 'https://cdn-icons-png.flaticon.com/512/5164/5164023.png',
                'deskripsi' => 'Deskripsi Jenis Toko 6'
            ]
        ];

        JenisToko::insert($jenisToko);
    }
}
