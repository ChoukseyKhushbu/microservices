const express = require("express");
const homeRouter = require("./routes/urls");
const graphRouter = require("./routes/graph");
const ratesRouter = require("./routes/rates");
const historicalDataRouter = require("./routes/historicalData");
const newsAndAnalysisRouter = require("./routes/newsAndAnalysis");

const app = express();

app.use(express.json());

app.use("/stock", homeRouter);
app.use("/newsAndAnalysis", newsAndAnalysisRouter);
app.use("/historicalData", historicalDataRouter);
app.use("/rates", ratesRouter);
app.use("/graph", graphRouter);

app.listen(8000, () => {
  console.log("listening on port 8000");
});
