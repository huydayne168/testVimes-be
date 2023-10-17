import { NextFunction, Request, Response } from "express";
import DonVi from "../models/DonVi.js";
import BoPhan from "../models/BoPhan.js";

const getBoPhans = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const boPhans = await BoPhan.findAll({
            attributes: ["id", "name", "donVi"],
        });
        return res.json(boPhans);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export { getBoPhans };
