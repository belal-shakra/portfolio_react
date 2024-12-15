<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'category', 'link', 'image', 'path', 'project_area_id'];



    function project_area(){
        return $this->belongsTo(ProjectArea::class);
    }
}
