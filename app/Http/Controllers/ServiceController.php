<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
                // dd('index');
        $searchString = $request->input('search');
        $services = Service::where('name', 'like', '%' . $searchString . '%')->get();

        return view('forms.serviceForm', compact('services'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $service = new Service();
        // $categories = Category::all();

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
        $service = new Service($request->except('_token'));

        $this->validateForm($request);

        // $service->name   = $request->input('name');
        // $service->description   = $request->input('description');
        // $service->status   = $request->input('status');

        $service->save();

        session()->flash('success_message', 'The service was successfully saved!');

        return redirect()->action('App\Http\Controllers\ServiceController@index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function show(Service $service)
    {
        dd('Show');
        $service = Service::findOrFail($id);

        return view('services/show', compact('service'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function edit(Service $service)
    {
        $service = Service::findOrFail($id);
        $categories = Category::all();

        return view('serviceform/forms', compact('categories', 'service'));
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
        $service->name   = $request->input('name');
        $service->description   = $request->input('description');
        $service->status   = $request->input('status');

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
    public function destroy(Service $service)
    {
        $service = Service::findOrFail($id);
        $service->delete();

        return redirect()->action('App\Http\Controllers\ServiceController@index');
    }
}
