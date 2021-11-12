import nc from 'next-connect';
import {
  newComment,
  allComments,
} from '../../../../controllers/commentController';
import dbConnect from '../../../../config/dbConnect';
import onError from '../../../../middlewares/errors';
import { isAuthenticatedUser } from '../../../../middlewares/auth';

const handler = nc({ onError });
dbConnect();
handler.get(allComments);
handler.use(isAuthenticatedUser).post(newComment);

export default handler;
