<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Accomodation form</title>
</head>
<body>

    @include('components.header')

    <form action="{{ route('accommodation') }}" method="post">
 
        @csrf
        
        <h1>Fill your accomodation info</h1>

        <label for="">Adress: </label><br>
        <input type="text" name="area_adress" value="">
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
        <input type="number" name="start_date" value="">
        <br>

        <label for="">Untill: </label><br>
        <input type="number" name="end_date" value="">
        <br>

        <label for="">Status of his/her offer: </label><br>
        <select name="status">
            <option value="open">open</option>
            <option value="closed">Closed</option>
            <option value="on_demand">On demand</option>
        </select>
        <br>
        <br>

        <button>Create accomodation offer</button>

    </form>

    @include('components.footer')
    
</body>
</html>
