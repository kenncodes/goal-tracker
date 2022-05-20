const mongoose = require('mongoose')

const goalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    difficulty: {
        type: Number,
        min: 0,
        max: 2
    },
    time: {
        type: Number,
    },
    category:{
        type: String,
        required: true
    },
    completed: {
        type: boolean
    }
})