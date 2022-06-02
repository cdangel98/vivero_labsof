<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('login');
});

Route::get('/usuarios', function () {
    return view('usuarios');
});

Route::get('/viveros', function () {
    return view('viveros');
});
