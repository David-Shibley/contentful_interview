const ResizeController = require("../controllers/resize.controller");
const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();

const getResizeValidators = [
  check("height").isNumeric().escape(),
  check("width").isNumeric().escape(),
  check("path").escape(),
];

router.get("/resize/:path", getResizeValidators, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() });
    }
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
