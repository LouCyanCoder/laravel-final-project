
    @include('components.header')

    <form action="{{ action('FoodController@store') }}" method="post">
 
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
        <br>

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
<<<<<<< HEAD
            <label for="status">Please select the status of the offer</label><br>
            <select for="status">
=======
            <label>Status:</label>
            <select for="name">
>>>>>>> ekin
                <option value="open">open</option>
                <option value="closed">closed</option>
                <option value="on_demand">on demand</option>
            </select>
        <br>
        <br>

        <button>Confirm offer</button>
    </form>

    @include('components.footer')
    
