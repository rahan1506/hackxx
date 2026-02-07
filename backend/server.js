

const express = require("express");
const cors = require("cors");
const simulateRoute = require("./routes/stimulate");
const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("CareerSim Backend is running 🚀");
});

// Start server
app.use("/simulate", simulateRoute);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
