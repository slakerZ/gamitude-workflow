const mongoose = require('mongoose');

const User = mongoose.model('User', {
    firebaseId: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    displayName: {
        type: String,
        trim: true,
    }
});

module.exports = User;