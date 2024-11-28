<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CertificateController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Models\Certificate;
use App\Models\Project;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $projects = Project::all()->toArray();
    $certificates = Certificate::all()->toArray();

    return Inertia::render('Home', [
        'projects' => $projects,
        'certificates' => $certificates
    ]);
});

Route::get('/admin', [AdminController::class, "index"])->name("admin");

Route::post('/project', [ProjectController::class, "create"])->name("project.create");

Route::delete('/project/{id}', [ProjectController::class, "delete"])->name("project.delete");

Route::post('/certificate', [CertificateController::class, "create"])->name("certificate.create");

Route::delete('/certificate/{id}', [CertificateController::class, "delete"])->name("certificate.delete");

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
