const express = require("express");
const Router = express.Router();
const graphData = require("../MockData/graph.json");

Router.get("/", (req, res) => {
  res.json("no stock provided");
});

Router.get("/:stockID", (req, res) => {
  try {
    res.status(200).json(graphData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = Router;
