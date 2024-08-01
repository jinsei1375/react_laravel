<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/user-posts', [PostController::class, 'getUserPosts'])->name('user.posts.get');
    Route::get('/create-post', [PostController::class, 'getCreatePost'])->name('create.post.get');
    Route::post('/create-post', [PostController::class, 'postCreatePost'])->name('create.post.post');
    Route::post('/delete-post/{post}', [PostController::class, 'postDeletePost'])->name('delete.post.post');
    Route::get('/post/{post}', [PostController::class, 'show'])->name('post.show.get');
    Route::get('/all-posts', [PostController::class, 'allPosts'])->name('posts.allPosts');
    Route::get('/posts', [PostController::class, 'index'])->name('posts.index');
});

Route::get('/create-test-posts', [PostController::class, 'createTestPosts']);

require __DIR__.'/auth.php';
