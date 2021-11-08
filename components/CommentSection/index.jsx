import React, { useState, useCallback, useEffect } from 'react';
import { useStyles } from './styles';
import { Button, Typography } from '@material-ui/core';
import TextareaAutosize from 'react-textarea-autosize';
import { uuidv4 } from '../../common/uuid';
import useAxios from '../../hooks/useAxios';

const CommentSection = () => {
  const [state, setState] = useState([]);
  const { response, loading, error } = useAxios({
    method: 'get',
    url: '/api/course/comments?id=123123',
    headers: JSON.stringify({ accept: '*/*' }),
  });

  useEffect(() => {
    if (response !== null) {
      setState(response.comments);
    }
  }, [response]);

  const handleSubmit = useCallback(
    (input) => {
      setState([
        ...state,
        {
          input,
          reply: [],
          id: uuidv4(),
          user: {
            username: 'saith ce clare',
            avatar:
              'https://dmitripavlutin.com/static/813d689d1d6b5adc1a80618915bd9a5a/e10ee/instruments.webp',
          },
        },
      ]);
    },
    [state]
  );

  return (
    <div>
      <h3>CommentSection</h3>
      <UserInputComponent onSubmit={handleSubmit} />
      <OtherCommentsComponent comments={state} />
    </div>
  );
};

const OtherComments = ({ comments, handleReply }) => {
  console.log('OtherComments render');

  return (
    <div style={{ marginTop: '1rem' }}>
      {comments
        .slice(0)
        .reverse()
        .map((comment) => {
          return (
            <SubCommentComponent
              key={comment.id}
              comment={comment}
              handleReply={handleReply}
            />
          );
        })}
    </div>
  );
};

const SubComment = ({ comment }) => {
  const classes = useStyles();
  const [state, setState] = useState(comment);
  const [visible, setVisible] = useState(false);

  console.log('SubComment render');
  const handleSubmit = (input) => {
    let fakeState = state;
    fakeState.reply = [
      ...fakeState.reply,
      {
        id: uuidv4(),
        input,
        user: {
          username: 'saith ce clare',
          avatar:
            'https://dmitripavlutin.com/static/813d689d1d6b5adc1a80618915bd9a5a/e10ee/instruments.webp',
        },
      },
    ];
    setState(fakeState);
    setVisible(!visible);
  };

  return (
    <>
      <div className={classes.containerOtherComments}>
        <img src="https://img-c.udemycdn.com/course/480x270/1026604_790b_2.jpg" />
        <div className={classes.otherCommentsContent}>
          <Typography style={{ fontSize: 14, fontWeight: '500' }}>
            {comment.username}
          </Typography>
          <Typography
            style={{ fontSize: 14, lineHeight: '1.2', whiteSpace: 'pre' }}
          >
            {comment.content}
          </Typography>
          <div
            style={{
              display: 'inline',
              backgroundColor: 'transparent',
              border: 'none',
              marginTop: '0.5rem',
              fontWeight: 500,
              fontSize: '14px',
              cursor: 'pointer',
              opacity: '0.7',
            }}
            onClick={() => setVisible(!visible)}
          >
            Reply
          </div>
        </div>
      </div>
      <div>
        {visible && (
          <div style={{ margin: '1rem 0 1rem 4rem' }}>
            <UserInputComponent onSubmit={handleSubmit} type="sub" />
          </div>
        )}
      </div>
      <div style={{ marginLeft: '4rem' }}>
        {comment.reply &&
          comment.reply.length > 0 &&
          comment.reply.map((comment) => {
            return (
              <div
                key={comment.id}
                style={{
                  display: 'flex',
                  margin: '1rem 0 0 0rem',
                  alignItems: 'flex-start',
                }}
              >
                <img
                  src={comment.user.avatar}
                  width="24px"
                  height="24px"
                  style={{ borderRadius: '50%' }}
                />
                <div style={{ marginLeft: '1rem' }}>
                  <Typography
                    style={{ fontSize: 14, fontWeight: '500', lineHeight: '1' }}
                  >
                    {comment.user.username}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: 14,
                      lineHeight: '1.2',
                      marginTop: '0.25rem',
                      whiteSpace: 'pre',
                    }}
                  >
                    {comment.input}
                  </Typography>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

const UserInput = ({ onSubmit, type = null }) => {
  const [input, setInput] = useState('');
  const [expand, setExpand] = useState(false);
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput('');
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleExpand = () => {
    if (!expand) {
      setExpand(true);
    }
    return;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.containerUserInput}>
        <img
          src="https://img-c.udemycdn.com/course/480x270/1026604_790b_2.jpg"
          style={{
            width: `${type ? '24px' : '48px'}`,
            height: `${type ? '24px' : '48px'}`,
          }}
        />
        <div className={classes.inputAndButtons}>
          <TextareaAutosize
            placeholder="Leave your comment..."
            name="userInput"
            value={input}
            onChange={handleChange}
            onClick={() => handleExpand()}
            maxRows={10}
          ></TextareaAutosize>
          {expand && (
            <div className={classes.containerButtons}>
              <Button
                variant="contained"
                className={classes.closeButton}
                onClick={() => {
                  setExpand(false);
                  setInput('');
                }}
              >
                <Typography>Huỷ</Typography>
              </Button>
              <Button
                type="submit"
                className={
                  input.length > 0 ? classes.submitButton : classes.closeButton
                }
                disabled={input.length > 0 ? false : true}
              >
                <Typography>Submit</Typography>
              </Button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

const UserInputComponent = React.memo(UserInput);
const SubCommentComponent = React.memo(SubComment);
const OtherCommentsComponent = React.memo(OtherComments);

export default CommentSection;
