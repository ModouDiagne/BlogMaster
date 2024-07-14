<?php

namespace App\Repositories;

interface UserRepositoryInterface
{
    public function getAllUsers();
    public function createUser(array $data);
    public function getUserById($id);
    public function updateUser($id, array $data);
    public function deleteUser($id);
}
