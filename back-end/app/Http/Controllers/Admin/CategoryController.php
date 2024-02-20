<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Session;

class CategoryController extends Controller
{
    // public function index()
    // {
    //     $category = Category::all();
    //     return $category;
    // }

    // public function showListByID($id)
    // {
    //     $category = Category::find($id);

    //     return $category;
    // }

    // public function store(Request $request)
    // {

    //     $rules = [
    //         'name' => 'required'
    //     ];
    //     $messages= [
    //         'name.required' => 'Tên không được để trống'
    //     ];
    //     $validate = Validator::make($request->all(), $rules, $messages);
    //     if($validate->fails()){
    //         $errors = $validate->errors()->messages();
    //         return response()->json(['success'=> false , 'errors'=> $errors]);
    //     }
    //     else {
    //         $category = Category::create($request->all());
    //         return response()->json(['category' => $category], 200);
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
    //         $category = Category::findOrFail($id);
    //         if($category){
    //             $category->update($request->all());
    //             return response()->json(['message' => 'Category updated successfully','category' => $category], 200);
    //         }
    //        else {
    //             return response()->json(['message' => 'Category not found'], 404);
    //        }


    //     }
    // }
    // public function destroy($id)
    // {
    //     $category = Category::findOrFail($id);
    //     $category->delete();
    //     return response()->json([
    //         'redireact' => 'category',
    //         'message' => 'Xóa sản phẩm thành công'
    //     ]);
    // }
    // private $category;

    // public function __construct()
    // {
    //     // $this->category = new Category();
    // }
    public function index()
    {

        $categories = Category::orderBy('id', 'desc')->Search()->paginate(6);
        return view('admin.category.index', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::orderBy('name', 'ASC')->get();
        // dd($categories);
        return view('admin.category.add', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $rules = [
            'name' => 'required|unique:categories'

        ];
        $message = [
            'name.required' => 'bắt buộc nhập thông tin',
            'name.unique' => 'sản phẩm này đã tồn tại',

        ];

        $request->validate($rules, $message);

        try {
            Category::create($request->all());
            return redirect()->route('category.index')->with('msg', 'Thêm mới thành công ');
        } catch (\Throwable $th) {
            return redirect()->route('category.create')->with('msg', 'Thêm thất bại ');
        }
    }

    public function show(string $id)
    {
    }

    public function edit(Category $category)
    {
        $categories = Category::all();

        return view('admin.category.edit', compact('category', 'categories'));
    }

    public function update(Request $request, Category $category)
    {
        $rules = [
            'name' => 'required|unique:categories,name,' . $request->id
        ];
        $message = [
            'name.required' => 'bắt buộc nhập thông tin',
            'name.unique' => 'Danh mục này đã tồn tại',
        ];

        $request->validate($rules, $message);
        try {
            $category->update($request->all());
            return redirect()->route('category.index')->with('msg', 'update thành công ');
        } catch (\Throwable $th) {
            return redirect()->back()->with('msg', 'update không thành công ');
        }
    }


    public function destroy(Request $request, Category $category)
    {
        try {
            // Xóa sản phẩm
            // dd($category);
            $category->delete();
            return redirect()->route('category.index')->with('msg', 'Xóa thành công ');
        } catch (\Throwable $th) {
            return redirect()->back()->with('msg', 'Xóa không thành công ');
        }
    }
}
