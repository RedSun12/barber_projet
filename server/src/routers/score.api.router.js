const router = require('express').Router();
const { User } = require('../../db/models');

router.post('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { score } = req.body;
    console.log(score)
    const user = await User.findByPk(id)
    if (user) {
      user.score = Number(score);
      user.save()
      res.json(user)
    } else {
      res.status(400).send('Запись по id не найдена')
    }
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
});

module.exports = router;
