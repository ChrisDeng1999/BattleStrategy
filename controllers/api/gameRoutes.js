const router = require('express').Router();
const { Game } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    const { characterCard } = req.body
    console.log(req.body);
    try {
      const newChar = await Game.create({
        ...characterCard,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newChar);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });
  
module.exports = router;