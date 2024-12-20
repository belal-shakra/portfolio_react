<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubSection extends Model
{
    use HasFactory;


    protected $fillable = [
        'title',
        'from',
        'to',
        'location',
        'description',
    ];


    function section(){
        return $this->belongsTo(Section::class);
    }
}
