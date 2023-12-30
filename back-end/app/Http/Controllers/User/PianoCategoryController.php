<?php

namespace App\Http\Controllers\User;

use App\Models\PianoCategory;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PianoCategoryController extends Controller
{
    public function getPianoCategory()
    {
        $pianoCategory = PianoCategory::all();      
        return $pianoCategory;
    }

    public function insertPianoCategory()
    {

        $pianoCategory1 = PianoCategory::create([
            'name' => 'ĐÀN PIANO ĐIỆN YAMAHA CLAVINOVA CSP-170B',
            'image' => 'https://nhaccutiendat.vn/upload/img/Dan-Piano-dien-Yamaha-Clavinova-CSP-170B.jpg?width=500&height=500&quality=100',
            'price'    => '98690000',
            'sale_price' => '74017500',
            'category_id' => '1',
            'slug' => 'dan-piano1',
            'description' => 'Âm lượng lớn hơn và giá cả hợp lý hơn chính là lý do tại sao dòng sản phẩm GC2 có sức mua mạnh và được dùng phổ biến trên thế giới. 
            Với âm thanh tốt và âm vang tuyệt vời, Piano Yamaha GC2 PE chắc chắn sẽ không làm bạn thất vọng.',
        ]);

        $pianoCategory2 = PianoCategory::create([
            'name' => 'ĐÀN PIANO ĐIỆN YAMAHA CLAVINOVA CSP-170WH',
            'image' => 'https://nhaccutiendat.vn/upload/img/Dan-Piano-dien-Yamaha-Clavinova-CSP-170WH.jpg?width=500&height=500&quality=100',
            'price'    => '98700000',
            'sale_price' => '91781000',
            'category_id' => '2',
            'slug' => 'dan-piano2',
            'description' => 'Chất lượng âm thanh chuẩn Piano cơ,
            Tối ưu hóa chi phí,
            Kiểu dáng gọn nhẹ, phù hợp mọi không gian sử dụng (chung cư, studio, lớp nhạc,...)',
        ]);

        $pianoCategory3 = PianoCategory::create([
            'name' => 'ĐÀN PIANO ĐIỆN YAMAHA CLP-795GP',
            'image' => 'https://nhaccutiendat.vn/upload/img/dan-piano-dien-yamaha-clp-795gppolished-ebony.jpg?width=500&height=500&quality=100',
            'price'    => '219890000',
            'sale_price' => '204497700',
            'category_id' => '1',
            'slug' => 'dan-piano3',
            'description' => 'Đàn Piano Điện Yamaha CLP-795 GP sử dụng công nghệ tiên tiến để tái tạo trải nghiệm biểu diễn tuyệt vời trên một cây đại dương cầm, 
            phím GrandTouch counterweights và hệ thống âm thanh tốt nhất trong dòng cho phép nghệ sĩ piano thể hiện kỹ thuật biểu cảm và chính xác nhất trên phím đàn, tự tin thể hiện cá tính âm nhạc của mình. ',
        ]);

        $pianoCategory4 = PianoCategory::create([
            'name' => 'ĐÀN PIANO CƠ KAWAI GL30',
            'image' => 'https://nhaccutiendat.vn/upload/img/Dan-Piano-co-Kawai-GL30.jpg?width=500&height=500&quality=100',
            'price'    => '395900000',
            'sale_price' => '395900000',
            'category_id' => '2',
            'slug' => 'dan-piano4',
            'description' => 'Chất lượng âm thanh chuẩn Piano cơ,
            Tối ưu hóa chi phí,
            Kiểu dáng gọn nhẹ, phù hợp mọi không gian sử dụng (chung cư, studio, lớp nhạc,...)',
        ]);

        $pianoCategory5 = PianoCategory::create([
            'name' => 'ĐÀN PIANO CƠ KAWAI GL10 INDONESIA',
            'image' => 'https://nhaccutiendat.vn/upload/img/Dan-Piano-co-Kawai-GL10.jpg?width=500&height=500&quality=100',
            'price'    => '299800000',
            'sale_price' => '278814000',
            'category_id' => '1',
            'slug' => 'dan-piano5',
            'description' => 'Là sản phẩm đàn Piano mới trong đại gia đình piano Kawai. Piano Kawai GL-10 thuộc dòng "baby grand" được
             sản xuất và lắp ráp thủ công theo nguyên tắc cổ điển. Các thiết kế của cây đàn Kawai GL-10 được chú ý cẩn thận và thích hợp với mọi căn phòng.',
        ]);

        $pianoCategory6 = PianoCategory::create([
            'name' => 'ĐÀN PIANO ĐIỆN YAMAHA CVP-809GWH',
            'image' => 'https://nhaccutiendat.vn/upload/img/Dan-Piano-dien-Yamaha-CVP-809GWH.jpg?width=500&height=500&quality=100',
            'price'    => '223590000',
            'sale_price' => '207938700',
            'category_id' => '2',
            'slug' => 'dan-piano6',
            'description' => 'Âm thanh dội lại qua toàn bộ phần thân của nhạc cụ giống như ở đàn đại dương cầm, và lan khắp phòng để tạo ra không khí âm thanh ấm áp.
             Tủ đàn đại dương cầm sang trọng làm tăng thêm vẻ lộng lẫy cho mọi căn phòng.
            Khám phá đa dạng Điệu nhạc đệm
            Đàn piano Dòng CVP cung cấp nhiều tiếng nhạc không chỉ riêng tiếng piano mà còn đa dạng các điệu nhạc đệm cho ban nhạc và dàn nhạc với rất nhiều thể loại, như jazz, pop...',
        ]);

        return 'add successfully';
    }
}
