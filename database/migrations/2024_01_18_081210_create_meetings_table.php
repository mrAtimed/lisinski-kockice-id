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
    Schema::create('meetings', function (Blueprint $table) {
      $table->id();
      $table->string('created_by')->nullable();
      $table->string('edited_by')->nullable();
      $table->timestamps();
      $table->date("date")->nullable();
      $table->string("room")->nullable();
      $table->text("name_long")->nullable();
      $table->text("notes")->nullable();
      
      $table->string("time_start")->nullable();
      $table->string("time_end")->nullable();
      $table->string("duration")->nullable();

    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('meetings');
  }
};
