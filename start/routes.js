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

Route.group(function() {
    //pengguna
    Route.get("/pengguna", 'PenggunaController.index');
    Route.post('/pengguna/add', 'PenggunaController.add_action').validator('Pengguna');

    //alat
    Route.get("/alat", 'AlatController.index');
    Route.post("/alat/add", 'AlatController.add_action').validator('AddAlat');

}).prefix("api/v1").middleware('auth')

// This has to be the last route
Route.any('*', ({ view }) => view.render('app'))