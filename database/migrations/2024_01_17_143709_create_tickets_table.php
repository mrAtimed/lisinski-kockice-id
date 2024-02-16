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
    Schema::create('tickets', function (Blueprint $table) {
      $table->id();
      $table->timestamps();
      $table->string('name')->nullable();
      $table->string('notes')->nullable();
      $table->foreignId('department_id')->references('id')->on('enum_departments')->default(1);
      $table->string('created_by')->nullable();
      $table->string('edited_by')->nullable();

    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('tickets');
  }
};
