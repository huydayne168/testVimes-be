import { Sequelize, DataTypes, Deferrable } from "sequelize";
const sequelize = new Sequelize({
    host: "localhost",
    dialect: "postgres",
    port: 5432,
    database: "testVimes",
    username: "postgres",
    password: "nooneknow1608",
});
const NhanSu = sequelize.define("nhan_su", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    viTri: {
        type: DataTypes.INTEGER,
        references: {
            model: "vi_tris",
            key: "id",
            deferrable: new Deferrable.INITIALLY_IMMEDIATE(),
        },
        allowNull: false,
    },
});
export default NhanSu;
