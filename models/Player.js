const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please your first name'],
    trim: true,
    maxlength: [50, 'Name can not be longer than 50 characters']
  },
  lastName: {
    type: String,
    required: [true, 'please enter your last name'],
    trim: true,
    maxlength: [50, 'Name can not be longer than 50 characters']
  },
  artistName: {
    type: String,
    required: [true, 'Please enter your artist name'],
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
  selected:{
    type: Boolean,
    default: false,
  },
  win: {
    type: Boolean,
    default: false
  },
  stats: {
    upvotes:{
      type: Number
    },
    downvotes:{
      type: Number
    }, 
    matcheswon: {
      type: Array
    },
    matcheslost:{
      type: Array
    },
    tournamentsWon:{
      type: Array
    },
    totalTournaments:{
      type: Number
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Player', PlayerSchema);
