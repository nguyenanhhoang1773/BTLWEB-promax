<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\GuitarCategory;
use Illuminate\Http\Request;

class GuitarCategoryController extends Controller
{
    public function getGuitarCategory()
    {
        $guitarCategory = GuitarCategory::all();      
        return $guitarCategory;
    }

    public function insertGuitarCategory()
    {

        $guitarCategory1 = GuitarCategory::create([
            'name' => 'ĐÀN GUITAR ACOUSTIC YAMAHA FS100C',
            'image' => 'https://nhaccutiendat.vn/upload/img/dan-acoustic-guitar-yamaha-fs100c_7233.jpg?width=1000&height=1000&quality=100',
            'price'    => '3790000',
            'sale_price' => '3524700',
            'category_id' => '3',
            'slug' =>'dan-guitar1',
            'description' => 'Yamaha FS100C với thiết kế đơn giản, tinh tế, sang và nhiều lựa chọn về màu sắc, đặc biệt dải âm thanh rất đẹp. 
            Chất lượng tốt, anh em chơi Guitar đánh giá tương đương với Yamaha F310 trong tầm giá. Đàn bảo hành 1 năm, bao đổi mới nếu có lỗi do nhà sản xuất.',
        ]);

        $guitarCategory2 = GuitarCategory::create([
            'name' => 'ĐÀN GUITAR CLASSIC CORDOBA C5 SP',
            'image' => 'https://nhaccutiendat.vn/upload/img/dan-guitar-classic-cordoba-c5-sp.jpg?width=500&height=500&quality=100',
            'price'    => '8450000',
            'sale_price' => '8027500',
            'category_id' => '4',
            'slug' =>'dan-guitar2',
            'description' => 'Kế thừa thành công của model lừng danh C5-CD, C5-SP là model được thiết kế cho các fan của Cordoba thêm nhiều lựa chọn.
             Là cây guitar hoàn hảo trong tầm giá hơn 8 triệu, Cordoba C5-SP với mặt top là gỗ thịt Vân Sam Engelmann (solid Engelmann Spruce); lưng và hông là gỗ Gụ Mahogany giúp mang lại âm thanh rõ ràng, vang vọng, đầy đặn và ngân nga quyến rũ',
        ]);

        $guitarCategory3 = GuitarCategory::create([
            'name' => 'ĐÀN GUITAR ACOUSTIC TANGLEWOOD TWCR O-E CROSSROADS',
            'image' => 'https://nhaccutiendat.vn/upload/img/dan-guitar-acoustic-tanglewood-twcr-o-e-crossroads_1314.jpg?width=500&height=500&quality=100',
            'price'    => '4020000',
            'sale_price' => '3819000',
            'category_id' => '3',
            'slug' =>'dan-guitar3',
            'description' => '- Dáng đàn Orchestra cỡ trung thiên về dải tần middle
            - Phần lớn đàn làm bằng gỗ mahogany
            - Bộ khuếch đại Tanglewood TW-EX4
            - Giá đàn rất phải chăng',
        ]);

        $guitarCategory4 = GuitarCategory::create([
            'name' => 'ĐÀN GUITAR ACOUSTIC FENDER CC-60S LH',
            'image' => 'https://nhaccutiendat.vn/upload/img/Dan-Guitar-Acoustic-Fender-CC-60S-LH.jpg?width=500&height=500&quality=100',
            'price'    => '5640000',
            'sale_price' => '5358000',
            'category_id' => '4',
            'slug' =>'dan-guitar4',
            'description' => 'Nhỏ gọn và thoải mái, CC-60S LH lý tưởng cho người mới chơi và thuận tay trái. Đàn có dáng Concert nhỏ gọn, dễ dàng chơi ở bất kỳ vị trí nào với âm thanh tuyệt vời.
             Đầu spruce rắn tinh xảo, cổ dễ chơi, và mặt sau và mặt gỗ gụ làm cho CC-60S LH trở thành lựa chọn hoàn hảo để chơi ở bãi biển, sân vườn hoặc quán cà phê.',
        ]);

        $guitarCategory5 = GuitarCategory::create([
            'name' => 'GUITAR ACOUSTIC YAMAHA CSF3M (SIZE 3/4)',
            'image' => 'https://nhaccutiendat.vn/upload/img/_2644.jpg?width=500&height=500&quality=100',
            'price'    => '13190000',
            'sale_price' => '12266700',
            'category_id' => '3',
            'slug' =>'dan-guitar5',
            'description' => 'Đàn Guitar Yamaha CSF3M thuộc dòng đàn guitar CSF. Dòng Guitar CSF được Yamaha thiết kế hoàn toàn mới, giúp tăng phản ứng âm bass và độ lớn chung của âm thanh, tạo nên tiếng nhạc tròn đầy, sống động.',
        ]);

        $guitarCategory6 = GuitarCategory::create([
            'name' => 'ĐÀN GUITAR ACOUSTIC TAYLOR ACADEMY A12',
            'image' => 'https://nhaccutiendat.vn/upload/img/Dan-guitar-TAYLOR-ACADEMY-12.jpg?width=500&height=500&quality=100',
            'price'    => '15490000',
            'sale_price' => '15490000',
            'category_id' => '4',
            'slug' =>'dan-guitar6',
            'description' => 'Đàn Guitar Taylor Academy A12 là chiếc Grand Concert Acoustic tuyệt vời từ seri Academy của Taylor mà bất kì ai cũng có thể chơi được.',
        ]);

        return 'add successfully';
    }
}
