const express = require('express');
const router = express.Router();

/* PATCH user energy */
router.patch('/', (req, res) => {
    res.json(req.body);
});

/* PATCH user body energy */
router.patch('/body', (req, res) => {
    res.json(req.body);
});

/* PATCH user emotional energy */
router.patch('/emotional', (req, res) => {
    res.json(req.body);
});

/* PATCH user mind energy */
router.patch('/mind', (req, res) => {
    res.json(req.body);
});

/* PATCH user soul energy */
router.patch('/soul', (req, res) => {
    res.json(req.body);
});

module.exports = router;