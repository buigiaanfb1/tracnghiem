import axios from 'axios';

export const postUserCommentService = async (url, dataFromUser) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data, status } = await axios.post(
      url,
      {
        content: dataFromUser.content,
      },
      config
    );
    return { data, status };
  } catch (err) {
    console.log(err);
  }
};

export const reactCommentService = async (url) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data, status } = await axios.post(url, null, config);
    return { data, status };
  } catch (err) {
    console.log(err);
  }
};
