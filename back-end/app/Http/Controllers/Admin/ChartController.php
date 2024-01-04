<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Orders;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ChartController extends Controller
{
    public function getDataOrdersForChart(){
        
        $datasForChart = Orders::selectRaw('MONTH(created_at) as month, COUNT(*) as count')
                        ->whereYear('created_at', date('Y'))
                        ->groupBy('month')
                        ->orderBy('month')
                        ->get();
        
        $labels = [];
        $data = [];
        $colors = ['rgba(220, 20, 60, 1)','rgba(255, 20, 147, 1)','rgba(255, 206, 86, 1)','rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)','rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)',
        'rgba(184, 134, 11, 1)','rgba(188, 143, 143, 1)','rgba(154, 205, 50, 1)','rgba(75, 0, 130, 1)'];
      
        for ($i = 1 ;$i <= 12 ;$i++ ){
            $month = date('F', mktime(0,0,0,$i,1));
            $count = 0;

            foreach($datasForChart as $dataForChart){
                if($dataForChart->month == $i){
                    $count = $dataForChart->count;
                    break;
                }
            }
            array_push($labels,$month);
            array_push($data,$count);
        }

        $datasets = [
            [
                'label' => 'Thống kê đơn hàng',
                'data' => $data,
                'backgroundColor' => $colors,
                'borderWidth' => '1'
            ]
        ];

        // doanh thu
        $datasRevenueForChart =Orders::select(
            DB::raw('MONTH(created_at) as month'),
            DB::raw('SUM(total_amount) as total_amount')
        )
        ->whereYear('created_at', date('Y'))
        ->groupBy(DB::raw('MONTH(created_at)'))
        ->get();


        $labelsRevenue = [];
        $dataRevenue = [];

        for ($i = 1 ;$i <= 12 ;$i++ ){
            $monthRevenue = date('F', mktime(0,0,0,$i,1));
            $countRevenue = 0;

            foreach($datasRevenueForChart as $dataRevenueForChart){
                if($dataRevenueForChart->month == $i){
                    $countRevenue = $dataRevenueForChart->total_amount;
                    break;
                }
            }

            array_push($labelsRevenue,$monthRevenue);
            array_push($dataRevenue,$countRevenue);
        }
        
        $datasetsRevenue = [
            [
                'label' => 'Thống kê doanh thu',
                'data' => $dataRevenue,
                'backgroundColor' => $colors,
                'borderColor' =>'rgba(154, 205, 50, 1)',
                'borderWidth' => '1'
            ]
        ];
        return view('admin.statistical.chart', compact('datasets','labels','datasetsRevenue','labelsRevenue'));
    }
}