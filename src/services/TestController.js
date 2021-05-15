class TestController {
  constructor() {}
  generateSuccessfulResponse() {
    return { test: "successfull" };
  }
  generateError() {
    const error = new Error("Sync Error Handling working");
    error.statusCode = 500;
    return error;
  }
}

module.exports = TestController;
