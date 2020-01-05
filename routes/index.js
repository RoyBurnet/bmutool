const express = require('express');
const router = express.Router();
const Tournament = require('../models/Tournament');
/* GET home page. */
router.get('/', async (req, res, next) => {
  const tournament = await Tournament.find();

  res.render('layouts/main',{ title: 'Express', someVariable: 'example', count: tournament.length });
});

module.exports = router;