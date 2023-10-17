import { Sequelize, DataTypes, Deferrable } from "sequelize";
const sequelize = new Sequelize({
    host: "localhost",
    dialect: "postgres",
    port: 5432,
    database: "testVimes",
    username: "postgres",
    password: "nooneknow1608",
});
const BoPhan = sequelize.define("bo_phan", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    donVi: {
        type: DataTypes.INTEGER,
        references: {
            model: "don_vis",
            key: "id",
            deferrable: new Deferrable.INITIALLY_IMMEDIATE(),
        },
        allowNull: false,
    },
});
export default BoPhan;
