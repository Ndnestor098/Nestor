<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function create (Request $request) {
        $validated = $request->validate([
            'file' => 'required|file|mimes:jpeg,png,jpg,gif|max:10240',
            'title' => 'required|string|max:255',
            'url' => 'required|string|url',
            'language' => 'required|array',
        ]);

        $filePath = $request->file('file')->store('images');

        $url = Storage::url($filePath);

        Project::create([
            'image' => $url, 
            'title' => $validated['title'],
            'enlace' => $validated['url'],
            'language' => json_encode($validated['language']),
        ]);

        // Responder con éxito
        return redirect()->back()->with('success', 'Project added successfully!');
    }

    public function delete($id) {
        $project = Project::find($id);
    
        if ($project) {
            // Eliminar la imagen del almacenamiento
            $imagePath = str_replace('http://192.168.1.117:8000/storage/public/', '', $project->image);

            Storage::delete($imagePath);
    
            // Eliminar el proyecto de la base de datos
            $project->delete();
    
            return redirect()->back()->with('success', 'Project delete successfully!');
        }
    
        return response()->json(['message' => 'Project not found'], 404);
    }
}
