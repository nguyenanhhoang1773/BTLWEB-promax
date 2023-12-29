@extends('Admin.User.main')

@section('content')
<style>
  a {
    a {
    text-decoration: none;
}
  }
</style>
<table class="table table-bordered">
    <thead>
      <tr>
        <th width="5%">#</th>
        <th width="5%">Id</th>
        <th width="5%">Category ID</th>
        <th width="15%">Product_Name</th>
        <th width="50%">Description</th>
        <th width="5%">Price</th>
        <th width="5%">Cost</th>
        <th width="10%">Ảnh gốc</th>
        <th width="5%">Thêm Size</th>
        <th width="5%">Thêm Màu</th>
        <th width="5%">Create_at</th>
        <th width="5%">Update_at</th>
        <th width="5%">Sửa</th>
        <th width="5%">Xóa</th>
      </tr>
    </thead>
    <tbody>
       @if (!empty($showData))
            @foreach ($showData as $key =>$item)
        <tr>
            <td>{{$key+1}}</td>
            <td>{{$item->id}}</td>
            <td>{{$item->category_id}}</td>
            <td>{{$item->product_name}}</td>
            <td>{!!$item->description!!}</td>
            <td>{{$item->price}}</td>
            <td>{{$item->price_nosale}}</td>
            <td><img style="height: 50px; object-fit: contain" src="{{asset('storage/'.$item->image_url)}}" alt="Error"></td>  
            <td><a href="{{route('admin.productsize.add',['product_id'=>$item->id])}}">Thêm size</a></td>
            <td><a href="{{route('admin.productcolor.add',['product_id'=>$item->id])}}">Thêm Màu</a></td>
            <td>{{$item->created_at}}</td>
            <td>{{$item->updated_at}}</td> 
            <td>
              <a href="{{route('admin.product.edit',['id'=>$item->id])}}"class="btn btn-primary">
                <i class="fa-solid fa-pen-to-square"></i>
              </a>
            </td>
            <td>
              <a href="{{route('admin.product.delete',['id'=>$item->id])}}" class="btn btn-warning">
                <i class="fa-solid fa-trash"></i>
              </a>
            </td>
        </tr>
            @endforeach
       @endif
        
    </tbody>
  </table>
@endsection

