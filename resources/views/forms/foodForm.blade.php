
    @include('components.header')

    <form action="{{ route('food') }}" method="post">
 
        @csrf
        
        <h1>Food offer</h1>

         {{-- $table->foreignId('user_id')->unique();
            $table->string('address')->nullable();
            $table->string('name')->nullable();
            $table->string('description')->nullable();
            $table->string('day')->nullable();
            $table->enum('status', ['open','limited','closed','on demand']); --}}
        <div class="">
        <label for="">Name</label><br>
        <input
            type="text"
            name="name"
            value=""
        >
        </div>
        
        <div class="">
        <label for="">Address</label><br>
        <input
            type="text"
            name="address"
            value=""
        >
        </div>



        <div class="">
        <label for="description">Description:</label><br>
        <textarea name="description" value="" id="" cols="30" rows="10"></textarea>
        </div>

        <div class="">
        <label for="day">Day:</label>
        <input type="date" name="day">
        </div>

        <div class="">

            <label for="status">Please select the status of the offer</label><br>
            <select for="status">
                <option value="open">Open</option>               
                <option value="closed">Closed</option>
                <option value="on_demand">On demand</option>
            </select>
        <br>
        

        <button type="submit">Confirm offer</button>
    </form>

    @include('components.footer')
    
