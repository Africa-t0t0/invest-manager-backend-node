const { DataTypes } = require("sequelize");

const sequelize = require("../database");


const Banks = sequelize.define("Banks", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Banks;
