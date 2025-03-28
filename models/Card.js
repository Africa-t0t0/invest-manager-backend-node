const { DataTypes } = require("sequelize");
const sequelize = require('../database');

const Card = sequelize.define("Card", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    lastNumbers: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    paymentDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
},
{
    timestamps: true,
    createdAt: "fecha_creacion",
});

module.exports = Card;