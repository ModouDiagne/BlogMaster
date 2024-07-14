<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserService
{
    public function getAllUsers()
    {
        return User::all();
    }

    public function createUser(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'admin' => $data['admin'] ?? false,
        ]);
    }

    public function getUserById($id)
    {
        return User::findOrFail($id);
    }

    public function updateUser($id, array $data)
    {
        $user = User::findOrFail($id);
        $user->update([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => isset($data['password']) ? Hash::make($data['password']) : $user->password,
            'admin' => $data['admin'] ?? $user->admin,
        ]);

        return $user;
    }

    public function deleteUser($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return $user;
    }
}
