const { DataTypes } = require("sequelize");

const sequelize = require("../database");
const Card = require("./Card");


const Transaction = sequelize.define("Transaction", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    cardId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        references: {
            model: Card,
            key: "id"
        },
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    currency: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "CLP"
    },
    status: {
        type: DataTypes.ENUM("pending", "completed", "failed"),
        allowNull: false,
        defaultValue: "pending"
    },
    installments: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    transactionDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

module.exports = Transaction;