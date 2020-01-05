const express = require('express');
const router = express.Router();
const {
  getTournaments,
  getTournament,
  createTournament,
  updateTournament,
  deleteTournament
} = require('../controllers/tournaments');

router
  .route('/')
  .get(getTournaments)
  .post(createTournament);

router
  .route('/:id')
  .get(getTournament)
  .put(updateTournament)
  .delete(deleteTournament);

module.exports = router;
