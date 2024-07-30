const express = require('express');
const router = express.Router();
const { User } = require('../../db/models/index');

router.get('/api/profile/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findOne({ where: { id: userId } });

        if (user) {
            res.json({
                username: user.username,
                score: user.score,
                status: 200
            });
        } else {
            res.json({ message: 'Пользователь не найден', status: 404 });
        }
    } catch (error) {
        res.json({ message: error.message, status: 500 });
    }
});

module.exports = router;
