<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Karir;

class KarirTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $karir = [
            [
                'name' => 'Karir 1',
                'thumbnail' => 'https://img.lovepik.com/free-png/20210926/lovepik-delivery-staff-delivery-courier-icon-free-vector-png-image_401494755_wh1200.png',
                'deskripsi' => 'Deskripsi Karir 1'
            ],
            [
                'name' => 'Karir 2',
                'thumbnail' => 'https://cdn.pixabay.com/photo/2022/01/31/22/46/icon-6985161_1280.png',
                'deskripsi' => 'Deskripsi Karir 2'
            ],
            [
                'name' => 'Karir 3',
                'thumbnail' => 'https://img.freepik.com/free-vector/printer-with-paper-illustration_138676-2396.jpg',
                'deskripsi' => 'Deskripsi Karir 3'
            ],
            [
                'name' => 'Karir 4',
                'thumbnail' => 'https://cdn-icons-png.flaticon.com/512/5164/5164023.png',
                'deskripsi' => 'Deskripsi Karir 4'
            ],
            [
                'name' => 'Karir 5',
                'thumbnail' => 'https://cdn-icons-png.flaticon.com/512/5164/5164023.png',
                'deskripsi' => 'Deskripsi Karir 5'
            ],
            [
                'name' => 'Karir 6',
                'thumbnail' => 'https://cdn-icons-png.flaticon.com/512/5164/5164023.png',
                'deskripsi' => 'Deskripsi Karir 6'
            ]
        ];

        Karir::insert($karir);
    }
}
