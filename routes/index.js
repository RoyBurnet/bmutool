const express = require('express');
const router = express.Router();

const {
  home,
} = require('../controllers/views');

router
  .route('/')
  .get(home)
  // .post(createTournament);

// router
//   .route('/:id')
//   .get(getTournament)
//   .put(updateTournament)
//   .delete(deleteTournament);


module.exports = router;