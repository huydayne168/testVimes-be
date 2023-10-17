import { Sequelize, DataTypes, Deferrable } from "sequelize";
const sequelize = new Sequelize({
    host: "localhost",
    dialect: "postgres",
    port: 5432,
    database: "testVimes",
    username: "postgres",
    password: "nooneknow1608",
});
const PhieuNhapKho = sequelize.define("don_vi", {
    donVi: {
        type: DataTypes.INTEGER,
        references: {
            model: "don_vis",
            key: "id",
            deferrable: new Deferrable.INITIALLY_IMMEDIATE(),
        },
    },
    boPhan: {
        type: DataTypes.INTEGER,
        references: {
            model: "bo_phans",
            key: "id",
            deferrable: new Deferrable.INITIALLY_IMMEDIATE(),
        },
    },
    thoiGian: {
        type: DataTypes.DATE,
    },
    so: {
        type: DataTypes.INTEGER,
    },
    no: {
        type: DataTypes.INTEGER,
    },
    co: {
        type: DataTypes.INTEGER,
    },
    theo: {
        type: DataTypes.STRING,
    },
    theoSo: {
        type: DataTypes.INTEGER,
    },
    ngay: {
        type: DataTypes.INTEGER,
    },
    thang: {
        type: DataTypes.INTEGER,
    },
    nam: {
        type: DataTypes.INTEGER,
    },
    cua: {
        type: DataTypes.STRING,
    },
    kho: {
        type: DataTypes.INTEGER,
        references: {
            model: "khos",
            key: "id",
            deferrable: new Deferrable.INITIALLY_IMMEDIATE(),
        },
    },
    tong: {
        type: DataTypes.INTEGER,
    },
    tongSoTienVietBangChu: {
        type: DataTypes.STRING,
    },
    soChungTuGoc: {
        type: DataTypes.INTEGER,
    },
    nguoiLapPhieu: {
        type: DataTypes.INTEGER,
        references: {
            model: "nhan_sus",
            key: "id",
            deferrable: new Deferrable.INITIALLY_IMMEDIATE(),
        },
    },
    nguoiGiaoHang: {
        type: DataTypes.INTEGER,
        references: {
            model: "nhan_sus",
            key: "id",
            deferrable: new Deferrable.INITIALLY_IMMEDIATE(),
        },
    },
    thuKho: {
        type: DataTypes.INTEGER,
        references: {
            model: "nhan_sus",
            key: "id",
            deferrable: new Deferrable.INITIALLY_IMMEDIATE(),
        },
    },
    keToanTruong: {
        type: DataTypes.INTEGER,
        references: {
            model: "nhan_sus",
            key: "id",
            deferrable: new Deferrable.INITIALLY_IMMEDIATE(),
        },
    },
});
export default PhieuNhapKho;
