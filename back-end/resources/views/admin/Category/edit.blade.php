@extends('admin.master')
@section('title')
Admin | Cập nhật
@endsection
@section('title-page')
Cập nhật
@endsection


@section('content')
    <div class="container">
        @if (session('msg'))
        <div class="alert alert-danger">{{session('msg')}}</div>   
        @endif
        <form action="{{route('category.update', $category)}}" method="POST" role="form" >
            @method('PUT')
            
            @csrf

            <div class="form-group">
                <label for="name">Tên danh mục:</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Nhập tên sản phẩm" value="{{$category->name}}">
                @error('name')
                    <span class="text-danger">{{$message}}</span>
                @enderror
            </div>

            <div class="form-group">
                <label for="category">Danh mục cha:</label>
                <select class="form-control" id="category" name="parent_id" >  
                         <option value="0">chọn danh mục</option>              
                    @foreach ($categories as $item)
                        <option value="{{$item->id}}" {{$category->parent_id == $item->id ? 'selected' : '0'}}>{{$item->name}}</option> 
                    @endforeach                
                </select>
            </div>
            <div class="form-group">
                <label for="category">Chọn trạng thái: </label>
                <div class="radio">
                   
                    <label for="" >
                        <input type="radio" name="status" {{$category->status ? 'checked' : ''}} value="0">
                        ẩn
                    </label> 
                    <label for="" >
                        <input type="radio" name="status" {{!$category->status ? 'checked' : ''}} value="1">
                        hiện 
                    </label>
                </div>
            </div>

          
            <input type="hidden" name="id" value="{{$category->id}}" >
            
            <button type="submit" class="btn btn-primary">xác nhận thay đổi</button>
            <a href="{{route('category.index')}}" class="btn btn-info">Quay lại</a>
        </form>
    </div>
@endsection