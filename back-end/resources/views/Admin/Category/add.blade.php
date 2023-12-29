@extends('Admin.User.main')

@section('content')

<form  action=""  method="POST">
    @csrf
    <div class="card-body">
      <div class="form-group">
        <label >Tên danh mục</label>
        <input type="text" class="form-control" name="name" id="" placeholder="Hãy nhập tên danh mục">
      </div>

      <div class="form-group">
        <label >Danh Mục</label>
       <select name="parent_id" id="" class="form-control">
            <option value="0">Danh Mục Cha</option>

            @if (!empty($parentid))
                @foreach ($parentid as $item)
                    <option value="{{$item->id}}">{{$item->name}}</option>
                @endforeach
            @endif

       </select>
      </div>

     
    </div>

    <div class="card-footer">
      <button type="submit" class="btn btn-primary">Tạo danh mục</button>
    </div>
   
</form>
@endsection

@section('footer')

@endsection