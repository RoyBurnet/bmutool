const mongoose = require('mongoose');

const TournamentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name can not be longer than 50 characters']
  },
  location: {
    type: String,
    required: [true, 'Please enter location'],
    trim: true,
    maxlength: [50, 'Name can not be longer than 50 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description can not be more than 500 characters']
  },
  players: {
    name: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Tournament', TournamentSchema);
