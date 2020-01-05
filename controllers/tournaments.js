const asyncHandler = require('../middleware/async');
const Tournament = require('../models/Tournament');

//@desc   GET all tournaments
//@route  GET /api/v1/tournament
//@access Public
exports.getTournaments = asyncHandler(async (req, res) => {
  const tournament = await Tournament.find();

  res
    .status(200)
    .json({ success: true, count: tournament.length, data: tournament })
    .render('index')
});

//@desc   GET single tournament
//@route  GET /api/v1/tournament/:id
//@access Public
exports.getTournament = asyncHandler(async (req, res) => {
  const tournament = await Tournament.findById(req.params.id);

  if (!tournament) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: tournament });
});

//@desc   Create new tournament
//@route  POST /api/v1/tournament
//@access Private
exports.createTournament = asyncHandler(async (req, res) => {
  const tournament = await Tournament.create(req.body);

  res.status(200).json({
    success: tournament,
    data: tournament
  });
});

//@desc   update tournament
//@route  PUT /api/v1/tournament/:id
//@access Private
exports.updateTournament = asyncHandler(async (req, res) => {
  const tournament = await Tournament.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!tournament) {
    return res.status(400).json({ success: false });
  }

  res.status(200).json({ success: true, data: tournament });
});

//@desc   Delete single tournament
//@route  DEL /api/v1/tournament/:id
//@access Private
exports.deleteTournament = asyncHandler(async (req, res) => {
  const tournament = await Tournament.findByIdAndDelete(req.params.id);

  if (!tournament) {
    return res.status(400).json({ success: false });
  }

  res.status(200).json({ success: true, data: {} });
});
