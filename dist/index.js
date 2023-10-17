var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createRequire as _createRequire } from "module";
const __require = _createRequire(import.meta.url);
const express = __require("express");
const app = express();
import { Sequelize } from "sequelize";
const PORT = process.env.PORT || 8000;
import cors from "cors";
import bodyParser from "body-parser";
import { createNewPhieuNhapKho } from "./src/controllers/phieu-nhap-kho.js";
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
const checkDatabaseConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        console.log("Connection has been established successfully.");
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});
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
