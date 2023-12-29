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
    public function create(){
        $title = "Quản Lý Danh Mục";
        $category = new Category ();
        $parentid = $category->getParentID();
        return view ('Admin.Category.add',compact('title','parentid'));
    }
    public function store(Request $request){
        $request->validate([
            'name'=> 'required|min:6',
    
        ],[
            'name.required'=> 'Vui lòng nhập tên danh mục',
        ]
    );
        $category = new Category();
        $category_name = $request->name;
        $parent_id = $request->parent_id;
        $created_at = date('Y-m-d H:i:s');

        $dataInsert = $category->insertCategory($category_name,$parent_id,$created_at);
        if($dataInsert){
            Session::flash('success','Tạo danh mục thành công');
        }
        else {
            Session::flash('error','Tạo danh mục thất bại');
        }
        return redirect()->back();
        
    }
    public function showList(){
        $title ='Danh sách danh mục';
        $category = new Category ();
        $listData = $category->showData();

        return view ('Admin.Category.list',compact('title','listData'));
    }
    public function getUpdate($id){
        $title = 'Cập nhật danh mục ';
        $category = new Category(); 
        $getId = $category->getData($id);
        $parentid = $category->getParentID();
        return view ('Admin.Category.edit',compact('title','getId','parentid'));        
    }
    public function update(Request $request, $id){
        $category = new Category();
        $category_name = $request->name;
        $parent_id = $request->parent_id;
        $update_at = date('Y-m-d H:i:s');
        $dataUpdate = $category->updateCategory($category_name,$parent_id,$update_at,$id);

        return redirect(route('category.show'))->with('success','Cập nhật danh mục thành công');  
    }
    public function delete($id){
        (new Category())->deleteCategory($id);
        return redirect()->back()->with('success','Xóa thành công');
    }
}
