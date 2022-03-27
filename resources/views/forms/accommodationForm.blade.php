
    @include('components.header')


    <form action="{{ route('accommodation') }}" method="post" class="offer_form">
 
        @csrf
        
        <h2 class="form__heading">Fill your accommodation info</h2>

        <label for="area_address">Address: </label><br>
        <input type="text" name="area_address" value="">
        <br>

        <label for="max_person">Max persons: </label><br>
        <input type="number" name="max_person" value="">
        <br>
        <br>

        <label for="accommodation">Type of Accommodation</label>
        <br>
        <br>
        <select name="type">
            <option value="flat">Flat</option>
            <option value="house">House</option>
            <option value="room">Room</option>
            <option value="bed">Bed</option>
            <option value="couch">Couch</option>
        </select>
        <br>
        <br>
        
        <label for="pet_friendly">Pet friendly?</label><br>
        <select name="pet_friendly">
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
        <br>
        <br>
    
        <label for="description">Description of the offer</label><br>
        <input type="text" name="description" value="">
        <br>
        <br>

        <label for="start_date">From: </label><br>
        <input type="date" name="start_date" value="">
        <br>
        <br>

        <label for="end_date">Until: </label><br>
        <input type="date" name="end_date" value="">
        <br>
        <br>

        <label for="status">Select the status of the offer</label><br>
        <select id="status" name="status">
            <option value="open">Open</option>
            <option value="closed">Closed</option>
            <option value="on_demand">On demand</option>
        </select>
        <br>
        <br>

        <button type="submit" class="confirm">Confirm offer</button>

    </form>

    @include('components.footer')
    
