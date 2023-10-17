import { Request, Response, Application, NextFunction } from "express";
import express = require("express");

const app = express();

import { Sequelize } from "sequelize";

const PORT = process.env.PORT || 8000;

import cors from "cors";
import bodyParser from "body-parser";

import { createNewPhieuNhapKho } from "./src/controllers/phieu-nhap-kho.js";

import DonVi from "./src/models/DonVi.js";
import BoPhan from "./src/models/BoPhan.js";
import Kho from "./src/models/Kho.js";
import ViTri from "./src/models/ViTri.js";
import NhanSu from "./src/models/NhanSu.js";
import { getNhanSus } from "./src/controllers/nhan-su.js";
import { getDonVis } from "./src/controllers/don-vi.js";
import { getBoPhans } from "./src/controllers/bo-phan.js";
import { getKhos } from "./src/controllers/kho.js";

app.use(cors());

const sequelize = new Sequelize({
    host: "localhost",
    dialect: "postgres",
    port: 5432,
    database: "testVimes",
    username: "postgres",
    password: "nooneknow1608",
});

const checkDatabaseConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
checkDatabaseConnection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/api/v1/nhanSu/get", async (req: Request, res: Response) => {
//     const newKho = await NhanSu.create({ name: "Nguyen Van A", viTri: 2 });
//     const newNv = await NhanSu.create({ name: "Nguyen Van B", viTri: 1 });
//     const newNs = await NhanSu.create({ name: "Nguyen Van C", viTri: 3 });
//     console.log(newKho);

//     return res.json({
//         status: 201,
//         message: "Created!",
//     });
// });

app.use("/api/v1/nhanSu/get", getNhanSus);
app.use("/api/v1/donVi/get", getDonVis);
app.use("/api/v1/boPhan/get", getBoPhans);
app.use("/api/v1/kho/get", getKhos);

app.post("/api/v1/phieuNhapKho/add", createNewPhieuNhapKho);

app.listen(PORT, () => {
    console.log("i'm running in port:" + PORT);
});
