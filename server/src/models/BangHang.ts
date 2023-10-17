import { Sequelize, DataTypes, Deferrable } from "sequelize";
import PhieuNhapKho from "./PhieuNhapKho.js";

const sequelize = new Sequelize({
    host: "localhost",
    dialect: "postgres",
    port: 5432,
    database: "testVimes",
    username: "postgres",
    password: "nooneknow1608",
});

// Bảng hàng
const BangHang = sequelize.define("bang_hang", {
    ten: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    maSo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    donViTinh: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    soLuongTheoChungTu: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    soLuongTheoThucNhan: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    donGia: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    thanhTien: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

PhieuNhapKho.hasMany(BangHang);
BangHang.belongsTo(PhieuNhapKho);

export default BangHang;
