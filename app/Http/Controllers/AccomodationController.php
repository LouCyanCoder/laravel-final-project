<?php

namespace App\Http\Controllers;

use App\Models\Accomodation;
use Illuminate\Http\Request;

class AccomodationController extends Controller
{
    public function index()
    {
        $accomodations = Accomodation::query()
            ->orderBy('name', 'asc')
            ->limit(50)
            ->get();

        return view('accomodations.index', compact('accomodations'));
    }

    public function create()
    {
        $accomodation = new Accomodation;

        return view('accomodations.edit', compact('accomodations'));
    }

    public function edit($accomodation_id)
    {
        $accomodation = Accomodation::findOrFail($accomodation_id);

        return view('accomodations.edit', compact('accomodation'));
    }

    public function save(Request $request, $accomodation_id = null)
    {
        // validate data before proceeding
        $this->validate($request, [
            'slug' => [
                'required',
                Rule::unique('accomodations')->ignore($accomodation_id)
            ],
            'name' => 'required'
        ], [
            'slug.required' => 'Just put in the slug, man.',
            'slug.unique' => 'Trying to insert an existing record, are we?'
        ]);

        if ($accomodation_id) {
            // if we have accomodation_id URL parameter
            // retrieve accomodation from database
            $accomodation = Accomodation::findOrFail($accomodation_id);
        } else {
            // else prepare empty accomodation
            $accomodation = new Accomodation;
        }

        // fill the Accomodation object with data from the request
        $accomodation->slug   = $request->input('slug');
        $accomodation->name   = $request->input('name');

        // save the object into the database
        $accomodation->save();

        // flash a success message
        session()->flash('success_message', 'Accomodation has been successfully saved!');

        // redirect to edit form
        return redirect()->action('Admin\AccomodationController@edit', $accomodation->id);
    }
}

