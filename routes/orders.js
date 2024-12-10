const express = require("express");
const {
  getUserOrders,
  addOrder,
  deleteOrder,
  updateOrder,
} = require("../controllers/ordersController");
const { authenticateToken } = require("../middleware/auth");
const router = express.Router();

router.get("/orders/:userId", authenticateToken, getUserOrders);
router.post("/orders", authenticateToken, addOrder);
router.delete("/orders/:id", authenticateToken, deleteOrder);
router.patch("/orders/:id", authenticateToken, updateOrder);

module.exports = router;
