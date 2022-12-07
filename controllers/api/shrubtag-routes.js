const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User, Profile, Shrub, ProfileTag, Item, ShrubTag } = require('../../models');

router.get('/', (req, res) => {
    ShrubTag.findAll().then(allTag =>
        res.json(allTag)
    )
})

// api/shrubtag/:id
router.get("/current", (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const userData = jwt.verify(token, process.env.JWT_SECRET)
        Profile.findOne({
            where: {
                UserId: userData.id
            },
            include:[Shrub]
        }).then(userData => {
            ShrubTag.findAll({
                where: {
                    ShrubId: userData.Shrub.id
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

// updating the clothes
// router.post("/changing", (req, res) => {
//     try{
//         const token = req.headers.authorization.split(" ")[1];
//         const userData = jwt.verify(token, process.env.JWT_SECRET);
//         Profile.findOne({
//             where: {
//                 UserId: userData.id
//             },
//             include:[Shrub]
//         }).then(userData => {
//             ShrubTag.create({
//                 ShrubId: userData.Shrub.id,
//                 itemId: req.body.ItemId
//             }).then(added=> {
//                 res.json(added)
//             })
//         })
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ mes: "no shrubs with this user" })
//     }
// })

module.exports = router; 