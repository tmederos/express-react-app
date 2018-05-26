const express = require('express')

const rounter = express.Router()

const messageRoutes = require('./messages')

router.user('/api/messages/', messageRoutes)

module.exports = router