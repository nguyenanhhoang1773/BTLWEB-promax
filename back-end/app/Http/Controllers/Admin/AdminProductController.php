<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use App\Models\ImgProduct;
use Illuminate\Support\Facades\Session;

class AdminProductController extends Controller
{
    //
    // public function index()
    // {
    //     $product = Product::all();
    //     return response()->json([
    //         'message' => 'Successfully',
    //         'product' => $product]);
    // }   
    // public function showListByID($id)
    // {
    //     $product = Product::find($id);
    //     return $product;
    // }


    // public function store(Request $request)
    // {
       
    //     $rules = [
    //         'name'=>'required',
    //         'price'=>'required',
    //         'sale_price'=>'required',
    //         'category_id'=>'required',
    //         'slug'=>'required',
    //     ];
    //     $messages = [
    //         'name.required' => 'Tên không được để trống',
    //         'price.required' => 'Giá không được để trống',
    //         'sale_price' => 'Giá giảm giá không được để trống',
    //         'category_id.required'=> 'Danh mục không được để trống',
    //         'slug'=> 'slug không được để trống',
    //     ];
    //     $validator = Validator::make($request->all(), $rules, $messages);
    //     if ($validator->fails()) {
    //         $errors = $validator->errors()->messages();
    //         return response()->json(['success' => false, 'errors' => $errors]);
    //     } else {
    //         $product = Product::create($request->all());
    //         return response()->json(['category' => $product], 200);
    //     }
        
        
    // }

    // public function update(Request $request, $id)
    // {
    //     $rules = [        
    //         'name' => 'required',
           
    //     ];
    //     $messages = [            
    //         'name.required' => 'Tên không được để trống',         
    //     ];

    //     $validator = Validator::make($request->all(), $rules, $messages);

    //     if ($validator->fails()) {
    //         $errors = $validator->errors()->messages();
    //         return response()->json(['success' => false, 'errors' => $errors]);
    //     } else {
    //         $product = Product::findOrFail($id);
    //         if($product){
    //             $product->update($request->all());
    //             return response()->json(['message' => 'Product updated successfully','category' => $product], 200);
    //         }
    //        else {
    //             return response()->json(['message' => 'Product not found'], 404);
    //        }

    //     }
    // }
    // public function destroy($id)
    // {
    //     $product = Product::findOrFail($id);
    //     $product->delete();
    //     return $product;
    // }



    // public function store(Request $request)
    // {

    //     $rules = [
    //         'name'=>'required',
    //         'price'=>'required',
    //         'sale_price'=>'required',
    //         'category_id'=>'required',
    //         'slug'=>'required',
    //     ];
    //     $messages = [
    //         'name.required' => 'Tên không được để trống',
    //         'price.required' => 'Giá không được để trống',
    //         'sale_price' => 'Giá giảm giá không được để trống',
    //         'category_id.required'=> 'Danh mục không được để trống',
    //         'slug'=> 'slug không được để trống',
    //     ];
    //     $validator = Validator::make($request->all(), $rules, $messages);
    //     if ($validator->fails()) {
    //         $errors = $validator->errors()->messages();
    //         return response()->json(['success' => false, 'errors' => $errors]);
    //     } else {
    //         $product = Product::create($request->all());
    //         return response()->json(['category' => $product], 200);
    //     }


    // }

    // public function update(Request $request, $id)
    // {
    //     $rules = [        
    //         'name' => 'required',

    //     ];
    //     $messages = [            
    //         'name.required' => 'Tên không được để trống',         
    //     ];

    //     $validator = Validator::make($request->all(), $rules, $messages);

    //     if ($validator->fails()) {
    //         $errors = $validator->errors()->messages();
    //         return response()->json(['success' => false, 'errors' => $errors]);
    //     } else {
    //         $product = Product::findOrFail($id);
    //         if($product){
    //             $product->update($request->all());
    //             return response()->json(['message' => 'Product updated successfully','category' => $product], 200);
    //         }
    //        else {
    //             return response()->json(['message' => 'Product not found'], 404);
    //        }

    //     }
    // }
    // public function destroy($id)
    // {
    //     $product = Product::findOrFail($id);
    //     $product->delete();
    //     return $product;
    // }
    public function __construct()
    {
        // $this->product = new Products();
    }
    public function index()
    {
        $products = Product::orderBy('created_at', 'desc')
            ->Search()
            ->paginate(5);
        return view('admin.product.index', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::orderBy('name', 'ASC')->get();
        return view('admin.product.add', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $rules = [
            'name' => 'required|max:150',
            'slug' => 'required|unique:products',
            'price' => 'required|numeric|gt:0',
            'sale_price' => 'required|numeric|lte:price',
            'category_id' => 'required',
            'photo' => 'required'
        ];

        $message = [
            'name.required' => 'Vui lòng nhập tên sản phẩm.',
            'name.max' => 'Tên sản phẩm không được vượt quá :max kí tự.',

            'slug.required' => 'Vui lòng nhập đường dẫn.',
            'slug.unique' => 'Đường dẫn này đã tồn tại trên hệ thống.',

            'price.required' => 'Vui lòng nhập giá sản phẩm.',
            'price.numeric' => 'Giá sản phẩm phải là số.',
            'price.gt' => 'Giá sản phẩm phải lớn hơn 0 vnd.',

            'sale_price.required' => 'Vui lòng nhập giá sản phẩm khuyến mãi. Nếu không có, hãy nhập số 0.',
            'sale_price.numeric' => 'Giá sản phẩm khuyến mãi phải là số.',
            'sale_price.lte' => 'Giá khuyến mãi không được lớn hơn giá gốc.',


            'category_id.required' => 'Vui lòng chọn danh mục.',
            'photo.required' => 'Vui lòng chọn ảnh demo.'
        ];

        $request->validate($rules, $message);

        $fileName = $request->photo->getClientOriginalName();
        $request->photo->storeAs('public/images', $fileName);
        $request->merge(['image' => $fileName]);

        try {
            //    dd($request -> all());
            $product = Product::create($request->all());

            if ($product && $request->hasFile('photos')) {
                foreach ($request->photos as $value) {
                    $fileNames = $value->getClientOriginalName();
                    $value->storeAs('public/images', $fileNames);
                    ImgProduct::create([
                        'product_id' => $product->id,
                        'image' => $fileNames
                    ]);
                }
            }
            return redirect()->route('product.index')->with('msg', 'Thêm thành công ');
        } catch (\Throwable $th) {
            return 'sao nó không hiện ';
        }
    }
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {

        $categories = Category::all();
        // dd($products);
        return view('admin.product.edit', compact('product', 'categories'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {


        $rules = [
            'name' => 'required|unique:products,name,' . $request->id,
            'slug' => 'required|unique:products,slug,' . $request->id,
            'price' => 'required|integer',
            'sale_price' => 'required|integer',
            // 'category_id' => 'required',
            // 'photo' => 'required'
        ];

        $message = [
            'name.required' => 'vui lòng nhập tên sản phẩm ',
            'name.unique' => 'Sản phẩm này đã tồn tại trên hệ thống',

            'slug.required' => 'vui lòng nhập đường dẫn ',
            'slug.unique' => 'Đường dẫn này đã tồn tại trên hệ thống',


            'price.required' => 'vui lòng nhập nhập giá sản phẩm ',
            'price.integer' => 'vui lòng nhập số',

            'sale_price.required' => 'hãy nhập giá sản phảm KM, nếu không có thì nhập số 0',
            'sale_price.integer' => 'vui lòng nhập số',

            // 'category_id.required' => 'vui lòng nhập chọn danh mục ',
            // 'photo.required' => 'vui lòng chọn ảnh demo'
        ];
        $request->validate($rules, $message);

        if ($request->hasFile('photo')) {
            $fileName = $request->photo->getClientOriginalName();
            $request->photo->storeAs('public/images', $fileName);
            $product->image = $fileName;
            // dd($product->image);
        }
        // Cập nhật các trường dữ liệu khác từ yêu cầu HTTP
        $product->name = $request->name;
        $product->slug = $request->slug;
        $product->price = $request->price;
        $product->sale_price = $request->sale_price;
        $product->category_id = $request->category_id;
        $product->description = $request->description;

        // Lưu các thay đổi vào cơ sở dữ liệu
        // dd($product->category_id);
        try {
            $product->save();
            return redirect()->route('product.index')->with('msg', 'Cập nhật thành công');
        } catch (\Throwable $th) {
            return redirect()->back()->with('msg', 'Cập nhật không thành công');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        try {

            $product->delete();
            return redirect()->route('product.index')->with('msg', 'Xóa thành công ');
        } catch (\Throwable $th) {
            return redirect()->back()->with('error', 'Xóa không thành công ');
        }
    }

}
