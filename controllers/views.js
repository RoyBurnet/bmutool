const asyncHandler = require('../middleware/async');
const Tournament = require('../models/Tournament');

exports.home = asyncHandler(async(req, res) => {
  const tournament = await Tournament.find();
  
  res.render('home', { title: 'Hey', message: 'Hello there!', count: tournament.length, data: tournament})
})


