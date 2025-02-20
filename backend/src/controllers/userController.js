const User = require("../models/Users");

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



exports.getUserByName = async (req, res) => {
    try {
        const userName = req.params.name;
        const user = await User.findOne({ full_name: { $regex: new RegExp(userName, "i") } });
        if (!user) {
            return res.status(404).json({ message: "User not found !!" });
        }
        return res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



exports.getUserByUserID = async (req, res) => {
    try {

        const user = await User.findOne({ iduser: req.params.userid });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log("User found : ", user);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



exports.updateUserByName = async (req, res) => {
    try {
        const userName = req.params.name;
        const updatedUser = await User.findOneAndUpdate(
            { full_name: { $regex: new RegExp(userName, "i") } },
            req.body,
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found to update!" });
        }

        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



exports.updateUserById = async (req, res) => {
    try {
        const updatedByUserId = await User.findOneAndUpdate(
            { userid: req.params.userid },
            { $set: req.body },
            { new: true, timestamps: true }
        );

        if (!updatedByUserId) {
            return res.status(404).json({ message: "User not found to update!" });
        }

        res.json(updatedByUserId);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



exports.deleteUserByName = async (req, res) => {
    try {
        const userName = req.params.name;
        const deletedUsername = await User.findOneAndDelete({ full_name: { $regex: new RegExp(userName, "i") } });

        if (!deletedUsername) {
            return res.status(404).json({ message: "User not found to delete!" });
        }

        res.json({ message: "User deleted successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.deleteUserById = async (req, res) => {
    try {

        const userId = req.params.iduser;
        const deletedUserid = await User.findOneAndDelete({ iduser: userId })

        if (!deletedUserid) {
            return res.status(404).json({ message: "User id not found to delete!" });
        }

        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: err.message })

    }
}
