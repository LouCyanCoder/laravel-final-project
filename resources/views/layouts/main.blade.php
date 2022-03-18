<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Who cares ?</title>
</head>
<body>
  <div>
        @include('components.header')

        <div id="root"></div>
        <div id="root1"></div>
        <div id="root2"></div>


        @include('components.footer')
    
        @yield('content')

        <script src="{{mix('js/Landing.js')}}"></script>
        <script src="{{mix('js/Features.js')}}"></script>
        <script src="{{mix('js/Contact.js')}}"></script>
        

  </div>


</body>
</html>