'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get("hello", 'PenggunaController.index').prefix("api/v1");
Route.post('/login', 'PenggunaController.login_action').prefix('api/v1').validator('Login');
Route.post('/pengguna/add', 'PenggunaController.add_action').prefix('api/v1').validator('Pengguna');

Route.group(function() {
    Route.get("/pengguna", 'PenggunaController.index');
}).prefix("api/v1")

// This has to be the last route
Route.any('*', ({ view }) => view.render('app'))