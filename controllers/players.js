const asyncHandler = require('../middleware/async');
const Player = require('../models/Player');


//@desc   GET all players
//@route  GET /api/v1/player
//@access Public
exports.getPlayers = asyncHandler(async (req, res) => {
  const player = await Player.find();

  res
    .status(200)
    .json({ success: true, count: player.length, data: player });
});


//@desc   GET selected players
//@route  GET /api/v1/player/selected
//@access Public
exports.getSelectedPlayers = asyncHandler(async (req, res) => {
  const players = await Player.find({selected: true});

  res
    .status(200)
    .json({ success: true, count: players.length, data: players});
});

//@desc   GET single player
//@route  GET /api/v1/player/:id
//@access Public
exports.getPlayer = asyncHandler(async (req, res) => {
  const player = await Player.findById(req.params.id);

  if (!player) {
    return next(
      new ErrorResponse(`Player not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ success: true, data: player });
});

//@desc   Create new player
//@route  POST /api/v1/player
//@access Private
exports.createPlayer = asyncHandler(async (req, res) => {
  const player = await Player.create(req.body);

  res.status(200).json({
    success: player,
    data: player
  });
});

//@desc   update plauyer
//@route  PUT /api/v1/player/:id
//@access Private
exports.updatePlayer = asyncHandler(async (req, res) => {
  const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!player) {
    return res.status(400).json({ success: false });
  }

  res.status(200).json({ success: true, data: player });
});

//@desc   Delete single player
//@route  DEL /api/v1/player/:id
//@access Private
exports.deletePlayer = asyncHandler(async (req, res) => {
  const player = await Player.findByIdAndDelete(req.params.id);

  if (!player) {
    return res.status(400).json({ success: false });
  }

  res.status(200).json({ success: true, data: {} });
});
