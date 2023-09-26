const ResizeService = require("../services/resize.service");

async function resize(req) {
  const { height = 300, width = 300 } = req.query;
  const { path } = req.params;
  return await ResizeService.resize(
    `./images/${path}`,
    Number(width),
    Number(height)
  );
}

module.exports = {
  resize,
};
