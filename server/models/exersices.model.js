import mongoose from 'mongoose';

const positionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  duration: {
    type: Number, // Duration in seconds
  },
  positions: [positionSchema], // Array of positions,
  exerciseImage: {
    type: String, // URL of the exercise image
  },
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

export default Exercise;
