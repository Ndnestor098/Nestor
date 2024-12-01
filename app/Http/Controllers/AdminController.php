<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use App\Models\MyPerson;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index () {
        $projects = Project::all()->toArray();
        $certificates = Certificate::all()->toArray();
        $myPerson = MyPerson::find(1);

        return Inertia::render('Admin', [
            "projects" => $projects,
            "certificates" => $certificates,
            "myPerson" => $myPerson,
        ]);
    }
}
