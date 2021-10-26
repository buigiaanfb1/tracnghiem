import ErrorHandler from '../utils/errorHandler';

// eslint-disable-next-line import/no-anonymous-default-export
export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  let error = { ...err };

  error.message = err.message;
  console.log(err);
  // Wrong Mongoose ObjectID Error
  if (err.name === 'CastError') {
    const message = `Resource not found. Invalid: ${err.path}`;
    error = new ErrorHandler(message, 400);
  }
  if (err.name === 'MongoServerError' && err.code === 11000) {
    const message = `User already exist!`;
    error = new ErrorHandler(message, 400);
  }
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((value) => value.message);
    error = new ErrorHandler(message, 400);
  }

  res.status(error.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack,
  });
};
