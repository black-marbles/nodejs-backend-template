const router = require("express").Router();
const TestController = require("../Controller/TestController");
const testController = new TestController();

router.get("/", testController.get);
router.get("/sync-error", testController.getSyncError);
router.get("/async-error", testController.getAsyncError);

module.exports = router;
