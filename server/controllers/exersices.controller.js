import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

const addExersice = async (req, res) => {
  try {
    const { name, description, duration, positions } = req.body;
    // Upload images to Cloudinary
    const uploadedImages = await Promise.all(
      req.files.map((file) => cloudinary.v2.uploader.upload(file.path))
    );

    const updatedPositions = JSON.parse(positions).map((position, index) => ({
      ...position,
      imageUrl: uploadedImages[index].secure_url,
    }));

    const newExercise = new Exercise({
      name,
      description,
      duration,
      positions: updatedPositions,
    });

    const savedExercise = await newExercise.save();
    if (!savedExercise) throw new ApiError(404, 'exersice not add');
    return res.status(201).json(new ApiResponse(201, savedExercise));
  } catch (error) {
    console.log('EORROR AT ADD EXERSICES' + error);
    throw new ApiError(500, 'internal server errors');
  }
};

export { addExersice };
