<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @if (!empty($title))
        <title>{{ $title }}</title>
    @endif


    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{ asset('assets/plugins/fontawesome-free/css/all.min.css') }}">
    <!-- icheck bootstrap -->
    <link rel="stylesheet" href="{{ asset('assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css') }}">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{ asset('assets/dist/css/adminlte.min.css') }}">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <script src="https://cdn.ckeditor.com/ckeditor5/40.1.0/classic/ckeditor.js"></script>
</head>

<body class="hold-transition login-page">
    <div class="login-box">
        <div class="login-logo">
            <a href=""><b>Đăng nhập</b></a>
        </div>
        <div class="card">
            @if (session('msg'))
                <div class="alert alert-success text-center"> {{ session('msg') }}</div>
            @endif
            @if (session('error'))
                <div class="alert alert-danger text-center"> <strong>{{ session('error') }}</strong></div>
            @endif
            <div class="card-body login-card-body">
                <p class="login-box-msg">Chào mừng admin quay trở lại</p>

                <form action="" method="POST">
                    @csrf
                    <div class="input-group mb-3">
                        <input type="text" name="email" class="form-control" placeholder="Email"
                            value="{{ old('email') }}">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                        @error('email')
                    <div class="text-danger">{{$message}}</div>
                    @enderror
                    </div>
                    
                    <div class="input-group mb-3">
                        <input type="password" name="password" class="form-control" placeholder="Password"
                            value="{{ old('password') }}">

                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    @error('password')
                    <span class="text-danger">{{$message}}</span>
                    @enderror

                    <div class="">
                        <button type="submit" class="btn btn-primary btn-block">Đăng nhập</button>
                    </div>
                    <!-- /.col -->
                </form>

            </div>
        </div>
        <!-- /.login-box -->
        {{-- 
@include('Admin.User.footer') --}}
        <script src="{{ asset('assets/plugins/jquery/jquery.min.js') }}"></script>
        <!-- Bootstrap 4 -->
        <script src="{{ asset('assets/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
        <!-- AdminLTE App -->
        <script src="{{ asset('assets/dist/js/adminlte.min.js') }}"></script>
</body>

</html>
