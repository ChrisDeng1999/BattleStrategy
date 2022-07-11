const router = require('express').Router();
const charRoutes = require('./charRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/chars', charRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
