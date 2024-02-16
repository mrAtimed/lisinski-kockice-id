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
    Schema::create('enum_cycles', function (Blueprint $table) {
      $table->id();
      $table->timestamps();
      $table->string('name_long');
      $table->string('name_short');
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('enum_cycles');
  }
};
