<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Auth;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
                // dd('index');
        $searchString = $request->input('search');
        $services = Service::where('name', 'like', '%' . $searchString . '%')->get();

        return view('forms/serviceForm', compact('services'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $service = new Service();
        $data = $request->all();

        $service->insert([
             'user_id'       => Auth::user()->id,
            'name'          => $data['name'],
            'description'   => $data['description'],
            'status'        => $data['status'],
        ]);
        
        
        return view('forms/serviceForm', compact('service'));
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $this->validateForm($request);
        
        $service = new Service($request->except('_token'));
        
        // $service->name   = $request->input('name');
        // $service->description   = $request->input('description');
        $service->status   = $request->input('status');
        $service->user_id = Auth::user()->id;
        $service->save();

        session()->flash('success_message', 'The service was successfully saved!');

        return redirect()->action('ServiceController@index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        // dd('Show');
        $service = Service::findOrFail($id);

        return view('services/show', compact('service'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        $service = Service::findOrFail($id);
       
        return view('forms.serviceForm', compact('service'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Service $service)
    {
        $service = Service::findOrFail($id);
        $this->validateForm($request);

        $service->name          = $request->input('name');
        $service->description   = $request->input('description');
        $service->status        = $request->input('status');
        $food->user_id      = Auth::user()->id;
        $service->save();

        session()->flash('success_message', 'The service was successfully updated!');

        return redirect()->action('App\Http\Controllers\ServiceController@show', ['id' => $service->id]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $service = Service::findOrFail($id);
        $service->delete();

        return redirect()->action('App\Http\Controllers\ServiceController@index');
    }

    private function validateForm($request)
    {
        $this->validate($request, [
            'description' => 'required|min:3',
            'date' => 'required',
        ], [
            'description.required' => 'What?? the services does not have a title??',
            'description.min' => 'Description should have at least 3 letters',
        ]);
    }
}
