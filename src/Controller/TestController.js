const asyncHandler = require("express-async-handler");

class TestControllerSingleton {
  constructor() {}
  get = function (req, res) {
    res.status(200).json({ test: "successfull" });
  };

  getSyncError = function (req, res) {
    const error = new Error("Sync Error Handling working");
    error.statusCode = 500;
    throw error;
  };

  getAsyncError = asyncHandler(async function (req, res) {
    const error = new Error("Async Error Handling working");
    error.statusCode = 500;
    throw error;
  });
}

const TestController = new TestControllerSingleton();
Object.freeze(TestController);

module.exports = TestController;
