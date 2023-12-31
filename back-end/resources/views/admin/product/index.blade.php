@extends('admin.master')
@section('title')
    Admin | Danh sách sản phẩm
@endsection

@section('title-page')
    Danh sách sản phẩm
@endsection

@section('content')
    <div class="content">


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
                    <th width="20%">Tên SP</th>
                    <th>Giá</th>
                    <th>Giá KM</th>
                    <th width="10%">Danh mục</th>
                    <th>Ảnh</th>
                    <th>Ngày tạo</th>
                    <th>Edit</th>
                    <th>Update</th>
                </tr>
            </thead>
            <tbody>
                @forelse ($products as $item)
                    <tr>
                        {{-- @php
                            //dd($item->category->name);
                        @endphp --}}
                        <td>{{ $loop->iteration }}</td>
                        <td width="25%">{{ $item->name }}</td>
                        <td>{{ number_format($item->price) }}</td>
                        <td>{{ number_format($item->sale_price) }}</td>
                        <td>{{ $item->category->name }}</td>
                        <td>
                            <img src="{{ asset('storage/images') }}/{{ $item->image }}" alt="" width="150px"
                                style="height: 100px;">
                            {{-- <img src="http://127.0.0.1:8000/storage/images/Dan-Piano-dien-Yamaha-Clavinova-CSP-170B.jpg" alt="" width="150px"
                                style="height: 100px;"> --}}
                        </td>
                        <td>{{ $item->created_at }}</td>



                        <td><a href="{{ route('product.edit', $item) }}" class="btn btn-info">sửa</a></td>
                        <td>
                            <form action="{{ route('product.destroy', $item) }}" method="POST">
                                @method('DELETE')
                                @csrf
                                <button type="submit" onclick="return confirm('Do you want delete this product ?')"
                                    class="btn btn-danger">xóa</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <strong class="">Không tìm thấy sản phẩm</strong>
                @endforelse
            </tbody>
        </table>

        {{ $products->appends(request()->all())->links() }}

    </div>
@endsection
