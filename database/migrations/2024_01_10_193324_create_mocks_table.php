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
    Schema::create('mocks', function (Blueprint $table) {
      $table->id();
      $table->timestamps();
      $table->string('first_name')->nullable();
      $table->string('last_name')->nullable();
      $table->boolean('gender')->nullable();
      $table->string('address')->nullable();
      $table->string('oib')->nullable();
      $table->string('company')->nullable();
      $table->text('notes')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('mocks');
  }
};
