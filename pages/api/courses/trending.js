import nc from 'next-connect';
import { trendingCourses } from '../../../controllers/courseControllers';
import dbConnect from '../../../config/dbConnect';
import onError from '../../../middlewares/errors';

const handler = nc({ onError });
dbConnect();
handler.get(trendingCourses);

export default handler;
