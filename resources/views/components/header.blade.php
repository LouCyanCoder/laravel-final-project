@extends('layouts.app')

<header>
    <div class="header__logo">
        <a href="./" title="Home Page"><img src="../images/wc_logo_small_v2.png.png" class="header__logo--whocares"/></a>
        <h2>Who Cares?</h2>

    </div>
    
        <nav class="header__nav">
            <ul>
                <li><a href="./">Home</a></li>
                <li><a href="./contact">Contact</a></li>
                <li><a href="./aboutus">About</a></li>       
                <li><a href="./map">Map</a></li>             
                
            @auth
                <li><a href="./dashboard">Dashboard</a></li>      
            <form action="{{ route('logout') }}" method="post">
                        
                @csrf
                        
                <li><button class="logout__button">Logout</button></li>
                        
            </form>
                
            @endauth
                
            @guest                
                <li><a href="{{ route('login') }}">Login</a></li>
                <li><a href="{{ route('register') }}">Register</a></li>               
             @endguest
            </ul>
        </nav>

</header>