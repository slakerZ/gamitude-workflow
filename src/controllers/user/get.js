const express = require('express');
const User = require('../../models/user');
const router = express.Router();

/* GET user by firebase id */
router.get('/:id', async (req, res) => {
    const firebaseId = req.params.id;
    try {
        const user = await User.findOne({firebaseId});
        user ? res.send(user) : res.status(404).send({error: 'User not found!'});
    } catch (err) {
        res.status(500).send();
    }
});

module.exports = router;