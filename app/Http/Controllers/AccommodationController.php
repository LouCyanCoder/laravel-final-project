<?php

namespace App\Http\Controllers;

use App\Models\Accommodation;
use Illuminate\Http\Request;

class AccommodationController extends Controller
{
    public function index(Request $request)
    {
        $searchString = $request->input('search');
        $accommodations = Accommodation::where('title', 'like', '%' . $searchString . '%')->get();

        return view('accommodationForm/forms', compact('accommodations'));
    }

    public function create()
    {
        $accommodation = new Accommodation();
        $categories = Category::all();

        return view('accommodationform/forms', compact('categories', 'accommodation'));
    }

    public function store(Request $request)
    {
        $accommodation = new Accommodation();

        $this->validateForm($request);

        $accommodation->area_adress   = $request->input('area_adress');
        $accommodation->type   = $request->input('type');
        $accommodation->max_person   = $request->input('max_person');
        $accommodation->pet_friendly   = $request->input('pet_friendly');
        $accommodation->description   = $request->input('description');
        $accommodation->contact_person   = $request->input('contact_person');
        $accommodation->contact_info   = $request->input('contact_info');
        $accommodation->start_date   = $request->input('start_date');
        $accommodation->end_date   = $request->input('end_date');
        $accommodation->status   = $request->input('status');

        $accommodation->save();

        session()->flash('success_message', 'The accommodation was successfully saved!');

        return redirect()->action('App\Http\Controllers\AccommodationController@index');
    }

    public function show($id)
    {
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
        $categories = Category::all();

        return view('accommodationform/forms', compact('categories', 'accommodation'));
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
        $accommodation->contact_person   = $request->input('contact_person');
        $accommodation->contact_info   = $request->input('contact_info');
        $accommodation->start_date   = $request->input('start_date');
        $accommodation->end_date   = $request->input('end_date');
        $accommodation->status   = $request->input('status');

        $accommodation->save();

        session()->flash('success_message', 'The accommodation was successfully updated!');

        return redirect()->action('App\Http\Controllers\AccommodationController@show', ['id' => $accommodation->id]);
    }
}