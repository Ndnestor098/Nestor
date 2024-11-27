<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index () {
        $projects = Project::all()->toArray();
        $certificates = Certificate::all()->toArray();

        return Inertia::render('Admin', [
            "projects" => $projects,
            "certificates" => $certificates
        ]);
    }

    public function project (Request $request) {
        $validated = $request->validate([
            'file' => 'required|file',
            'title' => 'required|string|max:255',
            'url' => 'required|string|url',
            'language' => 'required|array',
        ]);

        $filePath = $request->file('file')->store('public/images');

        $url = Storage::url($filePath);

        Project::create([
            'file' => $filePath, 
            'title' => $validated['title'],
            'url' => $validated['url'],
            'language' => $validated['language'],
        ]);

        // Responder con éxito
        return redirect()->back()->with('success', 'Project added successfully!');
    }
}
