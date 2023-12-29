@extends('Admin.User.main')

@section('content')

<form  action=""  method="POST">
    @csrf
    @foreach ($getId as $item)
    <div class="card-body">
        <div class="form-group">
          <label >Tên danh mục</label>
          
          <input type="text" value="{{$item->name}}" class="form-control" name="name" id="" placeholder="Hãy nhập tên danh mục">
        </div>

        <div class="form-group">
          <label >Danh Mục</label>
         <select name="parent_id" id="" class="form-control">
              <option value="0">Danh Mục Cha</option>
  
              @if (!empty($parentid))
                  @foreach ($parentid as $value)
                      <option value="{{$value->id}}" {{$item->parent_id == $value->id ? 'selected' : '' }}>{{$value->name}}</option>
                  @endforeach
              @endif
              
         </select>
        </div>
  
       
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
  
      </div>
    @endforeach

    <div class="card-footer">
      <button type="submit" class="btn btn-primary">Cập Nhật</button>
    </div>
   
</form>
@endsection

@section('footer')

@endsection