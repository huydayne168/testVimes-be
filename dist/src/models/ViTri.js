import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize({
    host: "localhost",
    dialect: "postgres",
    port: 5432,
    database: "testVimes",
    username: "postgres",
    password: "nooneknow1608",
});
const ViTri = sequelize.define("vi_tri", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
export default ViTri;
