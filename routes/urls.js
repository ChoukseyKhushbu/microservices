const express = require("express");
const Router = express.Router();
const homeData = require("../MockData/urls.json");

Router.get("/", (req, res) => {
  res.json("no stock provided");
});

Router.get("/:stockID", (req, res) => {
  try {
    const { stockID } = req.params;
    // console.log(homeData.urls);
    let links = homeData.urls.map((link) => link.replace(":stockID", stockID));
    // console.log(links);
    res.status(200).json(links);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = Router;
