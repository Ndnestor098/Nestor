<?php

namespace App\Http\Controllers;

use App\Models\MyPerson;
use Illuminate\Http\Request;

class MyPersonController extends Controller
{
    public function index() {
        MyPerson::create([
            'name' => "Nestor Daniel",
            'image' => "http://192.168.1.117:8000/storage/public/images/io.webp",
            'avatar' =>"http://192.168.1.117:8000/storage/public/images/gato.webp", 
            'description' => "I define myself as a passionate web and desktop application developer, specialized in technologies such as Laravel, JavaScript, CSS, SQL, React, Tailwind, Python, and PHP, with strong expertise in Eloquent ORM. My focus goes beyond mere aesthetics; I am dedicated to creating distinctive digital experiences by blending creativity with responsibility. My goal is to find the perfect balance between functionality and innovation in each project. I am enthusiastic about challenges, always open to learning and constantly growing. Additionally, I speak Spanish fluently, Italian at a B1 level, and English at a basic level.", 
            'experience' => 5, 
            'client' => 55, 
            'projects' => 8, 
            'backend' => json_encode(["PHP", "Laravel", "Node", "SQL", "Docker", "GIT"]), 
            'frontend' => json_encode(["React", "Tailwind", "CSS", "JavaScript", 'Node', "Bootstrap"])
        ]);
    }
}
