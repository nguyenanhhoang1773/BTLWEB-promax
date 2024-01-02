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
    <style>
        body {
            background: url('https://wallpaperaccess.com/full/2589217.jpg');
            background-size: cover;
            background-repeat: no-repeat;
        }

        .login-card-body {
            border-radius: 20px;
            background-color: rgba(241, 234, 234, 0.4);
        }
    </style>
</head>

<body class="hold-transition login-page">
    <div class="login-box">

        <div class="card">

            <div class="card-body login-card-body">
                <div class="login-logo">
                    <h2>Đăng nhập</h2>
                </div>
                @if (session('msg'))
                    <div class="alert alert-success text-center fs-1"> {{ session('msg') }}</div>
                @endif
                @if (session('error'))
                    <div class="alert alert-danger text-center"> <strong>{{ session('error') }}</strong></div>
                @endif
                <p class="login-box-msg">Chào mừng admin quay trở lại</p>

                <form action="" method="POST">
                    @csrf
                    <div class=" mb-3">
                        <div class="input_p" style="position: relative;">
                            <input type="text" name="email" class="form-control" placeholder="Email"
                                value="{{ old('email') }}">
                            <span class="fas fa-envelope"
                                style="position: absolute; right: 7px;top: 9px; font-size: 20px"></span>
                        </div>
                        @error('email')
                            <div class="text-danger">{{ $message }}</div>
                        @enderror
                    </div>

                    <div class=" mb-3">

                        <div class="input_p" style="position: relative;">
                            <input type="password" name="password" class="form-control" placeholder="Password"
                                value="{{ old('password') }}">
                            <span class="fas fa-lock"
                                style="position: absolute; right: 7px;top: 9px; font-size: 20px"></span>
                        </div>
                        @error('password')
                            <span class="text-danger">{{ $message }}</span>
                        @enderror
                    </div>
                    <div class="">
                        <button type="submit" class="btn btn-primary btn-block">Đăng nhập</button>
                    </div>

                </form>

            </div>
        </div>
    </div>

    <script src="{{ asset('assets/plugins/jquery/jquery.min.js') }}"></script>

    <script src="{{ asset('assets/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>

    <script src="{{ asset('assets/dist/js/adminlte.min.js') }}"></script>
</body>

</html>
