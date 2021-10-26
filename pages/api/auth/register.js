import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import onError from '../../../middlewares/errors';
import { registerUser } from '../../../controllers/authControllers';

const handler = nc({ onError });

dbConnect();

handler.post(registerUser);

export default handler;
