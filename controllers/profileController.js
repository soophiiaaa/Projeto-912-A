const Profile = require('../models/profile');

exports.createProfile = async (req, res) => {
    try {
        const { name, social_media, biography } = req.body;
        const profile = await Profile.create({ name, social_media, biography });
        res.status(201).json(profile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getProfile = async (req, res) => {
    try {
        const userId = req.params.userId
        const profile = [] //apenas um teste
    }
    catch {

    }
}