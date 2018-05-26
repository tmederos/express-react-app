const express = require('express')

const messageController = require('../controllers').messages

const router = express.Router()

router.get('/', (req, res) => {
  messageController.getAll().then( messages => {
    res.json( messages)
  }).catch(err => {
    console.error(err)
    res.status(500).send()
  })
})

router.get('/post', (req, res) => {
  messageController.create(req.query).then( message => {
    res.json(message)
  }).catch(err => {
    console.error(err)
    res.status(500).send()
  })
})

module.exports = router