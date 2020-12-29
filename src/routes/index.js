const asyncHandler = require('express-async-handler');
const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200).json({test: 'successfull'})
})

// sync error
router.get('/sync-error', (req, res) => {
    const error = new Error("Sync Error Handling working")
    error.statusCode = 500
    throw error
})

router.get('/async-error', asyncHandler(async (req, res) => {
    const error = new Error("Async Error Handling working")
    error.statusCode = 500
    throw error
}))

module.exports = router