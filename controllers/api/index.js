const router = require('express').Router();
const userRoutes = require('./user-routes');
const profileRoutes = require('./profile-routes');
const shrubsRoutes = require('./shrub-routes');

router.use('/users', userRoutes);
router.use('/profile', profileRoutes);
router.use('/shrubs', shrubsRoutes);

module.exports = router;
