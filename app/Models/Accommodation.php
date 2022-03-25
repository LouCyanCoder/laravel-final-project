<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Accommodation extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'area_address',
        'type',
        'max_person',
        'pet_friendly',
        'description',
        'contact_person',
        'contact_info',
        'start_date',
        'end_date',
        'status',
    ];
}
