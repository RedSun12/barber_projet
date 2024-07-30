const express = require('express');
const router = express.Router();
const { User } = require('../../db/models');

router.get('/api/all/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message, status: 500 });
    }
});

module.exports = router;