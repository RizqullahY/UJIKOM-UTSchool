<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'username' => ['required', 'string'],
            'password' => ['required', 'string'],
        ]);
        $user = User::where('username', $request->username)->first();
        if (!$user || $request->password !== $user->password || $user->role !== 'kasir') {
            return redirect('/')->with('fail', 'Login gagal, silakan coba lagi.');
        }
        $request->session()->put('user_id', $user->id_user);
        return redirect()->route('reservasi.index');
    }
    public function logout(Request $request)
    {
        $request->session()->forget('user_id');
        return redirect('/');
    }
}
