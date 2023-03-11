const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const loginLimiter = require('../middleware/loginLimiter')
const { login, logout, refresh } = require('../controllers/authController')
router.route('/')
    .post(loginLimiter, login)
router.route('/refresh')
    .get(refresh)

router.route('/logout')
    .post(logout)

module.exports = router  