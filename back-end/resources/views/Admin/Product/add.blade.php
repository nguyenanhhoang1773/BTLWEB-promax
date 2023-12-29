@extends('Admin.User.main')

@section('content')

<form  action=""  method="POST" enctype="multipart/form-data">
    @csrf
    <div class="card-body">

      <div class="form-group">
        <label >Chọn danh mục</label>
        <select name="category_id" id="" class="form-control">
            <option value="">Chọn danh mục</option>
            @if ($getCategory)
                @foreach ($getCategory as $value)
                    <option value="{{$value->id}}">{{$value->name}}</option>
                @endforeach
            @endif
        </select>
      </div>

      <div class="form-group">
        <label >Tên sản phẩm</label>
        <input type="text" class="form-control" value="{{old('product_name')}}" name="product_name" id="" placeholder="Hãy nhập tên sản phẩm">
      </div>

      <div class="form-group">
        <label >Mô tả chi tiết</label>
        <textarea id="editor" class="form-control" name="description"  >{{old('description')}}</textarea>
      </div>

      <div class="form-group">
        <label >Giá sản phẩm <sub>(VND)</sub></label>
        <input type="text" value="{{old('price')}}" class="form-control" name="price" id="" placeholder="Hãy nhập tên giá sản phẩm">
      </div>

      <div class="form-group">
        <label >Giá Giảm Giá <sub>(VND)</sub></label>
        <input type="text" value="{{old('sale_price')}}" class="form-control" name="sale_price" id="" placeholder="Hãy nhập tên giá gốc sản phẩm">
      </div>

      <div class="form-group">
        <label >Tên slug</label>
        <input type="text" class="form-control" value="{{old('slug')}}" name="slug" id="" placeholder=" ">
      </div>

      <div class="form-group">
        <label >Chọn ảnh</label>
        <input type="file" class="form-control" name="image_url" id="" multiple="multiple">
      </div>

    </div>
    <div class="card-footer">
      <button type="submit" class="btn btn-primary">Tạo sản phẩm</button>
    </div>
   
</form>
@endsection

@section('footer')

@endsection


    
      {{-- <div class="form-group">

        <label for="">Kích Hoạt</label>
        <div class="form-check">
          <input class="form-check-input" id="active" type="radio" name="active" value="1" checked="">
          <label for="active" class="form-check-label">Có</label>
        </div>

        <div class="form-check">
          <input class="form-check-input" id="no_active" type="radio" name="active" >
          <label for="no_active" class="form-check-label">Không</label>
        </div>
        
      </div> --}}