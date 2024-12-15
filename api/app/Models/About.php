<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class About extends Model
{
    use HasFactory;


    protected $fillable = [
        'description',
        'position',
        'birthday',
        'website',
        'phone',
        'age',
        'degree',
        'email',
        'image',
        'path',
    ];



}
