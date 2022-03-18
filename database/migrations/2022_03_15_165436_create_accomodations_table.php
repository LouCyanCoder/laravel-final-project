<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accomodations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('area_adress');
            $table->string('type')->nullable();
            $table->unsignedInteger('max_person');
            $table->enum('pet_friendly', ['yes', 'no']);
            $table->text('description');
            $table->string('contact_person');
            $table->string('contact_info');
            $table->date('start_date');
            $table->date('end_date');
            $table->enum('status', ['open', 'closed', 'on demand']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('accomodations');
    }
};
