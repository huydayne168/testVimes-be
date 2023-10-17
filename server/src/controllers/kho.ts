import { NextFunction, Request, Response } from "express";

import Kho from "../models/Kho.js";

const getKhos = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const khos = await Kho.findAll({
            attributes: ["id", "name", "diaDiem"],
        });
        return res.json(khos);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export { getKhos };
