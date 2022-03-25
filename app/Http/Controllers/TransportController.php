<?php

namespace App\Http\Controllers;

use App\Models\Transport;
use Illuminate\Http\Request;
use Auth;

class TransportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $searchString = $request->input('search');
        $transports = Transport::where('destination', 'like', '%' . $searchString . '%')->get();

        return view('forms.transportForm', compact('transports'));    
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $transport = new Transport();
        $data = $request->all();

        $transport->insert([
            'location_from' => $data['location_from'],
            'destination' => $data['destination'],
            'date' => $data['date'],
            'max_person' => $data['max_person'],
            'status' => $data['status']
        ]);



        return view('forms/transportForm', compact('transport'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->all());
        // dd($request->except('_token'));
        $this->validateForm($request);

        $transport = new Transport($request->except('_token'));
        // dd($transport);
        // $transport = new Transport;

        

        // $transport->location_from = $request->input('location_from');
        // $transport->destination = $request->input('destination');
        // $transport->date  = $request->input('date');
        // $transport->max_person = $request->input('max_person');
        // $transport->status = $request->input('status');
        $transport->user_id = Auth::user()->id;

        // dd($transport);

        $transport->save();

        session()->flash('success_message', 'The transportation was successfully saved!');

        return redirect()->action('TransportController@index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Transport  $transport
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $transport = Transport::findOrFail($id);
        

        return view('transports/show', compact('transport'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Transport  $transport
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $transport = Transport::findOrFail($id);

        return view('transportForm/forms', compact('transport'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Transport  $transport
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Transport $transport)
    {
        $transport = Transport::findOrFail($id);

        $this->validateForm($request);

        $transport->location_from = $request->input('location_from');
        $transport->destination = $request->input('destination');
        $transport->date  = $request->input('date');
        $transport->max_person = $request->input('max_person');
        $transport->status = $request->input('status');

        $transport->save();

        session()->flash('success_message', 'The transportation was successfully saved!');
        
        return redirect()->action('App\Http\Controllers\TransportController@show', ['id' => $transport->id]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Transport  $transport
     * @return \Illuminate\Http\Response
     */
    public function destroy(Transport $transport)
    {
        //
    }

    private function validateForm($request)
    {
        $this->validate($request, [
            'destination' => 'required|min:1',
            'date' => 'required',
        ], [
            'destination.required' => 'Destination is missing',
            'destination.min' => 'You should fill this area'
        ]);
    }
}
