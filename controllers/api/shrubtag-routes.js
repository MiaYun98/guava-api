const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User, Profile, Shrub, ProfileTag, Item, ShrubTag } = require('../../models');

router.get('/', (req, res) => {
    ShrubTag.findAll().then(allTag =>
        res.json(allTag)
    ).catch(err =>{
        console.log(err)
    })
})

// api/shrubtag/current
router.get("/current", (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const userData = jwt.verify(token, process.env.JWT_SECRET)
        Profile.findOne({
            where: {
                UserId: userData.id
            },
            include: [Shrub]
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

// createing new outfit! 
// api/shrubtag/change
router.post("/change", (req, res) => {
    ShrubTag.create({
        ShrubId: req.body.ShrubId,
        ItemId: req.body.ItemId
    }).then(tagData => {
        res.json(tagData)
    }).catch(err => {
        console.log(err);
        res.status(500).json({ err: err })
    })
})

router.delete("/delete", (req, res) => {
    ShrubTag.destroy({
        where: {
            ShrubId: req.body.ShrubId
        }
    }).then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err);
        res.status(500).json({ err: err })
    })
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