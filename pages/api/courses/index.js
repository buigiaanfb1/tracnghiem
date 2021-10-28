import nc from 'next-connect';
import { newCourse, allCourses } from '../../../controllers/courseControllers';
import onError from '../../../middlewares/errors';

const handler = nc({ onError });

handler.post(newCourse);
handler.get(allCourses);

export default handler;
