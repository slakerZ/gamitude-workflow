const { ENERGIES, STATS, MAX_ENERGY, MIN_ENERGY, DOMINANT_CON, SELECTED_CON, REST_CON } = require('./constants');

const statsToEnergy = stat => ENERGIES[STATS.indexOf(stat)];

const estimateEnergyLoss = (stats, dominant, time, currEnergy) => {
    const newEnergyStatus = currEnergy;
    const energyToUpdateValues = {
        mind: 0,
        body: 0,
        emotional: 0,
        soul: 0,
    };
    energyToUpdateValues[statsToEnergy(dominant).toLowerCase()] = time * DOMINANT_CON;
    stats.forEach(stat => {
        if (stat !== dominant) energyToUpdateValues[statsToEnergy(stat).toLowerCase()] = time * SELECTED_CON;
    });
    STATS.forEach(stat => {
        if (!stats.includes(stat) && stat !== dominant) {
            energyToUpdateValues[statsToEnergy(stat).toLowerCase()] = time * REST_CON;
        }
    });
    Object.keys(currEnergy._doc).forEach(energy => {
        if (energy !== "userId"){
            newEnergyStatus[energy] = currEnergy[energy] - energyToUpdateValues[energy] > MIN_ENERGY ? currEnergy[energy] - energyToUpdateValues[energy] : MIN_ENERGY
        }
    });
    return newEnergyStatus;
};

module.exports = {
    estimateEnergyLoss
};