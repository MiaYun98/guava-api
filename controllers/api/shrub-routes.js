const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");

const { User, Profile, Shrub } = require('../../models');

router.get('/', (req, res) => {
    Shrub.findAll({
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
        Shrub.findOne({
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