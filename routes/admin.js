const express = require('express');
const router = express.Router();


router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    res.send("SORRY, NO ACCESS!");
})

router.get('/topsecret', (req, res) => {
    res.send("NO LOOKINNG!!!")
})


router.get('/deleteall', (req, res) => {
    res.send('DELETE EVERYTHING');
})

module.exports = router; 