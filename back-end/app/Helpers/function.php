<?php
function percent($sale, $price)
{
    return round(($sale - $price) * 100 / $price);
}

function showCategories($categories, $parent_id = 0, $char = '')
{
    foreach ($categories as $key => $item) {
        // Nếu là chuyên mục con thì hiển thị
        if ($item->parent_id == $parent_id) {
            echo '<option value="' . $item->id . '">' . $char . $item->name . '</option>';
            unset($categories[$key]);
            // Tiếp tục đệ quy để tìm chuyên mục con của chuyên mục đang lặp
            showCategories($categories, $item->id, $char . '--');
        }
    }
}