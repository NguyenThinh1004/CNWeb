<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SinhVien;

class SinhVienController extends Controller
{
    // Hiển thị danh sách sinh viên
    public function index()
    {
        $danhSachSV = SinhVien::all();
        return view('sinhvien.list', compact('danhSachSV'));
    }

    // Lưu sinh viên mới
    public function store(Request $request)
    {
        $data = $request->all();
        SinhVien::create($data);

        return redirect()->route('sinhvien.index');
    }
}
