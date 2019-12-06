const express = require('express');
const router = express.Router();

/* GET user body energy */
router.get('/workflow/energy/body/', (req, res) => {
    res.json({ body: 100 });
});

module.exports = router;
