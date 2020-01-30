const express = require('express');
const Energy = require('../../models/energy');
const router = express.Router();
const { estimateEnergyLoss } = require('../../utils/energyEstimates');

/* PATCH user energy */
router.post('/', async (req, res) => {
    const { project, projectUsage } = req.body;
    const currEnergy = await Energy.findOne({
        userId: req.body.project.userId,
    });
    const energyUpdated = estimateEnergyLoss(
        project.stats,
        project.dominantStat,
        projectUsage.timeSpend,
        currEnergy
    );
    try {
        const energy = await Energy.findOneAndUpdate(
            { userId: req.body.project.userId },
            energyUpdated,
            { new: true, runValidators: true }
        );
        energy
            ? res.send(energy)
            : res.status(404).send({ error: 'User not found!' });
    } catch (err) {
        res.status(400).send();
    }
});

module.exports = router;
