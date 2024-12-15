// Import required modules
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./config/Db");

const projectRoute = require("./routes/Project");

// Initialize app and load environment variables
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
dbConnection();

// Middleware
app.use(cors({

    origin:"*"
})); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Basic Routes
app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.use("/api",projectRoute);

// Handle unknown routes
app.use((req, res, next) => {
    res.status(404).json({
        message: "Route not found",
    });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: "An internal server error occurred",
        error: err.message,
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


