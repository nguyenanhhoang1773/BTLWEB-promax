@extends('admin.master')
@section('title')
    Admin | thông tin khách hàng đặt hàng
@endsection

@section('title-page')
    Thông tin khách hàng đặt hàng
@endsection

@section('content')
    <style>
        .xacnhan {
            background-color: #0D6EFD;
        }

        .xacnhan2 {
            background-color: #FFF200;
        }
    </style>
    <div class="container">

        @foreach ($orders as $item)
            <div class="row">
                <div class="col-sm-4">
                    <p><strong>Khách hàng:</strong> {{ $item->customer->name }}</p>
                    <p><strong>Email:</strong> {{ $item->customer->email }}</p>
                    <p><strong>Số điện thoại:</strong> {{ $item->phone }}</p>
                </div>
                <div class="col-sm-8">
                    <p><strong>Địa chỉ giao hàng:</strong> {{ $item->address }}</p>
                    <p><strong>Ghi chú:</strong> {{ $item->note }}</p>
                </div>
            </div>
        @endforeach
        
        <table class="table  table-hover"></strong>
            <thead>
                <tr>
                    <th width="5%">STT</th>
                    <th>Đơn hàng</th>
                    <th>Ảnh</th>
                    <th>Sản phẩm</th>
                    <th>Giá tiền </th>
                    <th>Số lượng </th>
                </tr>
            </thead>
            <tbody>

                @forelse ($orders as $item)
                    @foreach ($item->orderDetails as $items)
                        {{-- {{dd($items);}} --}}
                        <tr>
                            {{-- <td>{{$item->product->name}}</td> --}}
                            <td>{{ $loop->iteration }}</td>
                            <td width="40%">{{ $items->product->name }}</td>
                            <td width="10%"><img style="width: 70px;"
                                    src="{{ asset('storage/images') }}/{{ $items->product->image }}" alt=""></td>
                            <td>{{ $items->product->category->name }}</td>
                            <td>{{ $items->product->sale_price > 0 ? number_format($items->product->sale_price) : number_format($items->product->price) }}
                                vnđ</td>
                            <td>x{{ $items->quantity }}</td>
                        </tr>
                    @endforeach
                    <tr>
                        <td colspan="6" class="text-right">
                            <h5><button id="xacnhan" href="" class=" btn xacnhan">Chưa xác nhận</button></h5>  <h5><strong>Tổng tiền:</strong> {{ number_format($item->total_amount) }} vnđ </h5>
                        </td>
                    </tr>
                @empty
                    <strong class="">Không tìm thấy sản phẩm</strong>
                @endforelse
            </tbody>
        </table>

    </div>
    <script>
        var xacnhan = document.querySelector(".xacnhan");

        // Gán sự kiện click cho nút
        xacnhan.addEventListener("click", function() {
            xacnhan.classList.toggle("xacnhan2");
            if (xacnhan.classList.contains("xacnhan2")) {
                xacnhan.textContent = "Đã xác nhận";
            } else {
                xacnhan.textContent = "Chưa xác nhận";
            }
        });
    </script>
@endsection
