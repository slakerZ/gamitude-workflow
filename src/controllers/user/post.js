const express = require('express');
const User = require('../../models/user');
const router = express.Router();
const axios = require('axios');

const ranksUrl = process.env.RANKS_URL || 'http://localhost:3020';

/* POST new user */
router.post('/', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();

        res.status(201).send(user);
    } catch (e) {
        res.status(400).send();
    }
});

module.exports = router;
