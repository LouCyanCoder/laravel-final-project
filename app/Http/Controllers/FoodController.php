<?php

namespace App\Http\Controllers;

use App\Models\Food;
use Illuminate\Http\Request;

class FoodController extends Controller
{
    public function index(Request $request)
    {
        $searchString = $request->input('search');
        $food = Food::where('title', 'like', '%' . $searchString . '%')->get();

        return view('food/index', compact('food'));
    }

    public function create()
    {
        $food = new Food();
      

        return view('forms/foodForm', compact('food'));
    }

    public function store(Request $request)
    {
        $food = new Food();

        $this->validateForm($request);

        $food->address   = $request->input('address');
        $food->name   = $request->input('name');
        $food->description   = $request->input('description');
        $food->day   = $request->input('day');
        $food->status   = $request->input('status');

        $food->save();

        session()->flash('success_message', 'The food was successfully saved!');

        return redirect()->action('App\Http\Controllers\FoodController@index');
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
            'title' => 'required|min:3',
            'category_id' => 'required',
        ], [
            'title.required' => 'What?? the food does not have a title??',
            'title.min' => 'Title should have at least 3 letters',
        ]);
    }
}