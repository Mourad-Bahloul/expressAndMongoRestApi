const express = require('express')
const router = express.Router()
const SubscribersModel = require('../model/subscriber.model')

// Getting all subscribers
router.get('/', async (req, res) => {
    try {
        const subscribers = await SubscribersModel.find()
        res.json(subscribers)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Getting onesubscriber
router.get('/:id', async (req, res) => {
})

// Creating one subscriber
router.post('/', async (req, res) => {
    const subscriber = new SubscribersModel({
        name: req.body.name,
        channel: req.body.channel
    })

    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

// Updating one onesubscriber
router.patch('/:id', async (req, res) => {
})

// Deleting one onesubscriber
router.delete('/:id', async (req, res) => {
})


module.exports = router