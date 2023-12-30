@extends('admin.master')
@section('title')
Admin | Danh sách tài khoản
@endsection
@section('title-page')
Dánh sách tài khoản 
@endsection


@section('content')
    <div class="container">
        @if (session('msg'))
        <div class="alert alert-success text-center">{{session('msg')}}</div>   
        @endif
        @if (session('error'))
        <div class="alert alert-danger text-center">{{session('error')}}</div>   
        @endif
      
        <table class="table table-hover">
          
          <thead>
              <tr>
                  <th width="5%">STT</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Thời gian tạo</th>
                  
                  <th width="5%">Delete</th>
              </tr>
          </thead>
          @forelse ($user as $item)
          <tbody>
            
            <tr>
              
              <td>{{$loop->iteration}}</td>
              <td>{{$item->name}}</td>
              <td>{{$item->email}}</td>            
              <td>{{$item->created_at}}</td>            
                         
              <td> 
                <form action="{{route('accountuser.destroy',$item->id)}}" method="POST">
                  @method('DELETE')
                  @csrf
              <button type="submit"  onclick="return confirm('Do you want delete User ?')" class="btn btn-danger">xóa</button>      
              </form></td>  
          </tr>
        </tbody>
        @empty
                <strong class="">Người dùng không tồn tại</strong>
            @endforelse
      </table>  
          {{$user->appends(request()->all())->links()}}
    </div>
@endsection






 
