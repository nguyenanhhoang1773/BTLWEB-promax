<aside class="main-sidebar sidebar-dark-primary elevation-4 fixed-top" style="position: fixed;">
    <!-- Brand Logo -->
    <a href="" class="brand-link">
        <strong>Admin </strong>
        <span class="brand-text font-weight-light">{{ Auth::User()->name }}</span>
    </a>


    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img src="{{ asset('assets') }}/dist/img/user2-160x160.jpg" class="img-circle elevation-2"
                    alt="User Image">
            </div>
            <div class="info">
                <a href="{{ route('logoutAcc') }}">Đăng xuất</a>
            </div>
        </div>
        <!-- SidebarSearch Form -->
        <form action="">

            <div class="input-group">
                <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"
                    name="key">
                <div class="input-group-append">
                    <button class="btn btn-sidebar">
                        <i class="fas fa-search fa-fw"></i>
                    </button>
                </div>
            </div>

        </form>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                data-accordion="false">

                <li class="nav-item">
                    {{-- <a href="{{ route('statistical.index') }}" class="nav-link"> --}}
                    <a href="" class="nav-link">
                        <i class="nav-icon fas fa-chart-pie"></i>
                        <p>
                            Thống kê
                            <i class="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('admin.index') }}" class="nav-link">
                           
                                <i class="far fa-circle nav-icon"></i>
                                <p>Đơn hàng</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('statistical.index') }}" class="nav-link">

                                <i class="far fa-circle nav-icon"></i>
                                <p>Doanh thu</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('statistical.chart') }}" class="nav-link">

                                <i class="far fa-circle nav-icon"></i>
                                <p>Biểu đồ</p>
                            </a>
                        </li>
                       
                    </ul>
                </li>
                <li class="nav-item">
                    {{-- <a href="{{ route('category.index') }}" class="nav-link"> --}}
                    <a href="" class="nav-link">
                        <i class="nav-icon fas fa-copy"></i>
                        <p>
                            Quản lý danh mục
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('category.index') }}" class="nav-link">
                            {{-- <a href="" class="nav-link"> --}}
                                <i class="far fa-circle nav-icon"></i>
                                <p>Danh mục</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('category.create') }}" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Thêm danh mục</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-edit"></i>
                        <p>
                            Quản lý sản phẩm
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('product.create') }}" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Thêm sản phẩm</p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{route('product.index') }}" class="nav-link">
                                <i class="far fa-circle nav-icon"></i>
                                <p>Danh sách sản phẩm</p>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-table"></i>
                        <p>
                            Quản lý tài khoản
                            <i class="fas fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="{{ route('accountuser.index') }}" class="nav-link">
                            {{-- <a href="" class="nav-link"> --}}
                                <i class="far fa-circle nav-icon"></i>
                                <p>Tài khoản người dùng</p>
                            </a>
                        </li>

                    </ul>
                </li>
            </ul>
        </nav>
    </div>

</aside>
