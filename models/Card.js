const { DataTypes } = require("sequelize");
const sequelize = require('../database');

const Banks = require("./Banks");
const User = require("./User");

const Card = sequelize.define("Card", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: User,
            key: "id"
        }
    },
    bankId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Banks,
            key: "id"
        }
    },
    cardType: {
        type: DataTypes.ENUM("debit", "credit", "prepaid"),
        allowNull: false
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