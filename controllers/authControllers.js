import User from '../models/user';
import catchAsyncError from '../middlewares/catchAsyncError';
import absoluteUrl from 'next-absolute-url';
import ErrorHandler from '../utils/errorHandler';
import sendEmail from '../utils/sendEmail';
import crypto from 'crypto';

const registerUser = catchAsyncError(async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  await User.create({
    name,
    email,
    password,
  });
  res.status(200).json({
    success: true,
    message: 'Đăng kí tài khoản thành công!',
  });
});

const forgotPassword = catchAsyncError(async (req, res, next) => {
  console.log(req.body.email);
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new ErrorHandler('User not found with this email', 404));
  }

  // Get token reset
  const resetToken = await user.getResetPasswordToken();
  await user.save({ validationBeforeSave: false });

  // Get origin
  const { origin } = absoluteUrl(req);

  // Create reset password url
  const resetUrl = `${origin}/password/reset/${resetToken}`;

  const message = `Your password reset url is as follow: \n\n ${resetUrl} \n\n 
    If you have not requested this email, then ignore it.`;

  try {
    sendEmail({
      email: user.email,
      subject: 'Easy10 Password Recovery',
      message,
    });
    res.status(200).json({
      success: true,
      message: `Email sent to: ${user.email}`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.message, 500));
  }
});

const resetPassword = catchAsyncError(async (req, res, next) => {
  // Hash url token
  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.query.token)
    .digest('hex');
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler(
        'Password reset token is invalid or has been expired',
        400
      )
    );
  }
  if (req.body.password !== req.body.passwordConfirmation) {
    return next(new ErrorHandler('Password does not match', 400));
  }
  // new password
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  res.status(200).json({
    success: true,
    message: 'Password updated successfully',
  });
});

// Current user profile => /api/me
const currentUserProfile = catchAsyncError(async (req, res) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({
    success: true,
    user,
  });
});

export { registerUser, forgotPassword, resetPassword, currentUserProfile };
