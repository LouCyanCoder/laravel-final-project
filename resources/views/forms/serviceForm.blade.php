<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Register</title>
</head>
<body>

    @include('components.header')

    <form action="{{ route('register') }}" method="post">
 
        @csrf
        
        <h1>Post a service offer</h1>

        <select for="name">Select the type of service you would like to provide.<br>
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



        <button>Confirm offer</button>
    </form>

    @include('components.footer')
    
</body>
</html>
