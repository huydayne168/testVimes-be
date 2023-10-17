// const { DataTypes } = require("sequelize");
import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize({
    host: "localhost",
    dialect: "postgres",
    port: 5432,
    database: "testVimes",
    username: "postgres",
    password: "nooneknow1608",
});
const DonVi = sequelize.define("don_vi", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
});
export default DonVi;
