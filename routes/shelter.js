const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("All Shelters")
})

router.post('/', (req, res) => {
    res.send('Creating Shelter');
})

router.get('/:id', (req, res) => {
    res.send('ONE SHELTER');
})

module.exports = router; 