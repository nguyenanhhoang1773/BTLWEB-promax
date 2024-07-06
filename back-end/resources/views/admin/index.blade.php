@extends('admin.master')
@section('title')
    Admin | Đơn hàng
@endsection

@section('title-page')
    Đơn hàng
@endsection

@section('content')
    <style>
        .xacnhan {
            font-weight: 600;

            background-color: #0D6EFD;
        }

        .xacnhan2 {
            font-weight: 600;
            background-color: #FFF200;
        }
    </style>
    <div class="container">
        @if (session('msg'))
            <div class="alert alert-success my-1 text-center">{{ session('msg') }}</div>
        @endif
        @if (session('error'))
            <div class="alert alert-danger my-5 text-center">{{ session('error') }}</div>
        @endif

        <table class="table table-hover">
            <thead>
                <tr>
                    <th width="5%">STT</th>
                    <th>Mã đơn hàng</th>
                    <th>Khách hàng </th>
                    <th>Ngày đặt</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                @forelse ($order as $item)
                    <tr>
                        <td>{{ $loop->iteration }}</td>
                        <td>2B-Technology -{{ $item->id }}</td>
                        <td>{{ $item->customer->name }}</td>
                        <td>{{ $item->created_at }}</td>
                        <td>
                            <form action="{{ route('cartdetail') }}" method="get">
                                @csrf
                                <input type="hidden" name="id" value="{{ $item->id }}">
                                <button class="btn btn-warning mb-1">Xem thông tin</button>

                            </form>

                        </td>
                        <td>
                            <form action="{{ route('confirm') }}" method="post">
                                @csrf
                                <input type="hidden" name="id" value="{{ $item->id }}">
                                @if ($item->state == 0)
                                    <button id="xacnhan" href="" class=" btn xacnhan">Chưa xác nhận</button>
                                @else
                                    <button id="xacnhan" href="" class=" btn xacnhan2">Đã xác nhận</button>
                                @endif
                            </form>
                        </td>
                    </tr>
                @empty
                    <strong class="">Không có đơn hàng nào !!!</strong>
                @endforelse
            </tbody>
        </table>
        {{ $order->links() }}
    </div>
@endsection
