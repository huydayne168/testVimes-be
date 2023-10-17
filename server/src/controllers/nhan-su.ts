import { NextFunction, Request, Response } from "express";
import NhanSu from "../models/NhanSu.js";

const getNhanSus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const nhanSus = await NhanSu.findAll({
            attributes: ["id", "name", "viTri"],
        });
        return res.json(nhanSus);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export { getNhanSus };
