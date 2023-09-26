const ResizeController = require("../controllers/resize.controller");
const express = require("express");
const router = express.Router();

router.get("/resize/:path", async (req, res) => {
  try {
    const image = await ResizeController.resize(req);
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
