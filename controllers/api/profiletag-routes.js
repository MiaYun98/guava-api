const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User, Profile, Shrub, ProfileTag, Item } = require('../../models');

router.get('/', (req, res) => {
    ProfileTag.findAll().then(allTag =>
        res.json(allTag)
    )
})

// api/profileTag/:id
router.get("/current", (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const userData = jwt.verify(token, process.env.JWT_SECRET)
        User.findOne({
            where: {
                id: userData.id
            },
            include:[Profile]
        }).then(userData => {
            ProfileTag.findAll({
                where: {
                    ProfileId: userData.Profile.id
                }
            }).then(items => {
                res.json(items)
            })
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ mes: "no shrubs with this user" })
    }
})

router.post("/add", (req, res) => {
    ProfileTag.create({
        ProfileId: req.body.ProfileId,
        ItemId: req.body.ItemId
    }).then(tagData => {
        res.json(tagData)
    }).catch(err => {
        console.log(err);
        res.status(500).json({ err: err })
    })
})

module.exports = router; 