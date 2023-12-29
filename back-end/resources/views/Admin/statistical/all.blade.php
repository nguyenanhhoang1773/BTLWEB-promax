@extends('admin.master')
@section('title')
    Admin | Doanh thu
@endsection

@section('title-page')
    Doanh thu bán sản phẩm  
@endsection

@section('content')
    <div class="content">


        @if (session('msg'))
            <div class="alert alert-success my-1 text-center">{{ session('msg') }}</div>
        @endif
        @if (session('error'))
            <div class="alert alert-danger my-5 text-center">{{ session('error') }}</div>
        @endif

        <table class="table table table-hover text-center">
            <thead>
                <tr>
                    <th width="5%">Mã đơn hàng</th>
                    <th width="30%">Loại sản phẩm</th>
                    <th width="10%">Số lượng bán ra</th>
                    <th width="15%">Tiền bán sản phẩm</th>
                    <th width="10%">Ngày bán</th>
                </tr>
            </thead>
            <tbody>
                @php
                    $totalMoney = 0;
                    $totalProduct = 0;
                @endphp
                @forelse ($orders as $item)
                    @php

                        $totalMoney = $totalMoney + $item->total_amount;
                    @endphp
                    @foreach ($item->orderDetails as $items)
                        <tr>
                            <td>{{ $items->id }}</td>
                            <td>{{ $items->product->name }}</td>
                            <td>x{{ $items->quantity }}</td>
                            <td>{{ number_format($items->price * $items->quantity) }}</td>
                            <td>{{ $items->created_at }}</td>
                        </tr>
                        @php
                            $totalProduct = $totalProduct + $items->quantity;
                        @endphp
                    @endforeach
                @empty
                    <strong class="">Doanh thu không tồn tại</strong>
                @endforelse
                <tr>
                    <td colspan="3" class="text-right"><strong>Tổng: </strong> <br>{{ number_format($totalProduct) }}
                    </td>
                    <td class="text-center"><strong>Tổng doanh thu: </strong>{{ number_format($totalMoney) }}</td>
                    <td><a href="" class="btn btn-primary">Quay lại</a></td>
                </tr>
            </tbody>
        </table>
    </div>
@endsection
