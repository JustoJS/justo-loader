//imports
const Loader = require("../../../dist/es5/nodejs/justo-loader").Loader;

//suite
describe("Loader", function() {
  const DATA = "test/unit/data/";

  describe("#load()", function() {
    it("load(file) - existing", function() {
      Loader.load(DATA, "Valid.js");
    });

    it("load(file) - not existing", function() {
      Loader.load.must.raise(Error, [DATA, "Unknown.js"]);
    });

    it("load(file) - syntax error into thee file", function() {
      Loader.load.must.raise(SyntaxError, [DATA, "Invalid.js"]);
    });
  });
});
