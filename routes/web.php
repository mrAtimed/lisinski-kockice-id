<?php

use App\Http\Controllers\OrganisersController;
use App\Models\EntryPermits;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\MeetingsController;
use App\Http\Controllers\TicketsController;
use App\Http\Controllers\CommentsController;
use App\Http\Controllers\TermsController;
use App\Http\Controllers\EntryPermitsController;
use App\Http\Controllers\TermsServicesController;
use App\Http\Controllers\ParkingsController;

use App\Models\User;
use App\Models\Terms;
use App\Models\Meetings;
use App\Models\termsServices;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

require __DIR__ . '/auth.php';

Route::get('/', function () {
  // return Inertia::render('Auth/Login');
  return Inertia::render('Dashboard', [
    'vdv' => Terms::whereDate('date', date('Y-m-d'))
      ->where('dvorana', '1')
      ->oldest('start')
      ->paginate(),
    'mdv' => Terms::whereDate('date', date('Y-m-d'))
      ->where('dvorana', '0')
      ->oldest('start')
      ->paginate(),
    'meetings' => Meetings::whereDate('date', date('Y-m-d'))
      ->get(),
  ]);
})->name('dashboard');


Route::get('/test', function () {
  return (termsServices::where("term_id", 2)->latest('id')->get());
})->name('test');

Route::get('/dashboard', function () {
  return Inertia::render('Dashboard', [
    'vdv' => Terms::whereDate('date', date('Y-m-d'))
      ->where('dvorana', '1')
      ->oldest('start')
      ->paginate(),
    'mdv' => Terms::whereDate('date', date('Y-m-d'))
      ->where('dvorana', '0')
      ->oldest('start')
      ->paginate(),
    'meetings' => Meetings::whereDate('date', date('Y-m-d'))
      ->get(),
  ]);
})->name('dashboard');
Route::get("/terms/{term}", [TermsController::class, 'show'])->name("terms.show");

Route::get("/meetingss/{meeting}", [MeetingsController::class, 'show'])->name("meetings.show");


Route::middleware('auth')->group(function () {

  Route::get("/create", [TermsController::class, 'create'])->name("add");
  Route::resource('/terms', TermsController::class)->except('show', 'create');
  Route::get('/entry', [EntryPermitsController::class, 'create'])->name('entry.create');
  Route::resource('/meetings', MeetingsController::class)->except('show');
  Route::resource('/services', ServicesController::class);
  Route::resource('/tickets', TicketsController::class);
  Route::resource('/comments', CommentsController::class);
  Route::resource('/organisers', OrganisersController::class);
  Route::get("/linkservice", [TermsServicesController::class, 'create'])->name("term.extraservice");


  Route::post('/addServicesToTerm', [TermsServicesController::class, 'store'])->name('term.service');

  Route::resource('/parkings', ParkingsController::class);

  Route::get(
    '/permissions',
    function () {
      return Inertia::render('Users/BrowseUsers', ['users' => User::all()]);
    }
  )->name('users');

  Route::get(
    '/permissions/edit',
    function () {
      return Inertia::render('Users/Users');
    }
  )->name('user.edit');

  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
