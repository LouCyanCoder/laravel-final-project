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
        Schema::create('food', function (Blueprint $table) {
            $table->id();
            $table->string('address')->nullable();
            $table->string('name')->nullable();
            $table->string('description')->nullable();
            $table->string('day')->nullable();
            $table->timestamps();
            // Table food {
            //     id int[pk]
            //     user_id int [ref: - users.id]
            //     address str
            //     name str
            //     description varchar
            //     day str
            //     time time
            //   }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('food');
    }
};
