<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/* Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});  */

//Route::resource('Diary', 'DiaryController')->except(['store', 'edit']);

Route::get('/Diary',[App\Http\Controllers\DiaryController::class, 'index']);
Route::post('/Diary/add',[App\Http\Controllers\DiaryController::class, 'store']);
Route::delete('/Diary/{id}',[App\Http\Controllers\DiaryController::class, 'destroy']);
Route::get('/Diary/edit/{id}',[App\Http\Controllers\DiaryController::class, 'edit']);
Route::put('/Diary/update/{id}',[App\Http\Controllers\DiaryController::class, 'update']);
 