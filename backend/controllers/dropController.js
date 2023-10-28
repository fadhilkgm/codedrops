const Drop = require('../models/drop');

const dropController = {
    create: async (req, res) => {
        try {
            const { dropname, dropbody, tags, username, userid } = req.body;
            const newDrop = new Drop({ dropname, dropbody, tags, username, userid });
            await newDrop.save();
            res.json({ msg: 'Drop created', data: newDrop });
        } catch (error) {
            res.status(500).json({ msg: 'Error creating drop', error: error.message });
        }
    },
    getAll: async (req, res) => {
        try {
            const drops = await Drop.find();
            res.json({ msg: 'OK', data: drops });
        } catch (error) {
            res.status(500).json({ msg: 'Error fetching drops', error: error.message });
        }
    },
    getById: async (req, res) => {
        try {
            const dropId = req.params.id;
            const drop = await Drop.findById(dropId);
            if (drop) {
                res.json({ msg: 'Drop found', data: drop });
            } else {
                res.status(404).json({ msg: 'Drop not found' });
            }
        } catch (error) {
            res.status(500).json({ msg: 'Error fetching drop', error: error.message });
        }
    },
    updateById: async (req, res) => {
        try {
            const { dropname, dropbody, tags, username, userid } = req.body;
            const updatedDrop = await Drop.findOneAndUpdate({ _id: req.params.id }, { dropname, dropbody, tags, username, userid }, { new: true });
            if (updatedDrop) {
                res.json({ msg: 'Drop updated', data: updatedDrop });
            } else {
                res.status(404).json({ msg: 'Drop not found' });
            }
        } catch (error) {
            res.status(500).json({ msg: 'Error updating drop', error: error.message });
        }
    },
    deleteById: async (req, res) => {
        try {
            const deletedDrop = await Drop.findOneAndDelete({ _id: req.params.id });
            if (deletedDrop) {
                res.json({ msg: 'Drop deleted', data: deletedDrop });
            } else {
                res.status(404).json({ msg: 'Drop not found' });
            }
        } catch (error) {
            res.status(500).json({ msg: 'Error deleting drop', error: error.message });
        }
    },
    getAllDropsByUser: async (req, res) => {
        try {
            const userId = req.params.userId; // Extract user ID from request parameters
            const drops = await Drop.find({ userid: userId }); // Find drops by user ID
            res.json({ msg: 'Drops found for the user', data: drops });
        } catch (error) {
            res.status(500).json({ msg: 'Error fetching drops for the user', error: error.message });
        }
    },
    getAllDropsByTag: async (req, res) => {
        try {
            const tag = req.params.tag; // Extract tag from request parameters
            const drops = await Drop.find({ tags: tag }); // Find drops by tag
            res.json({ msg: 'Drops found for the tag', data: drops });
        } catch (error) {
            res.status(500).json({ msg: 'Error fetching drops for the tag', error: error.message });
        }
    },
};

module.exports = dropController;
