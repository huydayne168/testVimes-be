import express from "express";
import { createNewPhieuNhapKho } from "../controllers/phieu-nhap-kho.js";
const route = express.Router();
// add phieu nhap kho:
route.post("/add", createNewPhieuNhapKho);
export { route };
