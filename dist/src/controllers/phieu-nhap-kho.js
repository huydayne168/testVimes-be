var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import PhieuNhapKho from "../models/PhieuNhapKho.js";
const createNewPhieuNhapKho = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, donVi, boPhan, thoiGian, so, no, co, theo, theoSo, ngay, thang, nam, cua, kho, tableData, tong, tongSoTienVietBangChu, soChungTuGoc, nguoiLapPhieu, nguoiGiaoHang, thuKho, keToanTruong, } = req.body.formData;
        const newPhieuNhapKho = yield PhieuNhapKho.create({
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
    }
    catch (error) {
        console.log(error);
    }
});
export { createNewPhieuNhapKho };
