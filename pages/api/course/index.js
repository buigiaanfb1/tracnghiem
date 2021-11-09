import nc from 'next-connect';
import { coursesBySlug } from '../../../controllers/courseControllers';
import dbConnect from '../../../config/dbConnect';
import onError from '../../../middlewares/errors';

const handler = nc({ onError });
dbConnect();

handler.get(coursesBySlug);

export default handler;
