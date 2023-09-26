const expressServer = require("express");
const ResizeRoute = require("./routes/resize.route");
const app = expressServer();
const port = 3000;

app.use(ResizeRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
