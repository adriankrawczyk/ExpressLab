const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const bookRoutes = require("./routes/books"); // Import book routes
const userRoutes = require("./routes/users");
const orderRoutes = require("./routes/orders");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.json()); // Ensure JSON is parsed properly

// Register routes
app.use("/api", bookRoutes);
app.use("/api", userRoutes);
app.use("/api", orderRoutes);
const sequelize = require("./models/index");

sequelize
  .sync({ alter: true }) // Synchronizes the database schema
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((err) => {
    console.error("Database synchronization error:", err);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
