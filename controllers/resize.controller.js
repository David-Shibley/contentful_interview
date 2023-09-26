const sharp = require("sharp");

async function resize(path, width, height) {
  const transformer = new sharp(path).resize(width, height);
  return await transformer.toBuffer();
}

module.exports = {
  resize,
};
