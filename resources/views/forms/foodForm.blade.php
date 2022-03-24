
    
    @include('components.header')

    <form action="{{ route('food') }}" method="post">
 
        @csrf
        
        <h1>Food offer</h1>

        <label for="name">Name</label><br />
        <input
            type="text"
            name="name"
            value=""
        />
        <br />


        <label for="address">Address</label><br>
        <input
            type="text"
            name="address"
            value=""
        />
        <br />
        
        <label for="description">Description:</label><br>
        <textarea name="description" value="" id="" cols="30" rows="10"></textarea>
        <br />

        <label for="day">Day</label><br>
        <input type="date" name="day" />
        <br />

        <label for="status">Select the status of the offer</label><br>
            <select id="status" name="status">
                <option value="open">Open</option>
                <option value="closed">Closed</option>
                <option value="on_demand">On demand</option>
            </select>
        <br />
        <br />
        <button type="submit">Confirm offer</button>
    </form>

    @include('components.footer')
    
</body>
</html>