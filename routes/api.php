<?php

use Illuminate\Http\Request;

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


Route::post('login', 'UserController@login');
Route::post('register', 'UserController@register');
Route::post('importExcel', 'UserController@importExcelData');
Route::get('getAllUsers', 'UserController@getAllUsers');
Route::get('home', 'UserController@getAuthenticatedUser');
Route::post('logout', 'UserController@logout');
Route::post('getUser', 'UserController@getUserLogged');
Route::post('changeName', 'UserController@saveNewName');
Route::post('changeEmail', 'UserController@saveNewEmail');
Route::post('changePassword', 'UserController@saveNewPassword');


Route::namespace('Pages')->group(function () {
    Route::get('incidencias', 'IncidenciasPageController@getTodasIncidencias');
    Route::post('incidencias/create', 'IncidenciasPageController@createIncidencia');
    Route::post('incidencias/edit', 'IncidenciasPageController@editIncidencia');
    Route::post('incidencias/remove', 'IncidenciasPageController@removeIncidencia');
    
    Route::post('incidencias/reportedBy', 'IncidenciasPageController@getIncidenciasReportedBy');
    Route::post('incidencias/assignedTo', 'IncidenciasPageController@getIncidenciasAssignedTo');
    Route::post('incidencias/todo', 'IncidenciasPageController@getIncidenciasToDo');
    Route::post('incidencias/doing', 'IncidenciasPageController@getIncidenciasDoing');
    Route::post('incidencias/blocked', 'IncidenciasPageController@getIncidenciasBlocked');
    Route::post('incidencias/getIncidencia', 'IncidenciasPageController@getIncidenciaUnique');

    Route::post('incidencias/filtered', 'IncidenciasPageController@getFilteredIncidencias');
    Route::post('incidencias/updateState', 'IncidenciasPageController@updateStateIncidencia');
    Route::post('incidencias/getComments', 'IncidenciasPageController@getComments');
    Route::post('incidencias/createComment', 'IncidenciasPageController@createIncidenciaComment');
    Route::post('incidencias/getUserEmailsFromIncidenciaComment', 'IncidenciasPageController@getEmailsFromIncidenciaComments');

    
});

Route::namespace('Incidencias')->group(function () { 
    Route::post('incidencias/createLog', 'IncidenciaLogsController@saveStateLogIncidencia');
    Route::get('incidencias/getLastIncidenciaID', 'IncidenciaLogsController@getLastIncidenciaID');
});

Route::namespace('Users')->group(function () {
    // -------- Controlador Técnico --------
    Route::post('incidencias/technical/getIncidencias/{orderBy}', 'TechnicalController@getTechnicalIncidencias');
    Route::post('incidencias/technical/filtered', 'TechnicalController@getFilteredIncidencias');
    Route::post('incidencias/technical/getIncidenciasAssigned', 'TechnicalController@getAssignedToTechnical');
    Route::post('incidencias/technical/getGroupsIncidencias', 'TechnicalController@getTechnicalGroupIncidencias');
    
    // -------- Controlador Supervisor --------
    Route::post('incidencias/supervisor/getIncidencias/{orderBy}', 'SupervisorController@getSupervisorIncidencias');
    Route::post('incidencias/supervisor/filtered', 'SupervisorController@getFilteredIncidencias');
    Route::get('incidencias/supervisor/noAssigned', 'SupervisorController@getWithoutAssignIncidencias');
    Route::post('incidencias/supervisor/groups/createGroup', 'SupervisorController@createTechnicalTeam');
    Route::post('incidencias/supervisor/groups/getGroups', 'SupervisorController@getTechnicalGroups');
    Route::post('incidencias/supervisor/groups/getTechnicalsGroup', 'SupervisorController@getGroupUsers');
    Route::post('incidencias/supervisor/groups/deleteTechnicalAssign', 'SupervisorController@deleteTechnicalAssign');
    Route::post('incidencias/supervisor/groups/addTechnicalToGroup', 'SupervisorController@addTechnicalToGroup');
    Route::get('incidencias/supervisor/groups/getGroupCategories', 'SupervisorController@getGroupCategories');
    Route::post('incidencias/supervisor/groups/getTeamEmails', 'SupervisorController@getGroupEmails');

    // getAllTechnicalGroups
    // Route::post('incidencias/supervisor/groups/get', 'SupervisorController@addTechnicalToGroup');


    
});

Route::namespace('DataGraphs')->group(function () {
    Route::post('dataGraphs/technical/getTotal', 'TechnicalDataGraphsController@getTotal');
});

Route::namespace('Utilidades')->group(function () {
    Route::post('getFilteredUsers', 'AutocompleteController@filterUsers');
    Route::post('getFilteredTeams', 'AutocompleteController@filterTeams');
    Route::post('incidenciaStateChangedMail', 'EmailController@incidenciaStateChangedMail');
    Route::post('incidenciaNewCommentMail', 'EmailController@newCommentMail');
    Route::post('newTechnicalMail', 'EmailController@addedToTeamMail');
    Route::post('assignedToIncidenciaMail', 'EmailController@assignedToIncidenciaMail');   
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

