const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Welcome Route
app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// User Routes
const users = []; // In-memory user storage

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const { id, name, email } = req.body;
  users.push({ id, name, email });
  res.status(201).json({ message: "User added", user: { id, name, email } });
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const userIndex = users.findIndex((user) => user.id == id);

  if (userIndex !== -1) {
    users[userIndex] = { id, name, email };
    res.json({ message: "User updated", user: users[userIndex] });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id == id);

  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.json({ message: "User deleted" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});
const products = [
  { id: 1, name: "Product 1", price: "20", description: "Awesome product", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", price: "30", description: "Another great item", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3", price: "40", description: "Fabulous item", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Product 4", price: "70", description: "Amazing product", image: "https://via.placeholder.com/150" }

];

// Routes
app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  product ? res.json(product) : res.status(404).json({ message: "Product not found" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
