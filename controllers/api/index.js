const router = require('express').Router();
const userRoutes = require('./user-routes');
const profileRoutes = require('./profile-routes');
const shrubsRoutes = require('./shrub-routes');
const itemRoutes = require('./Item-routes');

router.use('/user', userRoutes);
router.use('/profile', profileRoutes);
router.use('/shrub', shrubsRoutes);
router.use('/Item', shrubsRoutes);


module.exports = router;
