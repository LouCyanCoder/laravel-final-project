<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;

class Accommodation extends Model
{
    use HasFactory;

    public function user()
        {
            return $this->belongsTo(User::class);
        }

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
