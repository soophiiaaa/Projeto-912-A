const express = require('express');
const { readData, saveData } = require('../database/database');
const router = express.Router()

const DATABASE = 'profiles.json';

router.get('/profiles', (req, res) => {
    const users = readData(DATABASE);
    res.status(200).json({ users: users });
})

router.post('/profiles', async (req, res) => {
    if (req.body.theme && req.body.userId) {
        const profiles = readData(DATABASE);
        const profile = {
            id: new Date().getTime(),
            userId: req.body.userId,
            theme: req.body.theme
        }
        profiles.push(profile);
        saveData(DATABASE, profiles);
        res.status(201).json({ profile });
    } else {
        res.status(400).json({ error: "Theme and userId are mandatory." });
    }
});

router.delete('/profiles/:id', (req, res) => {
    const profileId = req.params.id;

    const profiles = readData(DATABASE);
    const index = profiles.findIndex(profile => (profile.id == profileId));

    if (index == -1) {
        res.status(404).json({ error: "Profile not found." });
    } else {
        profiles.splice(index, 1);
        saveData(DATABASE, profiles);
        res.status(200).json({ message: 'Profile successfully removed.' });
    }
});

router.put('/profiles/:id', async (req, res) => {
    const profileId = req.params.id;
    const { theme } = req.body;

    if (theme) {
        const profiles = readData(DATABASE);
        const index = profiles.findIndex(profile => (profile.id == profileId));

        if (index == -1) {
            res.status(404).json({ error: "Profile not found." });
        } else {
            profiles[index].theme = theme;
            saveData(DATABASE, profiles);
            res.status(200).json({ profile: {
                id: profileId,
                userId: profiles[index].userId,
                theme: theme   
            } });
        }
    } else {
        res.status(400).json({ error: "Theme is mandatory." });
    }

});

module.exports = router;