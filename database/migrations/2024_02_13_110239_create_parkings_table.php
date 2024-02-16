<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('parkings', function (Blueprint $table) {
      $table->id();
      $table->timestamps();
      $table->string('name_long');
      $table->boolean('location');
      $table->string('date_start');
      $table->string('date_end');
      $table->text('notes');
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('parkings');
  }
};
