const express = require('express');
const router = express.Router();
const { SentimentAnalyzer, stemmer } = require('natural')

router.post('/', (req, res) => {

    const analyzer = new SentimentAnalyzer("English", stemmer, "afinn");
    console.log(req.body)
    console.log(analyzer.getSentiment(req.body))
    res.json(analyzer.getSentiment(req.body))

})

module.exports = router; 