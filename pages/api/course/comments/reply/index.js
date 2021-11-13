import nc from 'next-connect';
import { replyComment } from '../../../../../controllers/commentController';
import dbConnect from '../../../../../config/dbConnect';
import onError from '../../../../../middlewares/errors';
import { isAuthenticatedUser } from '../../../../../middlewares/auth';

const handler = nc({ onError });
dbConnect();
handler.use(isAuthenticatedUser).post(replyComment);

export default handler;
