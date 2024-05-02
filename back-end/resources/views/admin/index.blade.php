@extends('admin.master')
@section('title')
    Admin | Đơn hàng
@endsection

@section('title-page')
    Đơn hàng ngày hôm nay
@endsection

@section('content')
    <div class="container">
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
                        <td>4hSome-{{ $item->id }}</td>
                        <td>{{ $item->customer->name }}</td>
                        <td>{{ $item->created_at }}</td>
                        <td>
                            <form action="{{ route('cartdetail') }}" method="get">
                                @csrf
                                <input type="hidden" name="id" value="{{ $item->id }}">
                                <button class="btn btn-warning">xem thông tin</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <strong class="">Không tìm thấy sản phẩm</strong>
                @endforelse
            </tbody>
        </table>
        {{ $order->links() }}
    </div>
@endsection
