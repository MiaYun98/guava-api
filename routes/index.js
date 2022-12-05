const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
// router.use('/users, ')

router.use((req, res) => {
    return res.send("wrong route!");
});

module.exports = router;