
    @include('components.header')


    <form action="{{ route('accommodation') }}" method="post">
 
        @csrf
        
        <h1 class="form__heading">Fill your accommodation info</h1>

        <label for="area_address">Address: </label><br>
        <input type="text" name="area_address" value="">
        <br>

        <label for="max_person">Max persons: </label><br>
        <input type="number" name="max_person" value="">
        <br>

        <label for="accommodation">Type of Accommodation</label>
        <select name="type">
            <option value="flat">Flat</option>
            <option value="house">House</option>
            <option value="room">Room</option>
            <option value="bed">Bed</option>
            <option value="couch">Couch</option>
        </select>
        <br>
        
        <label for="pet_friendly">Pet friendly?</label><br>
        <select name="pet_friendly">
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
        <br>
    
        <label for="description">Description of the offer: </label><br>
        <input type="text" name="description" value="">
        <br>

        <label for="start_date">From: </label><br>
        <input type="date" name="start_date" value="">
        <br>

        <label for="end_date">Until: </label><br>
        <input type="date" name="end_date" value="">
        <br>

        <label for="status">Status of the offer: </label><br>
        <select id="status" name="status">
            <option value="open">Open</option>
            <option value="closed">Closed</option>
            <option value="on_demand">On demand</option>
        </select>
        <br>
        <br>

        <button type="submit">Confirm offer</button>

    </form>

    @include('components.footer')
    
