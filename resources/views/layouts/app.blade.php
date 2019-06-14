<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" type="image/png" sizes="16x16" href="{{asset('images/iconos/icon.png')}}">
    <title>{{ config('app.name', 'Laravel') }} Login</title>
    <link href="{{asset('assets/dist/css/style.min.css')}}" rel="stylesheet">
</head>

<body>
    <div class="main-wrapper">

        <div class="preloader">
            <div class="lds-ripple">
                <div class="lds-pos"></div>
                <div class="lds-pos"></div>
            </div>
        </div>

        <div class="auth-wrapper d-flex no-block justify-content-center align-items-center bg-dark">
            <div class="auth-box bg-dark border-top border-secondary">
                @yield('content')
            </div>
        </div>

    </div>

    <script src="{{asset('assets/assets/libs/jquery/dist/jquery.min.js')}}"></script>
    <script src="{{asset('assets/assets/libs/popper.js/dist/umd/popper.min.js')}}"></script>
    <script src="{{asset('assets/assets/libs/bootstrap/dist/js/bootstrap.min.js')}}"></script>
    <script>

    $('[data-toggle="tooltip"]').tooltip();
    $(".preloader").fadeOut();
    // ============================================================== 
    // Login and Recover Password 
    // ============================================================== 
    $('#to-recover').on("click", function() {
        $("#loginform").slideUp();
        $("#recoverform").fadeIn();
    });
    $('#to-login').click(function(){
        
        $("#recoverform").hide();
        $("#loginform").fadeIn();
    });
    </script>

</body>

</html>