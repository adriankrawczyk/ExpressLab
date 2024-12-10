const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const Book = require("./Book");
const User = require("./User");

const Order = sequelize.define("Order", {
  userId: {
    type: DataTypes.INTEGER,
    references: { model: User, key: "id" },
    allowNull: false,
  },
  bookId: {
    type: DataTypes.INTEGER,
    references: { model: Book, key: "id" },
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Order;
