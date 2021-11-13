import React, { useState, useCallback, useEffect } from 'react';
import { useStyles } from './styles';
import { Button, Typography } from '@material-ui/core';
import TextareaAutosize from 'react-textarea-autosize';
import { uuidv4 } from '../../common/uuid';
import useAxios from '../../hooks/useAxios';
import CommentsNotFound from '../NotFound/CommentsNotFound';
import {
  postUserCommentService,
  postUserReplyCommentService,
} from './CommentSectionServices';

// courseId is ObjectID mongoDB not slugId
const CommentSection = ({ courseId, user }) => {
  const classes = useStyles();
  const [state, setState] = useState([]);
  const { response, loading, error } = useAxios({
    method: 'get',
    url: `/api/course/comments?courseId=${courseId}`,
    headers: JSON.stringify({ accept: '*/*' }),
  });

  useEffect(() => {
    if (response !== null) {
      setState(response.comments.comments);
    }
  }, [response]);

  const handleSubmit = useCallback(
    async (input) => {
      const data = { content: input };
      const { data: dataComment, status } = await postUserCommentService(
        `/api/course/comments?courseId=${courseId}`,
        data
      );
      if (status === 200) {
        setState([
          ...state,
          {
            ...dataComment.comment,
          },
        ]);
      }
    },
    [state, user]
  );

  return (
    <div>
      <Typography variant="h3" className={classes.titleComment}>
        Comments
      </Typography>
      {user && <UserInputComponent onSubmit={handleSubmit} user={user} />}
      {state.length > 0 ? (
        <OtherCommentsComponent
          comments={state}
          user={user}
          courseId={courseId}
        />
      ) : (
        <CommentsNotFound />
      )}
    </div>
  );
};

const OtherComments = ({ comments, handleReply, user, courseId }) => {
  console.log('OtherComments render');

  return (
    <div style={{ marginTop: '1rem' }}>
      {comments
        .slice(0)
        .reverse()
        .map((comment) => {
          return (
            <SubCommentComponent
              key={comment._id}
              comment={comment}
              handleReply={handleReply}
              user={user}
              courseId={courseId}
            />
          );
        })}
    </div>
  );
};

const SubComment = ({ comment, user, courseId }) => {
  const classes = useStyles();
  const [state, setState] = useState(comment);
  const [visible, setVisible] = useState(false);

  console.log('SubComment render');

  const handleSubmit = async (input) => {
    let fakeState = state;
    console.log(comment, input, user);
    const data = { content: input };
    const { data: dataComment, status } = await postUserCommentService(
      `/api/course/comments/reply?courseId=${courseId}&commentId=${comment._id}`,
      data
    );
    fakeState.reply = [
      ...fakeState.reply,
      {
        id: dataComment.comment.id || uuidv4(),
        content: dataComment.comment.content,
        name: dataComment.comment.name,
        avatar: dataComment.comment.avatar,
      },
    ];
    setState(fakeState);
    setVisible(!visible);
  };

  return (
    <>
      <div className={classes.containerOtherComments}>
        <img src={comment.avatar} />
        <div className={classes.otherCommentsContent}>
          <Typography style={{ fontSize: 14, fontWeight: '500' }}>
            {comment.name}
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
            <UserInputComponent
              onSubmit={handleSubmit}
              type="sub"
              user={user}
            />
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
                  src={comment.avatar}
                  width="24px"
                  height="24px"
                  style={{ borderRadius: '50%' }}
                />
                <div style={{ marginLeft: '1rem' }}>
                  <Typography
                    style={{ fontSize: 14, fontWeight: '500', lineHeight: '1' }}
                  >
                    {comment.name}
                  </Typography>
                  <Typography
                    style={{
                      fontSize: 14,
                      lineHeight: '1.2',
                      marginTop: '0.25rem',
                      whiteSpace: 'pre',
                    }}
                  >
                    {comment.content}
                  </Typography>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

const UserInput = ({ onSubmit, type = null, user }) => {
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
          src={user.avatar.url}
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

export default React.memo(CommentSection);
