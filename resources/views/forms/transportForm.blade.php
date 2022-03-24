<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Transport Form</title>
</head>
<body>

    @include('components.header')

    <form action="{{ route('accommodation') }}" method="post">
 
        @csrf
        
        <h1>Transportation Form</h1>

        <label for="">Location From</label><br>
        <input type="text" name="location_from" value="">
        <br>

        <label for="">Destination</label><br>
        <input type="text" name="destination" value="">
        <br>
    
        <label for="">Date</label><br>
        <input type="date" name="date" value="">
        <br>

        <label for="">Contact Person</label><br>
        <input type="text" name="contact_person" value="">
        <br>

        <label for="">Contact Info</label><br>
        <input type="text" name="contact_info" value="">
        <br>

        <label for="">Max Person</label><br>
        <input type="number" name="max_person" value="">
        <br>

        <label for="">Status</label><br>
        <select name="status">
            <option value="open">Open</option>
            <option value="closed">Closed</option>   
            <option value="on_demand">On Demand</option>
        </select>
        <br>
        <br>

        <button>Apply</button>
    </form>

    @include('components.footer')
    
</body>
</html>
