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
    Schema::create('services', function (Blueprint $table) {
      $table->id();
      $table->string('created_by')->nullable();
      $table->string('edited_by')->nullable();
      $table->timestamps();
      $table->string('name_long')->nullable();
      $table->string('name_short')->nullable();
      $table->boolean('special_service')->default(0);
      $table->foreignId('department_id')->references('id')->on('enum_departments')->default(1);
      $table->boolean('hall_id')->nullable();
      $table->boolean('hall_notes')->nullable();
      $table->text('notes')->nullable();

    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('services');
  }
};
