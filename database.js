const { Sequelize } = require("sequelize");
const SERVICE_NAME = process.env.SERVICE_NAME;

require("dotenv").config();

const sequelize = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        host: SERVICE_NAME,
        dialect: "postgres",
    }
);

module.exports = sequelize;

