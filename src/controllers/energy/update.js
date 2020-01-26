const express = require('express');
const Energy = require('../../models/energy');
const router = express.Router();

/* PATCH user energy */
router.patch('/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["mind", "body", "emotional", "soul"];
    const isValidOperation = updates.every(value => allowedUpdates.includes(value));
    if (!isValidOperation) {
        res.status(400).send({error: "Invalid updates!"})
    }
    try {
        const energy = await Energy.findOneAndUpdate({userId: req.params.id}, req.body, { new: true, runValidators: true});
        energy ? res.send(energy) : res.status(404).send({error: "User not found!"});
    } catch (err) {
        res.status(400).send();
    }
});

module.exports = router;