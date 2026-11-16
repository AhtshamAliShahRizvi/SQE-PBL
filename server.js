require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "SQE Student API is running"
  });
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    console.log("Starting server...");

    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("Server Error:", error.message);
  }
};

startServer();