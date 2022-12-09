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

router.get('/head', (req, res) => {
    Item.findAll({
        where:{
            type:"head",
        }
    }).then(head => {
        res.json(head)
    }).catch(err => {
        console.log(err)
    })
})

router.get('/eye', (req, res) => {
    Item.findAll({
        where:{
            type:"eye",
        }
    }).then(eye => {
        res.json(eye)
    }).catch(err => {
        console.log(err)
    })
})

router.get('/mouth', (req, res) => {
    Item.findAll({
        where:{
            type:"mouth",
        }
    }).then(mouth => {
        res.json(mouth)
    }).catch(err => {
        console.log(err)
    })
})

router.get("/name/:name", (req, res) => {
    Item.findOne({
        where: {
            name: req.params.name
        }
    }).then(item => {
        res.json(item)
    }).catch(err => {
        console.log(err)
    })
})

router.get("/:id", (req, res) => {
    Item.findOne({
        where: {
            id: req.params.id
        }
    }).then(item => {
        res.json(item)
    }).catch(err => {
        console.log(err)
    })
})

router.post('/create', (req, res) => {
    Shrub.create({
        name: req.body.name,
        type: req.body.mouth,
        stats: req.body.stats   
    }).then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error occurred", err })
    })
})

module.exports = router; 