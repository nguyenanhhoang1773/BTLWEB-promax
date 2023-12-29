@extends('Admin.User.main')


@section('content')
<table class="table table-bordered">
    <thead>
      <tr>
        <th width="5%">#</th>
        <th width="5%">Id</th>
        <th width="15%">Category_Name</th>
        <th width="5%">Parent ID</th>
        <th width="5%">Create_at</th>
        <th width="5%">Update_at</th>
        <th width="5%">Sửa</th>
        <th width="5%">Xóa</th>
      </tr>
    </thead>
    <tbody>
       @if (!empty($listData))
            @foreach ($listData as $key =>$item)
            <tr>
                <td>{{$key+1}}</td>
            <td>{{$item->id}}</td>
            <td>{{$item->name}}</td>
            <td>{{$item->parent_id}}</td>
            <td>{{$item->created_at}}</td>
            <td>{{$item->updated_at}}</td>    
            <td>
              <a href="{{route('category.update',['id'=>$item->id])}}"class="btn btn-primary">
                <i class="fa-solid fa-pen-to-square"></i>
              </a>
            </td>
            <td>
              <a href="{{route('category.delete',['id'=>$item->id])}}" class="btn btn-warning"><i class="fa-solid fa-trash"></i>
              </a>
            </td>
            </tr>
            @endforeach
       @endif
        
    </tbody>
  </table>
@endsection

