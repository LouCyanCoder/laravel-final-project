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

    <form action="{{ route('register') }}" method="post" class="offer_form">
 
        @csrf
        
        <h2>Registration form</h2>

        <label for="">Email</label><br>
        <input type="email" name="email" value="">
        <br>

        <label for="">Username</label><br>
        <input type="text" name="username" value="">
        <br>

        <label for="">Password</label><br>
        <input type="password" name="password" value="">
        <br>
    
        <label for="">Confirm password</label><br>
        <input type="password" name="password_confirmation" value="">
        <br>

        <label for="">Name</label><br>
        <input type="text" name="name" value="">
        <br>

        <label for="">Address</label><br>
        <input type="text" name="address" value="">
        <br>

        <label for="">Phone</label><br>
        <input type="number" name="phone_number" value="">
        <br>

        <label for="">Facebook profile</label><br>
        <input type="text" name="facebook_link" value="">
        <br>

        <label for="">Telegram username</label><br>
        <input type="text" placeholder="@telegram_username" name="telegram_link" value="">
        <br>
        <br>

        <button  class="confirm">Register</button>
    </form>

    @include('components.footer')
    
</body>
</html>
