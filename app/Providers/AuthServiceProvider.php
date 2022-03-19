<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Gate::define('admin', function($user) {
            return in_array ($user->email, [
                'admin@whocares.cz',
                'edit@whocares.cz'
            ]);
        });

        Gate::define('role', function($user, $role_name) {

            if ($role_name == 'admin') {
                return $user->email == 'admin@whocares.cz';
            }

            if ($role_name == 'editor') {
                return $user->email == 'edit@whocares.cz';
            }

            // if it works for user
            if ($role_name == 'user') {
                return $user->email == '';
            }

        });

        
    }
}
