const router = require('express').Router();
const { Barberfoto, Contact } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const foto = await Barberfoto.findAll();
    res.status(200).json(foto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Barberfoto.destroy({ where: { id } });
    res.status(200).send('Запись успешно удалена');
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

router.get('/contact', async (req, res) => {
  try {
    const foto = await Contact.findAll();
    res.status(200).json(foto);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});


//редактирование
router.put('/contact/', async (req, res) => {
  try {
    const { adress, telephone, id } = req.body;
    if (Number(id)) {
      const entrie = await Contact.findOne({ where: { id } });
      if (adress && telephone) {
        await entrie.update({ adress, telephone });
        res.json(entrie);
      } else {
        res.status(400).send('Нет необходимых данных для изменений');
      }
    } else {
      res.status(400).send('Запись по такому id не найдена');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});


module.exports = router;
