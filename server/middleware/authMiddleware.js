import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decode = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decode.id).select('-password');
      next;
    } catch (error) {
      console.log(error);
      throw new ApiError(401, 'not authorized no token');
    }
  }
};
export { protect };
