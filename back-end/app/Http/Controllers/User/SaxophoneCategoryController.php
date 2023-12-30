<?php

namespace App\Http\Controllers\User;

use App\Models\SaxophoneCategory;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SaxophoneCategoryController extends Controller
{
    public function getSaxophoneCategory()
    {
        $saxophoneCategory = SaxophoneCategory::all();      
        return $saxophoneCategory;
    }

    public function insertSaxophoneCategory()
    {

        $saxophoneCategory1 = SaxophoneCategory::create([
            'name' => 'Kèn Tenor Saxophone Selmer TS651',
            'image' => 'https://vietthuong.vn/image/cache/catalog/selmer/selmer-ts651-400x400.jpg',
            'price'    => '26800000',
            'sale_price' => '25900000',
            'category_id' => '7',
            'slug' =>'ken-saxophone1',
            'description' => 'Kèn Tenor Saxophone Selmer TS651 phù hợp với với cả sinh viên lẫn nhà 
            giáo dục âm nhạc, từ nghiệp dư đến chuyên nghiệp, những người muốn chơi các dụng cụ Kèn Saxophone .',
        ]);

        $saxophoneCategory2 = SaxophoneCategory::create([
            'name' => 'Kèn Conn TS650 Student Tenor Saxophones',
            'image' => 'https://vietthuong.vn//upload/images/SELMER/TS650.jpg',
            'price'    => '34200000',
            'sale_price' => '31000000',
            'category_id' => '8',
            'slug' =>'ken-saxophone3',
            'description' => 'Conn TS650 Student Tenor Saxophones mang đến cho người sử dụng một âm thanh chất lượng và một thiết kế khá tiện ích, nổi bật',
        ]);

        $saxophoneCategory3 = SaxophoneCategory::create([
            'name' => 'KÈN SAXOPHONE TENOR YAMAHA YTS-26',
            'image' => 'https://vietmusic.vn/cdn/shop/files/ken-saxophone-tenor-yamaha-yts-26-viet-music.jpg?v=1701760972&width=823',
            'price'    => '36000000',
            'sale_price' => '35300000',
            'category_id' => '7',
            'slug' =>'ken-saxophone4',
            'description' => 'Kết hợp các yếu tố thiêt kế từ các model kèn chuyên nghiệp, saxophone tenor YTS26 là nhạc cụ đáng tin cậy,
             được thiết kế hứa hẹn sẽ nuôi dưỡng tình yêu âm nhạc dành cho những người mới bắt đầu và có đam mê với loại nhạc cụ hơi này. Cũng là sự lựa chọn của các nhà giáo dục âm nhạc, YTS26 đặt ra tiêu chuẩn chất lượng cho những model kèn phân khúc thấp.',
        ]);

        $saxophoneCategory4 = SaxophoneCategory::create([
            'name' => 'KÈN SAXOPHONE TENOR YAMAHA YTS-280S',
            'image' => 'https://vietmusic.vn/cdn/shop/files/ken-saxophone-tenor-yamaha-yts-280s-viet-music.jpg?v=1689726263&width=823',
            'price'    => '58000000',
            'sale_price' => '54000000',
            'category_id' => '8',
            'slug' =>'ken-saxophone2',
            'description' => 'Mang đến sự khởi đầu hoàn hảo dành cho người mới chơi.Trọng lượng nhẹ, hình dáng công thái học, nó được đánh giá là dễ cầm, nắm.
             Với những ngữ điệu âm thanh hoàn hảo mà người chơi mong đợi từ cây kèn này của Yamaha, nó đảm bảo rằng hỗ trợ tối đa cho người mới bắt đầu và cả tiến trình học cũng như sự sáng tạo với bộ môn kèn này.',
        ]);

        return 'add successfully';
    }
}
