const router = require("express").Router();
const TestService = require("../services/TestService");
const asyncHandler = require("express-async-handler");
const testService = new TestService();

router.get("/", (req, res) => {
    const success = testService.generateSuccessfulResponse();
    res.status(200).json(success);
});
router.get("/sync-error", (req, res) => {
    throw testService.generateError();
});
router.get(
    "/async-error",
    asyncHandler(async (req, res) => {
        throw testService.generateError();
    })
);

module.exports = router;
