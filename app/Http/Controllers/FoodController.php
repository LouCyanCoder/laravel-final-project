<?php

namespace App\Http\Controllers;

use App\Models\Food;
use Illuminate\Http\Request;
use Auth;

class FoodController extends Controller
{
    public function index(Request $request)
    {
        $searchString = $request->input('search');
        $food = Food::where('description', 'like', '%' . $searchString . '%')->get();

        return view('forms.foodForm', compact('food'));
    }

    public function create(Request $request)
    {
        $food = new Food();
        $data = $request->all();

        $food->insert([
            'user_id' => $data['user_id'],
            'address'   => $data['address'],
            'name'   => $data['name'],
            'description'   => $data['description'],
            'day'   => $data['day'],
            'status'   => $data['status'],
        ]);
      

        return view('forms.foodForm', compact('food'));
    }

    public function store(Request $request)
    {

        $food = new Food($request->except('_token'));

        $this->validateForm($request);

        // dd('Validation passed');

        $food->address   = $request->input('address');
        $food->name   = $request->input('name');
        $food->description   = $request->input('description');
        $food->day   = $request->input('day');
        $food->status   = $request->input('status');
        $food->user_id = Auth::user()->id;
        $food->save();
        // dd($food);
        

        

        session()->flash('success_message', 'The food was successfully saved!');

        return redirect()->action('FoodController@index');
    }

    public function show($id)
    {
        $food = Food::findOrFail($id);

        return view('food/show', compact('food'));
    }

    public function delete($id)
    {
        $food = Food::findOrFail($id);
        $food->delete();

        return redirect()->action('App\Http\Controllers\FoodController@index');
    }

    public function edit($id)
    {
        $food = Food::findOrFail($id);
        

        return view('food/form', compact('food'));
    }

    public function update($id, Request $request)
    {
        $food = Food::findOrFail($id);

        $this->validateForm($request);

        $food->address   = $request->input('address');
        $food->name   = $request->input('name');
        $food->description   = $request->input('description');
        $food->day   = $request->input('day');
        $food->status   = $request->input('status');

        $food->save();

        session()->flash('success_message', 'The food was successfully updated!');

        return redirect()->action('App\Http\Controllers\FoodController@show', ['id' => $food->id]);
    }

    private function validateForm($request)
    {
        $this->validate($request, [
            'description' => 'required|min:3',
            // 'user_id' => 'required',
        ], [
            'description.required' => 'What?? the food does not have a title??',
            'description.min' => 'Description should have at least 3 letters',
        ]);
    }
}