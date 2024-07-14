<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\UserRepositoryInterface;
use App\Repositories\UserRepository;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        try {
            $this->app->singleton(App\Repositories\UserRepositoryInterface::class, App\Repositories\UserRepository::class);
        } catch (\Exception $e) {
            \Log::error('Error binding UserRepositoryInterface: ' . $e->getMessage());
            throw $e;
        }
    }

    public function boot(): void
    {
        //
    }
}
