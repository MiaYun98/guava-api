const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");

const { User, Profile, Shrub, Item } = require('../../models');

// /api/item/profile including profile info
router.get('/profile', (req, res) => {
    Item.findAll({
        include: [Profile]
    }).then(items =>
        res.json(items)
    ).catch(err => {
        console.log(err)
    })
})

// /api/item/shrub 
router.get('/shrub', (req, res) => {
    Item.findAll({
        include: [Shrub]
    }).then(items =>
        res.json(items)
    ).catch(err => {
        console.log(err)
    })
})


module.exports = router; 