<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
</head>
<body>
    @include('components.header')

    <form action="{{ route('login') }}" method="post" class="offer_form">

        @csrf
        <h2>Login</h2>
        
        <label for="">Email:</label><br>
        <input type="email" name="email" value="">
        <br>
        <br>
        
        <label for="">Password:</label><br>
        <input type="password" name="password" value="">
        <br>
        <br>
        
        <button>Login</button>
        
    </form>

    @include('components.footer')
</body>
</html>
