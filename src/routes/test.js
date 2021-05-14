const router = require("express").Router();
const TestController = require("../Controller/TestController");

router.get("/", TestController.get);
router.get("/sync-error", TestController.getSyncError);
router.get("/async-error", TestController.getAsyncError);

module.exports = router;
