<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MyPerson extends Model
{
    protected $fillable = ['name', 'image', 'avatar', 'description', 'experience', 'client', 'projects', 'backend', 'frontend'];
}
