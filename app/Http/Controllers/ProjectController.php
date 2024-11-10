<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function create() {
        Project::create([
            'title' => "EduPlus with Laravel",
            'image' => "/images/eduplus.webp",
            'language' => json_encode(["Laravel", "PHP", "Blade", "CSS", "JS"]),
            'enlace' => "https://github.com/Ndnestor098/EduPlus"
        ]);

        return Inertia::render('Home');
    }
}
