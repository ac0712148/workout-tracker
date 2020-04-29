const express = require("express");
const logger = require("morgan");

// import mongoose

const mongoose = require("mongoose");

const apiRoutes = require("./routes/api");

const PORT = process.env.PORT || 3000;

const app = express();

// use logging middleware
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public", { "extensions": "html"}));

// Create mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trackerdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(apiRoutes);

app.listen(PORT, () => {
    console.log(`App running on port: http://localhost:${PORT}`);
});