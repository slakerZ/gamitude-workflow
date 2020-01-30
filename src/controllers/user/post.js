const express = require('express');
const User = require('../../models/user');
const router = express.Router();
const axios = require('axios');

const ranksUrl = process.env.RANKS_URL  || 'https://gamitude-ranks.herokuapp.com';

/* POST new user */
router.post('/', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save(); 
        console.log(ranksUrl,user.firebaseId);
        axios
            .post(ranksUrl + '/userRank/' + user.firebaseId, {
                userId: user.firebaseId,
            })
            .then(function(response) {
                console.log(response);
                res.status(201).send(user);
            })
            .catch(function(error) {
                res.status(400).send(ranksUrl + error);
            });
    } catch (e) {
        res.status(400).send("catch2"+e);
    }
});

module.exports = router;
