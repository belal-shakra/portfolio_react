<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    use HasFactory;

    protected $fillable = ['title'];


    function resume(){
        return $this->belongsTo(Resume::class);
    }

    function sub_sections(){
        return $this->hasMany(SubSection::class);
    }


}
