const Order = require("../models/Order");
const Book = require("../models/Book");

exports.getUserOrders = async (req, res) => {
  const userId = req.params.userId;
  const orders = await Order.findAll({ where: { userId } });
  res.json(orders);
};

exports.addOrder = async (req, res) => {
  const { bookId, quantity } = req.body;

  const book = await Book.findByPk(bookId);
  if (!book) return res.status(404).json({ error: "Book not found" });

  const order = await Order.create({ userId: req.user.id, bookId, quantity });
  res.json({ id: order.id });
};

exports.deleteOrder = async (req, res) => {
  const orderId = req.params.id;
  const order = await Order.destroy({ where: { id: orderId } });
  res.json(order ? { message: "Order deleted" } : { error: "Order not found" });
};

exports.updateOrder = async (req, res) => {
  const orderId = req.params.id;
  const { quantity } = req.body;

  const order = await Order.findByPk(orderId);
  if (!order) return res.status(404).json({ error: "Order not found" });

  order.quantity = quantity;
  await order.save();
  res.json({ message: "Order updated" });
};
