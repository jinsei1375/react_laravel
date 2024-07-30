<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $userId = auth()->id();
        $posts = Post::with('user')
            ->where('user_id', $userId)
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('Posts/index', [
            'posts' => $posts
        ]);
    }

    public function getCreatePost()
    {
        return Inertia::render('Posts/Create');
    }


    /**
     * Show the form for creating a new resource.
     */
    public function postCreatePost(Request $request)
    {
        Post::create([
            'user_id' => auth()->id(),
            'content' => $request->content
        ]);

        // 投稿一覧ページへリダイレクト
        return redirect()->route('posts.index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        $post->load('user');
        return Inertia::render('Posts/Show', [
            'post' => $post
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function postDeletePost(Post $post)
    {
        Log::info($post->id);
        $post->delete();

        // onSuccessになるようレスポンス返す
        return redirect()->route('posts.index');
    }

    public function allPosts()
    {
        return response()->json(Post::with('user')->orderBy('created_at', 'desc')->get());
    }

    public function createTestPosts()
    {
        DB::table('posts')->insert([
            ['user_id' => 2, 'content' => 'test post 1'],
            ['user_id' => 2, 'content' => 'test post 2'],
            ['user_id' => 2, 'content' => 'test post 3'],
        ]);

        return response()->json(['message' => 'Test posts created']);
    }
}
