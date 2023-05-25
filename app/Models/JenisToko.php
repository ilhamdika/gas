<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JenisToko extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'thumbnail',
        'deskripsi',
    ];
}
