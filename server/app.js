const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("../models/knexfile");
const knex = require("knex");

const app = express();

// Setup Logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.get("/api/favdogs", async (req, res) => {
  try {
    const fav_dogs = await knex(db)
      .select()
      .table("fav_dogs");
    res.json(fav_dogs);
  } catch (err) {
    console.error("Error loading data!", err);
    res.sendStatus(500);
  }
});

// Always return the main index.html, since we are developing a single page application
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
