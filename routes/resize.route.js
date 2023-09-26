const ResizeController = require("../controllers/resize.controller");
const express = require("express");
const router = express.Router();

router.get("/resize/:path", async (req, res) => {
  try {
    const { height, width } = req.query;
    const { path } = req.params;
    const image = await ResizeController.resize(
      `./images/${path}`,
      Number(width),
      Number(height)
    );
    res.send(image);
  } catch (error) {
    res.status(500);
    if (error instanceof Error) {
      console.log(error);
      res.send(error);
    }
  }
});

module.exports = router;
