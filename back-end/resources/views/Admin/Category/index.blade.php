@extends('admin.master')
@section('title')
    Admin | Danh mục
@endsection

@section('title-page')
    Danh mục sản phẩm
@endsection

@section('content')
    <div class="content">
        {{-- <a href="{{route('category.create')}}" class="btn btn-success">Thêm danh mục mới +</a> --}}

        @if (session('msg'))
            <div class="alert alert-success text-center">{{ session('msg') }}</div>
        @endif
        <table class="table table-hover">
            <thead>
                <tr>
                    <th width="5%">STT</th>
                    <th>Tên danh mục</th>
                    <th>parent-id</th>
                    <th>Thời gian tạo</th>
                    <th width="15%">Trạng thái</th>
                    <th colspan="2" width="5%"></th>
                </tr>
            </thead>
            <tbody>
                @forelse ($categories as $item)
                    <tr>

                        <td>{{ $loop->iteration }}</td>
                        <td>{{ $item->name }}</td>
                        <td>{{ $item->parent_id }}</td>
                        <td>{{ $item->created_at }}</td>
                        <td> {!! $item->status ? '<span class="btn btn-success"> hiện  </span>' : '<span class="btn btn-danger"> ẩn </span>' !!} </td>
                        <td><a href="{{ route('category.edit', $item) }}" class="btn btn-info">sửa</a></td>
                        <td>
                            <form action="{{ route('category.destroy', $item) }}" method="POST">
                                @method('DELETE')
                                @csrf
                                <button type="submit" onclick="return confirm('Do you want delete User ?')"
                                    class="btn btn-danger">xóa</button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <span>don't exist data</span>
                @endforelse
            </tbody>
        </table>

        {{ $categories->links() }}
    </div>
@endsection
