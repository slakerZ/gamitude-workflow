const express = require('express');
const Energy = require('../../models/energy');
const router = express.Router();

/* GET user energy */
router.get('/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const energy = await Energy.findOne({userId});
        energy ? res.send(energy) : res.status(404).send({error: "User not found!"});
    } catch (err) {
        res.status(500).send();
    }
});

module.exports = router;
