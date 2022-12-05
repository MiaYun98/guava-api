const express = require('express');
const jwt = require("jsonwebtoken");
const router = express.Router();
const { User, Profile } = require('../../models');

router.get('/', (req, res) => {
    Profile.findAll({
        include: [User]
    }).then(allUser =>
        res.json(allUser)
    )
})

router.post('/', (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const userData = jwt.verify(token, process.env.JWT_SECRET);
        Profile.create({
            money: req.body.money,
            days: req.body.days,
            UserId: userData.id
        }).then(profileData => {
            res.json(profileData)
        }) 
    }catch (err) {
        console.log(err);
        res.status(500).json({msg: "error occurred", err})
    }
})

// router.post('/create', (req, res) => {
//     Profile.create({
//         userRight: req.body.userRight,
//         userWrong: req.body.userWrong,
//         totalGame: req.body.totalGame,
//         UserId: req.session.userInfo.id
//     }).then(data => {
//         res.status(200).json(data)
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json({ err: err })
//     })
// })

// router.put('/update', async (req, res) => {
//     if (!req.session.userInfo) {
//         return res.redirect('/login')
//     }
//     Profile.update({
//         userRight: req.body.userRight,
//         userWrong: req.body.userWrong,
//         totalGame: req.body.totalGame,
//         UserId: req.body.UserId,
//     },
//         {
//             where: {
//                 id: req.body.id
//             }
//         }).then(data => {
//             res.json(data);
//         }).catch(err => {
//             console.log(err);
//             res.status(500).json({ err: err })
//         })
// });

// router.get('/current-user', (req, res) => {
//     if (!req.session.userInfo) {
//         return res.redirect('/login')
//     }
//     Profile.findOne({
//         where: {
//             UserId: req.session.userInfo.id,
//         }
//     }).then(data => {
//         res.json(data);
//     }).catch(err => {
//         res.status(500).json({ err: err })
//     })
// })
module.exports = router; 