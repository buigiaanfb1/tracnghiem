import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const postUserCommentService = async (url, dataFromUser) => {
  try {
    const { data, status } = await axios.post(url, {
      courseId: dataFromUser.courseId,
      user: dataFromUser.userId,
      content: dataFromUser.content,
    });
    console.log(data);
    return { data, status };
  } catch (err) {
    console.log(err);
  }
};
