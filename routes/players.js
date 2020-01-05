const express = require('express');
const router = express.Router();
const {
  getPlayers,
  getPlayer,
  getSelectedPlayers,
  createPlayer,
  updatePlayer,
  deletePlayer
} = require('../controllers/players');

router
  .route('/')
  .get(getPlayers)
  .post(createPlayer);

router
  .route('/selected')
  .get(getSelectedPlayers)

router
  .route('/:id')
  .get(getPlayer)
  .put(updatePlayer)
  .delete(deletePlayer);

module.exports = router;
