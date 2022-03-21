@extends('layouts.app')

<header>
    <div class="header__logo">
        <img src="../images/wc_logo_small.png" />
        <h2>Who Cares?</h2>
    </div>
    
        <nav class="header__nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>                    
                
            @auth
                        
            <form action="{{ route('logout') }}" method="post">
                        
                @csrf
                        
                <li><button>Logout</button></li>
                        
            </form>
                
            @endauth
                
            @guest                
                <li><a href="{{ route('login') }}">Login</a></li>
                <li><a href="{{ route('register') }}">Register</a></li>               
             @endguest
            </ul>
        </nav>

</header>