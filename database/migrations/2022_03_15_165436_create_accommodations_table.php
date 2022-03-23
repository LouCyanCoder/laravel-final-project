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
        Schema::create('accommodations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('area_address');
            $table->string('type')->nullable();
            $table->unsignedInteger('max_person');
            $table->enum('pet_friendly', ['yes', 'no']);
            $table->text('description');
            $table->date('start_date');
            $table->date('end_date');
            $table->enum('status', ['open', 'closed', 'on_demand']);
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
        Schema::dropIfExists('accommodations');
    }
};
