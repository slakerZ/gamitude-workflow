const express = require('express');
const User = require('../../models/user');
const Energy = require('../../models/energy');
const router = express.Router();
const axios = require('axios');

const ranksUrl = 'https://gamitude-ranks.herokuapp.com';

/* POST new user */
router.post('/', async (req, res) => {
    const user = new User(req.body);
    const energy = new Energy({body: 100, mind: 100, emotional: 100, soul: 100, userId: user.firebaseId});
    try {
        await user.save();
        await energy.save();
        axios
            .post(ranksUrl + '/userRank/' + user.firebaseId, {
                userId: user.firebaseId,
            })
            .then(function(response) {
                res.status(201).send(user);
            })
            .catch(function(error) {
                res.status(400).send();
            });
    } catch (e) {
        res.status(400).send();
    }
});

module.exports = router;
