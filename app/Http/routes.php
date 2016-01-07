<?php

Route::get('/', 'AngularController@serveApp');

// login controllers
Route::controllers(['auth' => 'Auth\AuthController',]);
