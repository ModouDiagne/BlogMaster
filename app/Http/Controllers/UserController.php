<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserCreateRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Services\UserService;

class UserController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function index()
    {
        $users = $this->userService->getAllUsers();
        return view('users.index', compact('users'));
    }

    public function create()
    {
        return view('users.create');
    }

    public function store(UserCreateRequest $request)
    {
        $this->userService->createUser($request->validated());

        return redirect('/users')->with('success', 'User created successfully.');
    }

    public function show($id)
    {
        $user = $this->userService->getUserById($id);
        return view('users.show', compact('user'));
    }

    public function edit($id)
    {
        $user = $this->userService->getUserById($id);
        return view('users.edit', compact('user'));
    }

    public function update(UserUpdateRequest $request, $id)
    {
        $this->userService->updateUser($id, $request->validated());

        return redirect('/users')->with('success', 'User updated successfully.');
    }

    public function destroy($id)
    {
        $this->userService->deleteUser($id);

        return redirect('/users')->with('success', 'User deleted successfully.');
    }
}
