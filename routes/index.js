const express = require('express');
const router = express.Router();
const Tournament = require('../models/Tournament');

/* GET home page. */
router.get('/', async (req, res, next) => {
  const tournament = await Tournament.find();
  const sum = (a, b) => a * b;

  res.render('layouts/main', {
    title: 'BMU TOOL',
    someVariable: 'example',
    count: tournament.length,
    sum: sum(4, 5)
  });
});

module.exports = router;
