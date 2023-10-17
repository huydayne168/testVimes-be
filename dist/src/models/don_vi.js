const { DataTypes } = require("sequelize");
import { Sequelize } from "sequelize";
const sequelize = new Sequelize();
const DonVi = sequelize.define("don_vi", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING,
    },
});
sequelize.sync({ alter: true });
module.exports = DonVi;
