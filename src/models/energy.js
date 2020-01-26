const mongoose = require('mongoose');

const Energy = mongoose.model('Energy', {
    userId: {
        type: String,
        required: true,
        trim: true,
    },
    mind: {
        type: Number,
        required: true,
        default: 0,
        validate(value) {
            if (value < 0 || value > 100) {
                throw new Error('Mind energy value must be between 0 and 100')
            }
        }
    },
    soul: {
        type: Number,
        required: true,
        default: 0,
        validate(value) {
            if (value < 0 || value > 100) {
                throw new Error('Soul energy value must be between 0 and 100')
            }
        }
    },
    body: {
        type: Number,
        required: true,
        default: 0,
        validate(value) {
            if (value < 0 || value > 100) {
                throw new Error('Body energy value must be between 0 and 100')
            }
        }
    },
    emotional: {
        type: Number,
        required: true,
        default: 0,
        validate(value) {
            if (value < 0 || value > 100) {
                throw new Error('Emotional energy value must be between 0 and 100')
            }
        }
    },
});

module.exports = Energy;