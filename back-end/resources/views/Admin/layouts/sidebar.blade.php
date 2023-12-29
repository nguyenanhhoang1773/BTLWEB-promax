<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="#" class="brand-link">
      <img src="{{asset('Admin/assets/dist/img/logogiaytron.png')}}" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <span class="brand-text font-weight-light">Shoe TT</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="{{asset('Admin/assets/dist/img/anhdaidien.JPG')}}" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          
          <a href="#" class="d-block">Trọng Tú</a>
        
        </div>
      </div>

      <!-- SidebarSearch Form -->
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Sidebar Menu -->
      {{-- Categroy --}}
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
     
               <li class="nav-item">
                <a href="#" class="nav-link">
                  {{-- <i class="nav-icon fas fa-tachometer-alt"></i> --}}
                  <i class="fa-solid fa-table"></i>
                  <p>
                    Category
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="{{route('category.create')}}" class="nav-link">
                      {{-- <i class="far fa-circle nav-icon"></i> --}}
                      <i class="fa-solid fa-plus"></i>
                      <p>Thêm danh mục</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="{{route('category.show')}}" class="nav-link">
                      {{-- <i class="far fa-circle nav-icon"></i> --}}
                      <i class="fa-solid fa-list"></i>
                      <p>Danh sách danh mục </p>
                    </a>
                  </li>
               
                </ul>
              </li>
        </ul>
      </nav>
      {{-- EndCategory --}}

      {{-- Product --}}
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
     
               <li class="nav-item">
                <a href="#" class="nav-link">
                  {{-- <i class="nav-icon fas fa-tachometer-alt"></i> --}}
                  <i class="fa-solid fa-cart-shopping"></i>
                  <p>
                    Product
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="{{route('product.create')}}" class="nav-link">
                      {{-- <i class="far fa-circle nav-icon"></i> --}}
                      <i class="fa-solid fa-plus"></i>
                      <p>Thêm Sản Phẩm</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      {{-- <i class="far fa-circle nav-icon"></i> --}}
                      <i class="fa-solid fa-list"></i>
                      <p>Danh sách sản phẩm </p>
                    </a>
                  </li>
               
                </ul>
              </li>
        </ul>
      </nav>
      {{-- endProduct --}}


      
{{-- User --}}
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
     
               <li class="nav-item">
                <a href="#" class="nav-link">
                  {{-- <i class="nav-icon fas fa-tachometer-alt"></i> --}}
                  <i class="fa-solid fa-user"></i>
                  <p>
                    Quản lý khách hàng
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      {{-- <i class="far fa-circle nav-icon"></i> --}}
                      <i class="fa-solid fa-plus"></i>
                      <p>Thêm tài khoản </p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      {{-- <i class="far fa-circle nav-icon"></i> --}}
                      <i class="fa-solid fa-list"></i>
                      <p>Danh sách khách hàng  </p>
                    </a>
                  </li>
               
                </ul>
              </li>
        </ul> 
      </nav>
      {{-- EndUser --}}
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>