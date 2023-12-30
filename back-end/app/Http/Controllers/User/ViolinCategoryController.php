<?php

namespace App\Http\Controllers\User;

use App\Models\ViolinCategory;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ViolinCategoryController extends Controller
{
    public function getViolinCategory()
    {
        $violinCategory = ViolinCategory::all();      
        return $violinCategory;
    }

    public function insertViolinCategory()
    {

        $ViolinCategory1 = ViolinCategory::create([
            'name' => 'ĐÀN VIOLIN SUZUKI 220FE4 SIZE 3/4',
            'image' => 'https://nhaccutiendat.vn/upload/img/Dan-violin-dien-Yamaha-Clavinova-CSP-170B.jpg?width=500&height=500&quality=100',
            'price'    => '18850000',
            'sale_price' => '17907500',
            'category_id' => '5',
            'slug' => 'dan-violin7',
            'description' => 'Suzuki Violin 220FE4 3/4 được làm từ gỗ vân sam giúp âm thanh cộng hưởng tốt hơn và bền hơn trong điều kiện môi trường ẩm.
             Thuộc dòng Model 220 Nagoya Suzuki violin dòng sản phẩm từ lâu đã trở thành tiêu chuẩn mà các nhạc cụ khác được so sánh và đánh giá.
             Mô hình violon truyền thống này đã được chơi và yêu thích bởi các sinh viên và giáo viên trên toàn thế giới kể từ khi nó được đưa vào thị trường.',
        ]);

        $ViolinCategory2 = ViolinCategory::create([
            'name' => 'ĐÀN violin ĐIỆN YAMAHA CLAVINOVA CSP-170WH',
            'image' => 'https://nhaccutiendat.vn/upload/img/Dan-violin-dien-Yamaha-Clavinova-CSP-170WH.jpg?width=500&height=500&quality=100',
            'price'    => '98700000',
            'sale_price' => '91781000',
            'category_id' => '5',
            'slug' => 'dan-violin8',
            'description' => 'Chất lượng âm thanh chuẩn violin cơ,
            Tối ưu hóa chi phí,
            Kiểu dáng gọn nhẹ, phù hợp mọi không gian sử dụng (chung cư, studio, lớp nhạc,...)',
        ]);

        $ViolinCategory3 = ViolinCategory::create([
            'name' => 'ĐÀN violin ĐIỆN YAMAHA CLP-795GP',
            'image' => 'https://nhaccutiendat.vn/upload/img/dan-violin-dien-yamaha-clp-795gppolished-ebony.jpg?width=500&height=500&quality=100',
            'price'    => '219890000',
            'sale_price' => '204497700',
            'category_id' => '6',
            'slug' => 'dan-violin3',
            'description' => 'Đàn violin Điện Yamaha CLP-795 GP sử dụng công nghệ tiên tiến để tái tạo trải nghiệm biểu diễn tuyệt vời trên một cây đại dương cầm, 
            phím GrandTouch counterweights và hệ thống âm thanh tốt nhất trong dòng cho phép nghệ sĩ violin thể hiện kỹ thuật biểu cảm và chính xác nhất trên phím đàn, tự tin thể hiện cá tính âm nhạc của mình. ',
        ]);

        $ViolinCategory4 = ViolinCategory::create([
            'name' => 'ĐÀN violin CƠ KAWAI GL30',
            'image' => 'https://nhaccutiendat.vn/upload/img/Dan-violin-co-Kawai-GL30.jpg?width=500&height=500&quality=100',
            'price'    => '395900000',
            'sale_price' => '395900000',
            'category_id' => '5',
            'slug' => 'dan-violin4',
            'description' => 'Chất lượng âm thanh chuẩn violin cơ,
            Tối ưu hóa chi phí,
            Kiểu dáng gọn nhẹ, phù hợp mọi không gian sử dụng (chung cư, studio, lớp nhạc,...)',
        ]);

        $ViolinCategory5 = ViolinCategory::create([
            'name' => 'ĐÀN VIOLIN KAPOK MV 005 SIZE 1/2',
            'image' => 'https://nhaccutiendat.vn/upload/img/dan-violin-kapok-mv-005-size-1-2_1734.jpg?width=500&height=500&quality=100',
            'price' => '2350000',
            'sale_price' => '2303000',
            'category_id' => '5',
            'slug' => 'dan-violin5',
            'description' => 'Đàn Violin MV005 1/2 được thiết kế dành cho những người chơi thuận tay trái. Cây đàn có chất lượng âm thanh tốt, nhiều tính năng linh hoạt, hứa hẹn đem đến cho người chơi những trải nghiệm tuyệt vời.',
        ]);

        $ViolinCategory6 = ViolinCategory::create([
            'name' => 'ĐÀN VIOLIN SUZUKI NS 20FIT 3/4',
            'image' => 'https://nhaccutiendat.vn/upload/img/dan-violin-suzuki-ns-20fit-3-4.jpg?width=500&height=500&quality=100',
            'price'    => '14340000',
            'sale_price' => '13623000',
            'category_id' => '6',
            'slug' =>'dan-violin6',
            'description' => 'Suzuki Violin NS 20FIT 3/4, Kiểu dáng, thiết kế đẹp và hài hòa, Thiết kế nổi bật, màu sắc sang trọng, Cạnh tranh về giá và cạnh tranh về chất lượng
            Kích thước sản phẩm (D x R x C cm)    90 x 25 x 10
            Trọng lượng (KG)    2.5',
        ]);

        return 'add successfully';
    }
}
