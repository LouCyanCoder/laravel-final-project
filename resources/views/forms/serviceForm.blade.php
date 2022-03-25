

    @include('components.header')

    <form action="{{ route('service') }}" method="post">
 
        @csrf
        
        <h1>Post a service offer</h1>

        <label for="name">Select the type of service you would like to provide</label><br>
        <select id="name" name="name">
          <option value="law_service">Law services</option>
          <option value="translator">Translator</option>
          <option value="psychology_psychotherapy">Psychology & Psychotherapy</option>
          <option value="administration">Administration</option>
          <option value="education_mentoring">Education & mentoring</option>
        </select>
        
        <br>
        
        <label for="description">Description:</label><br>
        <textarea name="description" value="" id="" cols="30" rows="10"></textarea>
        <br>
        <br>

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
    
