@extends('Admin.User.main')

@section('content')
<table class="table table-bordered">
    <thead>
      <tr>
        <th width="5%">#</th>
        <th width="5%">Id</th>
        <th width="5%">Name</th>
        <th width="10%">Email</th>
        <th width="5%">Phone</th>
        <th width="15%">Password </th>
        <th width="5%">Create_at</th>
        <th width="5%">Update_at</th>
        <th width="5%">Sửa</th>
        <th width="5%">Xóa</th>
      </tr>
    </thead>
    <tbody>
       @if (!empty($dataShow))
            @foreach ($dataShow as $key =>$item)
        <tr>
            <td>{{$key+1}}</td>
            <td>{{$item->id}}</td>
            <td>{{$item->name}}</td>
            <td>{{$item->email}}</td>
            <td>{{$item->phone}}</td>
            <td>{{$item->password}}</td>
            <td>{{$item->created_at}}</td>
            <td>{{$item->updated_at}}</td> 
            <td>
              <a href="#"class="btn btn-primary">
                <i class="fa-solid fa-pen-to-square"></i>
              </a>
            </td>
            <td>
              <a href="#" class="btn btn-warning">
                <i class="fa-solid fa-trash"></i>
              </a>
            </td>
        </tr>
            @endforeach
       @endif
        
    </tbody>
  </table>
@endsection

