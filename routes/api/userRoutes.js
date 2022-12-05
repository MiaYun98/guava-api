const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Profile } = require('../models');

router.get("/", (req, res) => {
  User.findAll().then(userData => {
    res.json(userData)
  }).catch(err => {
    console.log(err);
    res.json({
      msg: "an error occurred",
      err,
    })
  })
})

router.post("/", (req, res) => {
  User.create(req.body).then(newUser => {
    const token = jwt.sign({
      id: newUser.id,
      email: newUser.email
    }, process.env.JWT_SECRET, {
      expiresIn: "2h"
    })
    return res.json({
      token,
      user: newUser
    })
  })
})

router.get("/getuserfromtoken", (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const userData = jwt.verify(token, process.env.JWT_SECRET)
    res.json({ user: userData })
  } catch (error) {
    res.status(500).json({ user: false })
  }
})

router.get("/:id", (req, res) => {
  User.findByPk(req.params.id, {
    include: [Profile]
  }).then(userData => {
    res.json(userData)
  }).catch(err => {
    console.log(err);
    res.json({
      msg: "an error occurred",
      err,
    })
  })
})

router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(foundUser => {
    if (!foundUser) {
      return res.status(401).json({ msg: "invalid login credentials" })
    } else if (!bcrypt.compareSync(req.body.password, foundUser.password)) {
      return res.status(401).json({ msg: "invalid login credentials" })
    } else {
      const token = jwt.sign({
        id: foundUser.id,
        email: foundUser.email
      }, process.env.JWT_SECRET, {
        expiresIn: "2h"
      })
      return res.json({
        token,
        user: foundUser
      })
    }
  })
})


module.exports = router;