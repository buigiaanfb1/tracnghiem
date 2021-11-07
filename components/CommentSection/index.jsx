import React, { useState, useCallback } from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';

import { uuidv4 } from '../../common/uuid';

const CommentSection = () => {
  const classes = useStyles();
  const [state, setState] = useState([]);
  const [input, setInput] = useState('');

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
      setInput('');
    },
    [state]
  );

  const handleReply = useCallback(
    (id, input) => {
      const stateFake = [...state];
      stateFake.map((comment) => {
        if (comment.id === id) {
          comment.reply = [
            ...comment.reply,
            {
              id,
              input,
              user: {
                username: 'saith ce clare',
                avatar:
                  'https://dmitripavlutin.com/static/813d689d1d6b5adc1a80618915bd9a5a/e10ee/instruments.webp',
              },
            },
          ];
        }
      });
      setState(stateFake);
    },
    [state]
  );

  return (
    <div>
      <h3>CommentSection</h3>
      <UserInputComponent onSubmit={handleSubmit} />
      <OtherCommentsComponent comments={state} handleReply={handleReply} />
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

const SubComment = ({ comment, handleReply }) => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);

  console.log('SubComment render');
  const handleSubmit = (input) => {
    handleReply(comment.id, input);
    setVisible(!visible);
  };

  return (
    <>
      <div className={classes.containerOtherComments}>
        <img src="https://dmitripavlutin.com/static/813d689d1d6b5adc1a80618915bd9a5a/e10ee/instruments.webp" />
        <div className={classes.otherCommentsContent}>
          <Typography style={{ fontSize: 14, fontWeight: '500' }}>
            {comment.user.username}
          </Typography>
          <Typography style={{ fontSize: 14, lineHeight: '1.2' }}>
            {comment.input}
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
          <div style={{ margin: '1rem 0 1rem 1rem' }}>
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
          src="https://dmitripavlutin.com/static/813d689d1d6b5adc1a80618915bd9a5a/e10ee/instruments.webp"
          style={{
            width: `${type ? '24px' : '48px'}`,
            height: `${type ? '24px' : '48px'}`,
          }}
        />
        <div className={classes.inputAndButtons}>
          <input
            placeholder="Leave your comment..."
            name="userInput"
            value={input}
            onChange={handleChange}
            onClick={() => handleExpand()}
          />
          {expand && (
            <div className={classes.containerButtons}>
              <button
                onClick={() => {
                  setExpand(false);
                  setInput('');
                }}
              >
                Huỷ
              </button>
              <button type="submit">Submit</button>
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
