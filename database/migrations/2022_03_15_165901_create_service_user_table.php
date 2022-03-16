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
        Schema::create('service_user', function (Blueprint $table) {
            $table->id();
            $table->foreignId('service_id');
            $table->foreignId('user_id');
            $table->timestamps();
        });
    }

    // Table service_user {
    //     id int[pk]
    //     service_id foreignId [ref: - services.id]
    //     user_id foreignId [ref: - users.id]
    //   }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('service_user');
    }
};
