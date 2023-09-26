const Controller = require("../../controllers/resize.controller");
describe("Resize", () => {
  it("Does not error when handed proper values", async () => {
    const path = "./images/image1.png";
    const width = 300;
    const height = 300;
    const result = await Controller.resize(path, width, height);
    expect(async () => {
      await Controller.resize(path, width, height);
    }).rejects.not.toThrow();
  });

  it("Does error when handed improper values", async () => {
    const path = "./images/fake.png";
    const width = "300";
    const height = "300";
    expect(async () => {
      await Controller.resize(path, width, height);
    }).rejects.toThrow();
  });
});
