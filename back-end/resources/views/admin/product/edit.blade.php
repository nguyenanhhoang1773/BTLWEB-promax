@extends('admin.master')
@section('title')
    Admin | sửa sản phẩm
@endsection
@section('title-page')
    Sửa sản phẩm
@endsection


@section('content')
    <div class="container">
        @if (session('msg'))
            <div class="alert alert-danger">{{ session('msg') }}</div>
        @endif

        <form action="{{ route('product.update', $product) }}" method="POST" role="form" enctype="multipart/form-data">
            @csrf
            @method('PUT')
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="">Tên sản phẩm:</label>
                        <input type="text" class="form-control" id="productName" name="name"
                            placeholder="Nhập tên sản phẩm" value="{{ $product->name }}" onkeyup="ChangeToSlug();">
                        @error('name')
                            <span class="text-danger">{{ $message }}</span>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label for="">Đường dẫn slug:</label>
                        <input type="text" class="form-control" id="slug" name="slug"
                            placeholder="Nhập tên sản phẩm" value="{{ $product->slug }}">
                        @error('slug')
                            <span class="text-danger">{{ $message }}</span>
                        @enderror
                    </div>
                    <div class="form-group">
                        <label for="price">Giá sản phẩm</label>
                        <input type="text" class="form-control" id="price" name="price"
                            placeholder="Nhập tên sản phẩm" value="{{ $product->price }}">
                        @error('price')
                            <span class="text-danger">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label for="sale_price">Giá khuyễn mãi:</label>
                        <input type="text" class="form-control" id="sale_price" name="sale_price"
                            placeholder="Nhập tên sản phẩm" value="{{ $product->sale_price }}">
                        @error('sale_price')
                            <span class="text-danger">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label for="category_id">Chọn danh mục:</label>
                        <select class="form-control" id="category_id" name="category_id">
                            <option value="20">chọn danh mục</option>
                            @php
                                showCategories($categories);
                            @endphp
                        </select>
                        @error('category_id')
                            <span class="text-danger">{{ $message }}</span>
                        @enderror
                    </div>
                    

                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label for="">Ảnh:</label>
                        <input type="file" class="" id="photo" name="photo"><br>
                        <img src="{{ asset('storage/images/') }}/{{ $product->image }}" alt="" width='100px'>
                    </div>
                    @error('photo')
                        <span class="text-danger">{{ $message }}</span>
                    @enderror
                    <div class="form-group">
                        <label for="detail_image">Ảnh chi tiết:</label>
                        <input type="file" class="form-control" id="detail_image" name="photos[]" multiple>

                    </div>
                    <div class="form-group">
                        <label for="description">Mô tả sản phẩm:</label>
                        <input type="text" class="form-control" name="description" id="description" value="{{$product->description}}">
                        {{ old('description') }}
                        <input type="hidden" name="id" value="{{ $product->id }}">
                    </div>
                    <button type="submit" class="btn btn-success">xác nhận thay đổi</button>
                    <a href="{{ route('product.index') }}" class="btn btn-info">Quay lại</a>
                </div>
            </div>
        </form>
    </div>
@endsection




@section('custom')
    <script>
        function ChangeToSlug() {
            var productName, slug;

            //Lấy text từ thẻ input title 
            productName = document.getElementById("productName").value;

            //Đổi chữ hoa thành chữ thường
            slug = productName.toLowerCase();

            //Đổi ký tự có dấu thành không dấu
            slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
            slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
            slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
            slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
            slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
            slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
            slug = slug.replace(/đ/gi, 'd');
            //Xóa các ký tự đặt biệt
            slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
            //Đổi khoảng trắng thành ký tự gạch ngang
            slug = slug.replace(/ /gi, " - ");
            //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
            //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
            slug = slug.replace(/\-\-\-\-\-/gi, '-');
            slug = slug.replace(/\-\-\-\-/gi, '-');
            slug = slug.replace(/\-\-\-/gi, '-');
            slug = slug.replace(/\-\-/gi, '-');
            //Xóa các ký tự gạch ngang ở đầu và cuối
            slug = '@' + slug + '@';
            slug = slug.replace(/\@\-|\-\@|\@/gi, '');
            //In slug ra textbox có id “slug”
            document.getElementById('slug').value = slug;
        }
    </script>

@endsection

