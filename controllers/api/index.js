const router = require('express').Router();
const charRoutes = require('./charRoutes');
const userRoutes = require('./userRoutes');
const gameRoutes = require('./gameRoutes');

router.use('/character', charRoutes);
router.use('/users', userRoutes);
router.use('/game', gameRoutes);

module.exports = router;
