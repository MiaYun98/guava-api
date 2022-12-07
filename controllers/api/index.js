const router = require('express').Router();
const userRoutes = require('./user-routes');
const profileRoutes = require('./profile-routes');
const shrubsRoutes = require('./shrub-routes');
const itemRoutes = require('./item-routes');
const profileTagRoutes = require('./profiletag-routes');
const shrubTagRoutes = require('./shrubtag-routes');
const naturalRoutes = require('./natural')

router.use('/natural', naturalRoutes)
router.use('/user', userRoutes);
router.use('/profile', profileRoutes);
router.use('/shrub', shrubsRoutes);
router.use('/item', itemRoutes);
router.use('/profiletag', profileTagRoutes);
router.use('/shrubtag', shrubTagRoutes);

module.exports = router;
