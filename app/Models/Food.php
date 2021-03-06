<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;

class Food extends Model
{
    use HasFactory;

    public function user()
        {
            return $this->belongsTo(User::class);
        }

    protected $fillable = ['name','address', 'description', 'day', 'status']; 
}
