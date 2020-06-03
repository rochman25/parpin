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
    Route.get("/pengguna", 'PenggunaController.fetch');
    Route.post('/pengguna/add', 'PenggunaController.add_action').validator('Pengguna');
    Route.put("/pengguna/update/:id", 'PenggunaController.update_action')
    Route.delete("/pengguna/delete", "PenggunaController.delete_action")

    //alat
    Route.get("/alat", 'AlatController.index');
    Route.post("/alat/add", 'AlatController.add_action');
    Route.put("/alat/update/:id", 'AlatController.update_action');
    Route.delete("/alat/delete", "AlatController.delete_action");

    //sensor
    Route.get("/sensor", 'SensorController.index');
    Route.post('/sensor/add', 'SensorController.add_action');
    Route.put("/sensor/update/:id", 'SensorController.update_action');
    Route.delete("/sensor/delete", 'SensorController.delete_action');

    //microcontroller
    Route.get("/microcontroller", 'MicroController.index');
    Route.post('/microcontroller/add', 'MicroController.add_action');
    Route.put("/microcontroller/update/:id", 'MicroController.update_action');
    Route.delete("/microcontroller/delete", 'MicroController.delete_action');

    //notifikasi
    Route.get("/notifikasi", 'NotifikasiController.index')

}).prefix("api/v1").middleware('auth')

// This has to be the last route
Route.any('*', ({ view }) => view.render('app'))