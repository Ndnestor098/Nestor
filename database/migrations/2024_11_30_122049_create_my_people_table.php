<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('my_people', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("image");
            $table->string("avatar");
            $table->string("description");
            $table->integer("experience");
            $table->integer("client");
            $table->integer("projects");
            $table->string("backend");
            $table->string("frontend");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('my_people');
    }
};
