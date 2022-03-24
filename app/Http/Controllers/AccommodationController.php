<?php

namespace App\Http\Controllers;

use App\Models\Accommodation;
use Illuminate\Http\Request;

class AccommodationController extends Controller
{
    public function index(Request $request)
    {
        // dd('index');
        $searchString = $request->input('search');
        $accommodations = Accommodation::where('title', 'like', '%' . $searchString . '%')->get();

        return view('forms.accommodationForm', compact('accommodations'));
    }

    public function create()
    {
        $accommodation = new Accommodation();
        // $categories = Category::all();

        return view('forms/accommodationForm', compact('accommodation'));
    }

    public function store(Request $request)
    {
        // dd($request->except('_token'));

        $accommodation = new Accommodation($request->except('_token'));

        // $accommodation->max_person = $request->input('max_person');

        // dd($accommodation);

        $this->validateForm($request);

        // $accommodation->area_adress   = $request->input('area_adress');
        // $accommodation->type   = $request->input('type');
        // $accommodation->max_person   = $request->input('max_person');
        // $accommodation->pet_friendly   = $request->input('pet_friendly');
        // $accommodation->description   = $request->input('description');
        // $accommodation->start_date   = $request->input('start_date');
        // $accommodation->end_date   = $request->input('end_date');
        // $accommodation->status   = $request->input('status');

        // $accommodation->save();

        session()->flash('success_message', 'The accommodation was successfully saved!');

        return redirect()->action('App\Http\Controllers\AccommodationController@index');
    }

    public function show($id)
    {
        dd('Show');
        $accommodation = Accommodation::findOrFail($id);

        return view('accommodations/show', compact('accommodation'));
    }

    public function delete($id)
    {
        $accommodation = Accommodation::findOrFail($id);
        $accommodation->delete();

        return redirect()->action('App\Http\Controllers\AccommodationController@index');
    }

    public function edit($id)
    {
        $accommodation = Accommodation::findOrFail($id);
        // $categories = Category::all();

        return view('accommodationform/forms', compact('accommodation'));
    }

    public function update($id, Request $request)
    {
        $accommodation = Accommodation::findOrFail($id);

        $this->validateForm($request);

        $accommodation->area_adress   = $request->input('area_adress');
        $accommodation->type   = $request->input('type');
        $accommodation->max_person   = $request->input('max_person');
        $accommodation->pet_friendly   = $request->input('pet_friendly');
        $accommodation->description   = $request->input('description');
        $accommodation->start_date   = $request->input('start_date');
        $accommodation->end_date   = $request->input('end_date');
        $accommodation->status   = $request->input('status');

        $accommodation->save();

        session()->flash('success_message', 'The accommodation was successfully updated!');

        return redirect()->action('App\Http\Controllers\AccommodationController@show', ['id' => $accommodation->id]);
    }
}