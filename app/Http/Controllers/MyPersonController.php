<?php

namespace App\Http\Controllers;

use App\Models\MyPerson;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MyPersonController extends Controller
{
    public function update(Request $request) {
        $request->validate([
            'name' => "string",
            'experience' => "date",
            'client' => "numeric",
            'projects' => "numeric",
            'description' => "string",
            'image' => 'nullable|image|mimes:png,jpeg,jpg',
            'avatar' => 'nullable|image|mimes:png,jpeg,jpg',
        ]);

        $my = MyPerson::findOrFail(1);

        $urlImage = $my->image;
        $urlAvatar = $my->avatar;

        if($request->hasFile("image")){
            $filePathImage = $request->file('file')->store('images');
            $urlImage = Storage::url($filePathImage);
        }

        if($request->hasFile("avatar")){
            $filePathAvatar = $request->file('file')->store('images');
            $urlAvatar = Storage::url($filePathAvatar);
        }

        $my->update([
            'name' => $request->input("name", $my->name),
            'experience' => $request->input("experience", $my->experience),
            'client' => $request->input("client", $my->client),
            'projects' => $request->input("projects", $my->projects),
            'description' => $request->input("description", $my->description),
            'image' => $urlImage,
            'avatar' => $urlAvatar,
        ]);

        return redirect()->back()->with('success', 'Project added successfully!');
    }
}
