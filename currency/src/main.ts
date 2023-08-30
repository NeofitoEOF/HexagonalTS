import express from "express";
const app = express();
app.get("/currencies", function (req, res) {
  res.json({
    usd: 5,
  });
});
app.listen(3001);
