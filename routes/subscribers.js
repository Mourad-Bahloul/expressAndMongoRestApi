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
router.get('/:id', getSubscriber, async (req, res) => {
    res.json(res.subscriber)
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
router.patch('/:id', getSubscriber, async (req, res) => {
    
    if(req.body.name) {
        res.subscriber.name = req.body.name
    }
    if(req.body.channel) {
        res.subscriber.channel = req.body.channel
    }

    try {
        const updatedSubscriber = await res.subscriber.save()
        res.json(updatedSubscriber)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

// Deleting one onesubscriber
router.delete('/:id', getSubscriber, async (req, res) => {
    try {
        await res.subscriber.remove()
        res.json('Subscriber deleted')
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// middleware function
async function getSubscriber (req, res, next) {
    let subscriber
    try {
        subscriber = await SubscribersModel.findById(req.params.id)
        if (subscriber == null)
            // leave immediately
            return res.status(404).json({message: 'User not found'})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    res.subscriber = subscriber
    next()
}

module.exports = router