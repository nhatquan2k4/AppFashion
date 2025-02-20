const express = require("express");
const {
    getUsers,
    getUserByName,
    getUserByUserID,
    updateUserByName,
    updateUserById,
    createUser,
    deleteUserByName,
    deleteUserById
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);
router.get("/get/userid/:userid", getUserByUserID);
router.get("/get/name/:name", getUserByName);
router.put("/update/name/:name", updateUserByName);
router.put("/update/userid/:userid", updateUserById);
router.post("/create/", createUser);
router.delete("/delete/name/:name", deleteUserByName);
router.delete("/delete/userid/:userid", deleteUserById)


module.exports = router;
