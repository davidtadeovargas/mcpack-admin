@extends('layouts.app')

@section('content')

<div id="loginform">
    <div class="text-center p-t-20 p-b-20" style="background-color: #fff;border-radius: 3px;margin-bottom: 10px;">
        <!--<b class="logo-icon p-l-10">
            <img src="{{asset('assets/assets/images/logo-icon.png')}}" alt="homepage" class="light-logo" />
        </b>
        <span class="logo-text" style="color: #fff">
            {{config('app.name', 'Laravel')}}
        </span>-->
        <span class="db">
            <img src="{{asset('assets/assets/images/icons/logo-icon.png')}}" style="width: 200px;" alt="logo" />
         </span>
    </div>
    <!-- Form -->
    <form class="form-horizontal m-t-20" id="loginform" method="POST" action="{{ url('/login') }}">
        {{ csrf_field() }}
        <div class="row p-b-30">
            <div class="col-12">

                <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-success text-white" id="basic-addon1"><i class="ti-user"></i></span>
                    </div>
                    <input id="email" type="email" class="form-control form-control-lg" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" name="email" value="{{ old('email') }}" required>
                    @if ($errors->has('email'))
                        <span class="help-block">
                            <strong>{{ $errors->first('email') }}</strong>
                         </span>
                     @endif
                </div>
                </div>

                <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-warning text-white" id="basic-addon2"><i class="ti-pencil"></i></span>
                    </div>
                    <input id="password" type="password" name="password" class="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" required>
                    @if ($errors->has('password'))
                        <span class="help-block">
                            <strong>{{ $errors->first('password') }}</strong>
                         </span>
                     @endif
                </div>
                </div>
            </div>
        </div>
        <div class="row border-top border-secondary">
            <div class="col-12">
                <div class="form-group">
                    <br>
                    <div class="p-t-20">
                         <!--<button class="btn btn-info" id="to-recover" type="button"><i class="fa fa-lock m-r-5"></i> Lost password?</button>-->
                        <button class="btn float-right" style="background-color: #f1712e;color: #fff" type="submit">Inicar sesión</button>
                     </div>
                </div>
            </div>
         </div>
    </form>
</div>
                
<div id="recoverform">
     <div class="text-center">
         <span class="text-white">Enter your e-mail address below and we will send you instructions how to recover a password.</span>
    </div>
    <div class="row m-t-20">
        <!-- Form -->
        <form class="col-12" action="index.html">
            <!-- email -->
            <div class="input-group mb-3">
                 <div class="input-group-prepend">
                    <span class="input-group-text bg-danger text-white" id="basic-addon1"><i class="ti-email"></i></span>
                </div>
                <input type="text" class="form-control form-control-lg" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <!-- pwd -->
            <div class="row m-t-20 p-t-20 border-top border-secondary">
                <div class="col-12">
                     <a class="btn btn-success" href="#" id="to-login" name="action">Back To Login</a>
                    <button class="btn btn-info float-right" type="button" name="action">Recover</button>
                </div>
            </div>
        </form>
    </div>
</div>

@endsection
