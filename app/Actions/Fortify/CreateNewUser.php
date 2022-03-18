<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {

        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => $this->passwordRules(),
            'username' => [
                'required',
                'string',
                'max:255',
                Rule::unique(User::class),
            ],
        ])->validate();

        // dd($input);

        // $user = new User([
        //     'name' => $input['name'],
        //     'email' => $input['email'],
        //     'username' => $input['username'],
        //     'password' => Hash::make($input['password']),
        // ]);
        // $user->phone_number = $input["phone_number"];
        // $user->save();

        return User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'username' => $input['username'],
            'password' => Hash::make($input['password']),
            'phone_number' => $input['phone_number'],
        ]);
    }
}
