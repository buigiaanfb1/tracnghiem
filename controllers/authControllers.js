import User from '../models/user';
import catchAsyncError from '../middlewares/catchAsyncError';

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

export { registerUser };
