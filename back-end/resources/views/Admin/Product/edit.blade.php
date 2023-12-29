@extends('Admin.User.main')

@section('content')

<form  action=""  method="POST" enctype="multipart/form-data">
    @csrf
    @if (!empty($getData))
        @foreach ($getData as $item)
        <div class="card-body">

            <div class="form-group">
              <label >Chọn danh mục</label>
              <select name="category_id" id="" class="form-control">
                  <option value="">Chọn danh mục</option>
                  @if ($getCategory)
                      @foreach ($getCategory as $value)
                          <option value="{{$value->id}}" {{$item->category_id == $value->id ? 'selected' : ''}}>{{$value->category_name}}</option>
                      @endforeach
                  @endif
              </select>
            </div>
      
            <div class="form-group">
              <label >Tên sản phẩm</label>
              <input type="text" value="{{$item->product_name}}" class="form-control" name="product_name" id="" placeholder="Hãy nhập tên sản phẩm">
            </div>
      
            <div class="form-group">
              <label >Mô tả chi tiết</label>
              <textarea id="editor"  class="form-control" name="description" >{{$item->description}}</textarea>
            </div>
      
            <div class="form-group">
              <label >Giá sản phẩm <sub>(VND)</sub></label>
              <input type="text" value="{{$item->price}}" class="form-control" name="price" id="" placeholder="Hãy nhập giá sản phẩm">
            </div>
            
            <div class="form-group">
              <label >Giá gốc <sub>(VND)</sub></label>
              <input type="text" value="{{$item->price_nosale}}" class="form-control" name="price_nosale" id="" placeholder="Hãy nhập giá gốc">
            </div>

            <div class="form-group">
              <label >Chọn ảnh</label>
              <input type="file" value="{{$item->image_url}}" class="form-control" name="image_url" id="" multiple="multiple">
            </div>
      
            {{-- <div class="form-group">
              <label >Danh Mục</label>
             <select name="parent_id" id="" class="form-control">
                  <option value="0">Danh Mục Cha</option>
      
                  @if (!empty($parentid))
                      @foreach ($parentid as $item)
                          <option value="{{$item->id}}">{{$item->category_name}}</option>
                      @endforeach
                  @endif
      
             </select>
            </div> --}}
          </div>
        @endforeach
    @endif
    <div class="card-footer">
      <button type="submit" class="btn btn-primary">Cập nhật</button>
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