<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\enumDepartments;

return new class extends Migration {
  /**
   * Run the migrations.
   */
  public function up(): void
  {

    $all = enumDepartments::all()->flatten();

    Schema::create('terms', function (Blueprint $table) {
      $table->id();
      $table->bigInteger('created_by')->nullable();
      $table->bigInteger('edited_by')->nullable();
      $table->timestamps();
      $table->boolean('dvorana')->nullable();
      $table->string('name_long');
      $table->foreignId('org_id')->nullable();
      $table->foreignId('term_id')->nullable();
      $table->date('date')->nullable();

      $table->string('start')->nullable();
      $table->string('end')->nullable();

      // $table->string('types')->nullable();
      $table->string('type_id')->default(1)->references('id')->on('terms_types');

      $table->text('izvodaci')->nullable();
      $table->text('program')->nullable();
      $table->text('radio')->nullable();
      $table->text('domjenak')->nullable();
      $table->text('extra')->nullable();

      $table->text('contact_person')->nullable();
      $table->text('contact_num')->nullable();

      $table->text('entry_start')->nullable();
      $table->text('entry_end')->nullable();

      $table->integer('stage_apart')->nullable();
      $table->integer('stage_solo')->nullable();
      $table->integer('stage_group')->nullable();

      $table->boolean('tickets_paid')->nullable();
      $table->boolean('tickets_subscriber')->nullable();
      $table->boolean('tickets_invatations')->nullable();
      $table->boolean('tickets_accreditation')->nullable();
      $table->boolean('tickets_free')->nullable();

      $table->integer('audience_break')->nullable();
      $table->text('audience_notes')->nullable();

      $table->string('staige_on_duty')->nullable();
      $table->integer('staige_tickets_sold')->nullable();
      $table->text('staige_notes')->nullable();

      $table->string('sound_on_duty')->nullable();
      $table->text('sound_notes')->nullable();

      $table->string('light_on_duty')->nullable();
      $table->text('light_notes')->nullable();

    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('terms');
  }
};
