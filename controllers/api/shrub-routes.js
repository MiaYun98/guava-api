const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");

const { User, Profile, Shrubs } = require('../../models');

router.get('/', (req, res) => {
    Shrubs.findAll({
        include: [Profile]
    }).then(allUser =>
        res.json(allUser)
    )
})

// api/shrubs/myshrubs
router.get("/myshrub", (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const userData = jwt.verify(token, process.env.JWT_SECRET)
        Shrubs.findOne({
            where: {
                ProfileId: userData.id
            }
        }).then(shrubData => {
            res.json(shrubData)
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ mes: "no shrubs with this user" })
    }

})
module.exports = router; 