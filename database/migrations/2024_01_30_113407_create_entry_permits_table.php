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
    Schema::create('entry_permits', function (Blueprint $table) {
      $table->id();
      $table->foreignId("created_by");
      $table->foreignId("edited_by")->nullable();
      $table->timestamps();
      $table->foreignId('term_id');
      $table->string('name')->nullable();
      $table->string('oib')->nullable();
      $table->text('notes')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('entry_permits');
  }
};
