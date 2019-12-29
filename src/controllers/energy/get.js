const express = require('express');
const router = express.Router();

/* GET user energy */
router.get('/', (req, res) => {
    res.json({ body: 100, emotional: 50, mind: 76, soul: 0 });
});

/* GET user body energy */
router.get('/body', (req, res) => {
    res.json({ body: 100 });
});

/* GET user emotional energy */
router.get('/emotional', (req, res) => {
    res.json({ emotional: 100 });
});

/* GET user mind energy */
router.get('/mind', (req, res) => {
    res.json({ mind: 100 });
});

/* GET user soul energy */
router.get('/soul', (req, res) => {
    res.json({ soul: 100 });
});

module.exports = router;