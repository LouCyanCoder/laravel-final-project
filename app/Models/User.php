<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

use App\Models\Transport;
use App\Models\Food;
use App\Models\Service;
use App\Models\Accommodation;
use App\Models\Language;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'username',
        'address',
        'phone_number',
        'telegram_link',
        'facebook_link'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function accommodations()
    {
       return $this->hasMany(Accommodation::class); 
    }

    public function transports()
    {
       return $this->hasMany(Transport::class); 
    }

    public function foods()
    {
       return $this->hasMany(Food::class); 
    }

    public function services()
    {
       return $this->hasMany(Service::class); 
    }

    public function languages()
    {
       return $this->hasMany(Language::class); 
    }
}
