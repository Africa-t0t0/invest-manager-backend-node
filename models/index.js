
const Banks = require("./Banks");
const Card = require("./Card");
const Transaction = require("./Transaction");
const User = require("./User");

const sequelize = require("../database");


// User relationships
User.hasMany(Card, {foreignKey: "userId"});
Card.belongsTo(User, {foreignKey: "userId"});

Card.hasMany(Transaction, {foreignKey: "cardId"});
Transaction.belongsTo(Card, {foreignKey: "cardId"});

Banks.hasMany(Card, {foreignKey: "bankId"});
Card.belongsTo(Banks, {foreignKey: "bankId"});


async function syncDatabase() {
  try {
    await sequelize.sync({ alter: true }); // Usa { force: true } para borrar y recrear tablas
    console.log("✅ Base de datos sincronizada");
  } catch (error) {
    console.error("❌ Error sincronizando la base de datos:", error);
  }
}

module.exports = {
    sequelize,
    User,
    Card,
    Banks,
    Transaction,
    syncDatabase,
}
