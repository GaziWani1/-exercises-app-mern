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
  positions: [positionSchema], // Array of positions
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

export default Exercise;

// {
//     "name": "Push Up",
//     "description": "A basic push up exercise.",
//     "duration": 30,
//     "positions": [
//       {
//         "name": "Starting Position",
//         "description": "Hands on the ground, shoulder-width apart.",
//         "imageUrl": "http://example.com/start.jpg"
//       },
//       {
//         "name": "Lowered Position",
//         "description": "Lower your body until your chest nearly touches the floor.",
//         "imageUrl": "http://example.com/lowered.jpg"
//       },
//       {
//         "name": "Ending Position",
//         "description": "Push yourself back up to the starting position.",
//         "imageUrl": "http://example.com/end.jpg"
//       }
//     ]
//   }
