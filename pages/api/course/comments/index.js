import nc from 'next-connect';
import {
  newComment,
  allComments,
} from '../../../../controllers/commentController';
import dbConnect from '../../../../config/dbConnect';
import onError from '../../../../middlewares/errors';

const handler = nc({ onError });
dbConnect();
handler.get(allComments);
handler.post(newComment);

export default handler;
