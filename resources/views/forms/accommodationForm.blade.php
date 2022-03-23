<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Accommodation form</title>
</head>
<body>

    @include('components.header')

    <p>Here should be a form</p>

    <form action="{{ action('AccommodationController@store') }}" method="post">
 
        @csrf
        
        <h1 class="form__heading">Fill your accommodation info</h1>

        <label for="">Address: </label><br>
        <input type="text" name="area_address" value="">
        <br>

        <label for="">Max persons: </label><br>
        <input type="number" name="max_person" value="">
        <br>

        <label for="">Pet friendly?</label><br>
        <select name="pet_friendly">
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
        <br>
    
        <label for="">Description of the offer: </label><br>
        <input type="text" name="description" value="">
        <br>

        <label for="">From: </label><br>
        <input type="date" name="start_date" value="">
        <br>

        <label for="">Until: </label><br>
        <input type="date" name="end_date" value="">
        <br>

        <label for="">Status of the offer: </label><br>
        <select name="status">
            <option value="open">open</option>
            <option value="closed">Closed</option>
            <option value="on_demand">On demand</option>
        </select>
        <br>
        <br>

        <button type="submit">Create accomodation offer</button>

    </form>

    @include('components.footer')
    
</body>
</html>
