import { Sequelize } from "sequelize";
const { DataTypes } = require("sequelize");
const sequelize = new Sequelize();
const BoPhan = sequelize.define("bo_phan", {
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
module.exports = BoPhan;
