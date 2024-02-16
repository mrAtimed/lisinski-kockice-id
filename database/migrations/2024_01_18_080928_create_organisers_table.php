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
    Schema::create('organisers', function (Blueprint $table) {
      $table->id();
      $table->timestamps();
      $table->string('name_long');
      $table->string('name_short');
      $table->string('address_text')->nullable();
      $table->string('address_place')->nullable();
      $table->string('address_pobr')->nullable();
      $table->string('address_state')->nullable();
      $table->string('oib');
      $table->string('contact_person')->nullable();
      $table->string('contact_email')->nullable();
      $table->string('contact_phone')->nullable();
      $table->text('notes')->nullable();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('organisers');
  }
};
