<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
}


 
$product1 = Product::create([
    'name' => 'ĐÀN PIANO YAMAHA GC2 PE',
	'image'=>'https://nhaccutiendat.vn/upload/img/Dan-Piano-Yamaha-GC2-PE.jpg?width=500&height=500&quality=100',
    'price'	=>'594.000.000 VNĐ ',
    'sale_price' =>'552.420.000 VNĐ',	
    'category_id' =>'1',
    // 'slug' =>'',
    'description' =>'Âm lượng lớn hơn và giá cả hợp lý hơn chính là lý do tại sao dòng sản phẩm GC2 có sức mua mạnh và được dùng phổ biến trên thế giới. 
    Với âm thanh tốt và âm vang tuyệt vời, Piano Yamaha GC2 PE chắc chắn sẽ không làm bạn thất vọng.',	
]);

$product2 = Product::create([
    'name' => 'ĐÀN PIANO ĐIỆN YAMAHA CLAVINOVA CSP-170PE',
	'image'=>'https://nhaccutiendat.vn/upload/img/Dan-Piano-dien-Yamaha-Clavinova-CSP-170.jpg?width=500&height=500&quality=100',
    'price'	=>'109.190.000 VNĐ ',
    'sale_price' =>'101.546.700 VNĐ',	
    'category_id' =>'2',
    // 'slug' =>'',
    'description' =>'Chất lượng âm thanh chuẩn Piano cơ,
    Tối ưu hóa chi phí,
    Kiểu dáng gọn nhẹ, phù hợp mọi không gian sử dụng (chung cư, studio, lớp nhạc,...)',	
]);

$product3 = Product::create([
    'name' => 'ĐÀN GUITAR ACOUSTIC YAMAHA FS100C',
	'image'=>'https://nhaccutiendat.vn/upload/img/dan-acoustic-guitar-yamaha-fs100c_7233.jpg?width=1000&height=1000&quality=100',
    'price'	=>'3.790.000 VNĐ',
    'sale_price' =>'3.524.700 VNĐ',	
    'category_id' =>'3',
    // 'slug' =>'',
    'description' =>'Yamaha FS100C với thiết kế đơn giản, tinh tế, sang và nhiều lựa chọn về màu sắc, đặc biệt dải âm thanh rất đẹp. 
    Chất lượng tốt, anh em chơi Guitar đánh giá tương đương với Yamaha F310 trong tầm giá. Đàn bảo hành 1 năm, bao đổi mới nếu có lỗi do nhà sản xuất.',	
]);

$product4 = Product::create([
    'name' => 'ĐÀN GUITAR ACOUSTIC FENDER CC-60S LH',
	'image'=>'https://nhaccutiendat.vn/upload/img/Dan-Guitar-Acoustic-Fender-CC-60S-LH.jpg?width=500&height=500&quality=100',
    'price'	=>'5.640.000 VNĐ ',
    'sale_price' =>'5.358.000 VNĐ',	
    'category_id' =>'4',
    // 'slug' =>'',
    'description' =>'Nhỏ gọn và thoải mái, CC-60S LH lý tưởng cho người mới chơi và thuận tay trái. Đàn có dáng Concert nhỏ gọn, dễ dàng chơi ở bất kỳ vị trí nào với âm thanh tuyệt vời.
     Đầu spruce rắn tinh xảo, cổ dễ chơi, và mặt sau và mặt gỗ gụ làm cho CC-60S LH trở thành lựa chọn hoàn hảo để chơi ở bãi biển, sân vườn hoặc quán cà phê.',	
]);

$product5 = Product::create([
    'name' => 'ĐÀN VIOLIN SUZUKI 220FE4 SIZE 3/4',
	'image'=>'https://nhaccutiendat.vn/upload/img/dan-violin-suzuki-220fe4-size-3-4.jpg?width=500&height=500&quality=100',
    'price'	=>'18.850.000 VNĐ',
    'sale_price' =>'17.907.500 VNĐ',	
    'category_id' =>'5',
    // 'slug' =>'',
    'description' =>'Suzuki Violin 220FE4 3/4 được làm từ gỗ vân sam giúp âm thanh cộng hưởng tốt hơn và bền hơn trong điều kiện môi trường ẩm. 
    Thuộc dòng Model 220 Nagoya Suzuki violin dòng sản phẩm từ lâu đã trở thành tiêu chuẩn mà các nhạc cụ khác được so sánh và đánh giá. 
    Mô hình violon truyền thống này đã được chơi và yêu thích bởi các sinh viên và giáo viên trên toàn thế giới kể từ khi nó được đưa vào thị trường.',	
]);

$product6 = Product::create([
    'name' => 'ĐÀN VIOLIN SUZUKI NS 20FIT 3/4',
	'image'=>'https://nhaccutiendat.vn/upload/img/dan-violin-suzuki-ns-20fit-3-4.jpg?width=500&height=500&quality=100',
    'price'	=>'14.340.000 VNĐ',
    'sale_price' =>'13.623.000 VNĐ',	
    'category_id' =>'6',
    // 'slug' =>'',
    'description' =>'Suzuki Violin NS 20FIT 3/4, Kiểu dáng, thiết kế đẹp và hài hòa, Thiết kế nổi bật, màu sắc sang trọng, Cạnh tranh về giá và cạnh tranh về chất lượng
    Kích thước sản phẩm (D x R x C cm)    90 x 25 x 10
    Trọng lượng (KG)    2.5',	
]);

$product7 = Product::create([
    'name' => 'Kèn Tenor Saxophone Selmer TS651',
	'image'=>'https://vietthuong.vn/image/cache/catalog/selmer/selmer-ts651-400x400.jpg',
    'price'	=>'26,800,000 VNĐ ',
    'sale_price' =>'26,800,000 VNĐ',	
    'category_id' =>'7',
    // 'slug' =>'',
    'description' =>'Kèn Tenor Saxophone Selmer TS651 phù hợp với với cả sinh viên lẫn nhà 
    giáo dục âm nhạc, từ nghiệp dư đến chuyên nghiệp, những người muốn chơi các dụng cụ Kèn Saxophone .',	
]);

$product8 = Product::create([
    'name' => 'KÈn Conn TS650 Student Tenor Saxophones',
	'image'=>'https://vietthuong.vn//upload/images/SELMER/TS650.jpg',
    'price'	=>'34,200,000 VNĐ ',
    'sale_price' =>'34,200,000 VNĐ',	
    'category_id' =>'8',
    // 'slug' =>'',
    'description' =>'Conn TS650 Student Tenor Saxophones mang đến cho người sử dụng một âm thanh chất lượng và một thiết kế khá tiện ích, nổi bật',	
]);

$product9 = Product::create([
    'name' => 'BỘ TRỐNG JAZZ PEARL DMP925SP/C',
	'image'=>'https://nhaccutiendat.vn/upload/img/Bo-trong-JAZZ-Pearl-DMP925SP-C.jpg?width=500&height=500&quality=100',
    'price'	=>'17.480.000 VNĐ',
    'sale_price' =>'16.256.400 VNĐ',	
    'category_id' =>'9',
    // 'slug' =>'',
    'description' =>'Với kinh nghiệm 70 năm trong nghề chế tác trống thủ công, Pearl DMP925SP/C là model đỉnh cao để bạn sẵn sàng học tập và biểu diễn. 
    Lớp vỏ Maple 5,4mm, các tính năng chuyên nghiệp và lớp hoàn thiện sơn mài tuyệt đẹp, Decade giúp nâng cao hiệu suất chơi trống của bạn tối đa với mức giá mà trước đây các model khác không thể đạt được.
     Phần cứng vỏ trống có khối lượng nhẹ / tiếp xúc thấp đảm bảo hiệu suất tối ưu và độ bền của cả bộ trống. ',	
]);

$product10 = Product::create([
    'name' => 'BỘ TRỐNG DÀN CƠ YAMAHA DRUM STAGE CUSTOM SBP2F5',
	'image'=>'https://nhaccutiendat.vn/upload/img/Bo-trong-JAZZ-Pearl-DMP925SP-C.jpg?width=500&height=500&quality=100',
    'price'	=>'35.570.000 VNĐ',
    'sale_price' =>'33.240.000 VNĐ',	
    'category_id' =>'10',
    // 'slug' =>'',
    'description' =>'Bộ trống Jazz Yamaha Rydeen Brown mới (combo 5 món) là sản phẩm dành cho cả người mới bắt đầu lẫn tay chơi trống chuyên nghiệp. 
    Màn ra mắt này đã tạo cơ hội trải nghiệm mới mẻ dành cho cộng đồng chơi trống. Mặc dù không có sự thay đổi mạnh mẽ ở phần ngoại hình, bộ trống lại được nâng cấp với phiên bản đầy tính đột phá ở phần hiệu năng.',	
]);