<?php

use App\Models\About;
use App\Models\Project;
use App\Models\Resume;
use App\Models\Section;
use App\Models\SubSection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Mockery\Expectation;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/public/portfolio', function () {

    try {
        $data['about'] = About::all();
        $data['resume'] = Resume::with('sections.sub_sections')->get();
        $data['projects'] = Project::with('project_area')->get()
            ->groupBy(function ($project) {
                return $project->project_area->area; // Group by area name
            })
            ->map(function ($projects) {
                return $projects->toArray(); // Convert each group to an array
            })
            ->toArray();



    } catch (Expectation $e) {
        $e->getExceptionMessage();
    }

    return response()->json($data);
});
