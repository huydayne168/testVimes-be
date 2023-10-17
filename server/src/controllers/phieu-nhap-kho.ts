import { Request, Response } from "express";
import PhieuNhapKho from "../models/PhieuNhapKho.js";
import BangHang from "../models/BangHang.js";

const createNewPhieuNhapKho = async (req: Request, res: Response) => {
    try {
        const {
            id,
            donVi,
            boPhan,
            thoiGian,
            so,
            no,
            co,
            theo,
            theoSo,
            ngay,
            thang,
            nam,
            cua,
            kho,
            tableData,
            tong,
            tongSoTienVietBangChu,
            soChungTuGoc,
            nguoiLapPhieu,
            nguoiGiaoHang,
            thuKho,
            keToanTruong,
        } = req.body.formData;

        const newPhieuNhapKho = await PhieuNhapKho.create({
            donVi: donVi.id,
            boPhan: boPhan.id,
            thoiGian: new Date(thoiGian),
            so,
            no,
            co,
            theo,
            theoSo,
            ngay,
            thang,
            nam,
            cua,
            kho: kho.id,
            tong,
            tongSoTienVietBangChu,
            soChungTuGoc,
            nguoiLapPhieu: nguoiLapPhieu.id,
            nguoiGiaoHang: nguoiGiaoHang.id,
            thuKho: thuKho.id,
            keToanTruong: keToanTruong.id,
        });

        console.log(newPhieuNhapKho);

        // store bảng hàng:
        // tableData.forEach(async (item: any) => {
        //     await BangHang.create({...item, phieu_nhap_khoId: newPhieuNhapKho.id})
        // });
    } catch (error) {
        console.log(error);
    }
};

export { createNewPhieuNhapKho };
