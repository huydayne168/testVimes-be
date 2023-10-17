var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Kho from "../models/Kho.js";
const getKhos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const khos = yield Kho.findAll({
            attributes: ["id", "name", "diaDiem"],
        });
        return res.json(khos);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
export { getKhos };
