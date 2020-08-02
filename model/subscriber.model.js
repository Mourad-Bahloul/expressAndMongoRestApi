const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    channel: {
        type: String,
        required: true
    },
    subscriptionDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('subscribers', subscriberSchema)
