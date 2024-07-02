import Exercise from '../models/exersices.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

const addExercise = async (req, res) => {
  try {
    const { name, description, duration, positions } = req.body;

    // Assuming positions already contains imageUrl in the request body.
    const newExercise = new Exercise({
      name,
      description,
      duration,
      positions,
    });

    const savedExercise = await newExercise.save();

    if (!savedExercise) throw new ApiError(404, 'exercise not added');

    return res.status(201).json(new ApiResponse(201, savedExercise));
  } catch (error) {
    console.log('ERROR AT ADD EXERCISE: ' + error);
    throw new ApiError(500, 'internal server errors');
  }
};

const getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();

    if (!exercises) throw new ApiError(404, 'No exercises found');

    return res.status(200).json(new ApiResponse(200, exercises));
  } catch (error) {
    console.log('ERROR AT GET EXERCISES: ' + error);
    throw new ApiError(500, 'internal server errors');
  }
};

export { addExercise, getExercises };
