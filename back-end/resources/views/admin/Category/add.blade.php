@extends('admin.master')
@section('title')
Admin | Thêm Danh Mục
@endsection
@section('title-page')
Thêm danh mục
@endsection


@section('content')
    <div class="container">
        @if (session('msg'))
        <div class="alert alert-danger">{{session('msg')}}</div>   
        @endif
        <form action="{{route('category.store')}}" method="POST" role="form" >
            @csrf

            <div class="form-group">
                <label for="name">Tên danh mục:</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Nhập tên sản phẩm" value="{{old('name')}}">
                @error('name')
                    <span class="text-danger">{{$message}}</span>
                @enderror
            </div>

             <div class="form-group">
                <label for="category">Danh mục cha:</label>
                <select class="form-control" id="category" name="parent_id" >  
                         <option value="0">chọn danh mục</option>              
                  @php
                      showCategories($categories);
                  @endphp    
                </select>
            </div> 
            <div class="form-group">
                <label for="category">Chọn trạng thái: </label>
                <div class="radio">
                    <label for="" >
                        <input type="radio" name="status" checked="checked" value="0">
                       ẩn 
                    </label> 
                    <label for="" >
                        <input type="radio" name="status" checked="checked" value="1">
                        hiện 
                    </label>
                </div>
            </div>

          

            <button type="submit" class="btn btn-primary">Thêm danh mục</button>
            <a href="{{route('category.index')}}" class="btn btn-info">Quay lại</a>
        </form>
    </div>

@endsection

