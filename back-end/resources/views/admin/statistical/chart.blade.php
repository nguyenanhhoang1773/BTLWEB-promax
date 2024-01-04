@extends('admin.master')
@section('title')
    Admin | Biểu đồ
@endsection

@section('title-page')
    Biểu đồ
@endsection

@section('content')
    <div class="content">
        @if (session('msg'))
            <div class="alert alert-success my-1 text-center">{{ session('msg') }}</div>
        @endif
        @if (session('error'))
            <div class="alert alert-danger my-5 text-center">{{ session('error') }}</div>
        @endif
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.8.0/chart.min.js" integrity="sha512-sW/w8s4RWTdFFSduOTGtk4isV1+190E/GghVffMA9XczdJ2MDzSzLEubKAs5h0wzgSJOQTRYyaz73L3d6RtJSg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    <i class="fas fa-chart-pie mr-1"></i>
                    Thống kê
                </h3>
                <div class="card-tools">
                    <ul class="nav nav-pills ml-auto">
                        <li class="nav-item">
                            <a class="nav-link active" href="#order-chart" data-toggle="tab">Đơn hàng</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#revenue-chart" data-toggle="tab">Doanh thu</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card-body">
                <div class="tab-content p-0">
                    <div class="chart tab-pane active" id="order-chart" style="position: relative; height: 450px;">
                        <canvas id="orderChart" height="220" style="height: 450px;"></canvas>
                    </div>
                    <script>
                        const ctx = document.getElementById('orderChart').getContext('2d');
                        const orderChart = new Chart(ctx,{
                            type: 'bar',
                            data:{
                                labels: {!! json_encode($labels) !!},
                                datasets: {!! json_encode($datasets) !!}
                            },
                        });
                    </script>
                    <div class="chart tab-pane" id="revenue-chart" style="position: relative; height: 450px;">
                        <canvas id="revenueChart" height="110" style="height: 450px;"></canvas>
                    </div>
                    <script>
                        const ctx2 = document.getElementById('revenueChart').getContext('2d');
                        const revenueChart = new Chart(ctx2,{
                            type: 'line',
                            data:{
                                labels: {!! json_encode($labelsRevenue) !!},
                                datasets: {!! json_encode($datasetsRevenue) !!}
                            },
                        });
                    </script>
                </div>
            </div>
        </div>
    </div>
@endsection
