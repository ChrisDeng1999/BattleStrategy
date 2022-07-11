const router = require('express').Router();
const charRoutes = require('./charRoutes');


router.use('/chars', charRoutes);


module.exports = router;
