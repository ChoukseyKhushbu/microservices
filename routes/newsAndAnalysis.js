const express = require("express");
const Router = express.Router();
const newsAndAnalysisData = require("../MockData/newsAndAnalysis.json");

Router.get("/", (req, res) => {
  res.json("no stock provided");
});

Router.get("/:stockID", (req, res) => {
  try {
    res.status(200).json(newsAndAnalysisData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = Router;
