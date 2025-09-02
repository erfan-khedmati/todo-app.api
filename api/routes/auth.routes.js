import express from "express";
import User from "../model/User.js"
const router = express.Router();

// App User
router.post("/register", async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    };
});

// Delete User
router.delete("/delete-user", async(req, res)=> {
    try {
        const Id = req.params.id;
        const deleteUser = await User.findByIdAndDelete(Id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;