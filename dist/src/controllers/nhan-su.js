var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import NhanSu from "../models/NhanSu.js";
const getNhanSus = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nhanSus = yield NhanSu.findAll({
            attributes: ["id", "name", "viTri"],
        });
        return res.json(nhanSus);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
export { getNhanSus };
