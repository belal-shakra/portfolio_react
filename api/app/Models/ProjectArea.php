<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectArea extends Model
{
    use HasFactory;

    protected $fillable = ['area'];



    function projects(){
        return $this->hasMany(Project::class);
    }
}
