import nc from 'next-connect';
import { newCourse } from '../../../controllers/courseControllers';
import onError from '../../../middlewares/errors';

const handler = nc({ onError });

handler.post(newCourse);

export default handler;
