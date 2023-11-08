const express = require('express');
const router = express.Router();

router.get('/v1/users', (req, res) => {
    res.send('Get all users');
});

router.get('/v1/users/:userId', (req, res) => {
    res.send('Get user by userId');
});

router.post('/v1/users', (req, res) => {
    res.send('Create user');
});

router.put('/v1/users/:userId', (req, res) => {
    res.send('Update user by userId');
});

router.delete('/v1/users/:userId', (req, res) => {
    res.send('Delete user by userId');
});

module.exports = router;
