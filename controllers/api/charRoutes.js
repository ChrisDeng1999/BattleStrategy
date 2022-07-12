const router = require('express').Router();
const { Character } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newChar = await Character.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newChar);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const charData = await Character.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!charData) {
      res.status(404).json({ message: 'No Character found with this id!' });
      return;
    }

    res.status(200).json(charData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
