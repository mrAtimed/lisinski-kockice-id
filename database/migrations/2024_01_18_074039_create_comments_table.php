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
    Schema::create('comments', function (Blueprint $table) {
      $table->id();
      $table->timestamps();
      $table->string('name')->nullable();
      $table->text('notes')->nullable();
      $table->bigInteger('term_id')->nullable();
      $table->foreignId('department_id')->nullable()->references('id')->on('enum_departments');
      $table->string('created_by')->nullable();
      $table->string('edited_by')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('comments');
  }
};
