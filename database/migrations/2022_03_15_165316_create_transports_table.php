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
        Schema::create('transports', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->unique();
            $table->string('location_from')->nullable();
            $table->string('destination')->nullable();
            $table->time('time')->nullable();
            $table->date('date')->nullable();
            $table->string('contact_person')->nullable();
            $table->string('contact_info')->nullable();
            $table->integer('max_person')->nullable();
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
        Schema::dropIfExists('transports');
    }
};
