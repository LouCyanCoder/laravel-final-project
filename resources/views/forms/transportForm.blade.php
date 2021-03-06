
    @include('components.header')

    <form action="{{ route('transport') }}" method="post" class="offer_form">
 
        @csrf
        
        <h2>Transportation Form</h2>

        <label for="location_from">Location From</label>
        <br>
        <input type="text" name="location_from" value="">
        <br>
        <br>

        <label for="destination">Destination</label><br>
        <input type="text" name="destination" value="">
        <br>
        <br>
    
        <label for="date">Date</label><br>
        <input type="date" name="date" value="">
        <br>
        <br>

        <label for="max_person">Max Person</label><br>
        <input type="number" name="max_person" value="">
        <br>
        <br>

        <label for="status">Select the status of the offer</label><br>
        <select id="status" name="status">
            <option value="open">Open</option>
            <option value="closed">Closed</option>   
            <option value="on_demand">On Demand</option>
        </select>
        <br>
        <br>

        <button type="submit" class="confirm">Confirm offer</button>
    </form>

    @include('components.footer')
    

