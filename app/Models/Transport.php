<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;

class Transport extends Model
{
    use HasFactory;

    public function user()
        {
            return $this->belongsTo(User::class);
        }

    protected $fillable = [
        'user_id',
        'location_from',
        'destination',
        'date',
        'max_person',
        'status',
    ];
}
