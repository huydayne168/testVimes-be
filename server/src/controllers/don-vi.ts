import { NextFunction, Request, Response } from "express";
import DonVi from "../models/DonVi.js";

const getDonVis = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const donVis = await DonVi.findAll({
            attributes: ["id", "name"],
        });
        return res.json(donVis);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export { getDonVis };
