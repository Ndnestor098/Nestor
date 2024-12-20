<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CertificateController extends Controller
{
    public function create (Request $request) {
        $request->validate([
            'file' => 'required|file|mimes:jpeg,png,jpg,gif|max:10240',
            'title' => 'required|string|max:255',
            'url' => 'required|string|url',
        ]);

        $filePath = $request->file('file')->store('images');

        $url = Storage::url($filePath);

        Certificate::create([
            'image' => $url, 
            'title' => $request->input('title'),
            'enlace' => $request->input('url'),
        ]);

        // Responder con éxito
        return redirect()->back()->with('success', 'Project added successfully!');
    }

    public function delete($id) {
        $project = Certificate::find($id);
    
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
