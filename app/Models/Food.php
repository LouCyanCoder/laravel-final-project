<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;

class Food extends Model
{
    use HasFactory;

<<<<<<< HEAD
    public function user()
        {
            return $this->belongsTo(User::class);
        }
=======

    protected $fillable = ['name','address', 'description', 'day', 'status']; 
>>>>>>> 5333ab263a01b0b21c3296800c296ecb75e0afd5
}
