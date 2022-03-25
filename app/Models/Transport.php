<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transport extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'location_from',
        'destination',
        'date',
        'max_person',
        'status',
    ];
}
