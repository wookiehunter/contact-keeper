const express = require('express')
const router = express.Router()

// @route   GET api/auth
// @desc    get logged in user
// @access  Private
router.get('/', (req, res) => {
    res.send('Get a logged in user')
})

// @route   POST api/auth
// @desc    authenticate user and get token
// @access  Public
router.post('/', (req, res) => {
    res.send('Authenticate a user')
})

module.exports = router