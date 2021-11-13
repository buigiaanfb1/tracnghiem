import React, { useState, useCallback, useEffect } from 'react';
import { useStyles } from './styles';
import { Button, Typography } from '@material-ui/core';
import TextareaAutosize from 'react-textarea-autosize';
import { uuidv4 } from '../../common/uuid';
import useAxios from '../../hooks/useAxios';
import CommentsNotFound from '../NotFound/CommentsNotFound';
import { postUserCommentService } from './CommentSectionServices';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
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
  const classes = useStyles();
  console.log('OtherComments render');
  // Example
  // we have 40 comment
  // so limit initial is 40 - 10 = 30
  const [limit, setLimit] = useState(comments.length - 10);

  return (
    <>
      <div style={{ marginTop: '1rem' }}>
        {comments
          // take 30 to 40
          .slice(limit, comments.length)
          // then reverse them to get the descending order (latest to oldest)
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
      {limit !== 0 && (
        <Button
          className={classes.buttonLoadMore}
          // when clicking limit - 10 mean 30 - 10 = 20 ( so we have more 10 comment)
          // from 20 - 30
          onClick={() => setLimit(limit - 10 >= 0 ? limit - 10 : 0)}
        >
          Xem thêm đánh giá
        </Button>
      )}
    </>
  );
};

const SubComment = ({ comment, user, courseId }) => {
  const classes = useStyles();
  // set comment prop become state to easy control
  const [state, setState] = useState(comment);
  // Array of reply from comment props
  const [stateReply, setStateReply] = useState(comment.reply);
  // Open/close reply
  const [expandStateReply, setExpandStateReply] = useState(false);
  // User input when clicking "Reply" button
  const [visible, setVisible] = useState(false);

  console.log('SubComment render');

  const handleSubmit = async (input) => {
    // deep copy stateReply
    let fakeState = stateReply;
    // call API
    const data = { content: input };
    const { data: dataComment, status } = await postUserCommentService(
      `/api/course/comments/reply?courseId=${courseId}&commentId=${comment._id}`,
      data
    );
    // After call successfully, add data to state
    fakeState = [
      ...fakeState,
      {
        id: dataComment.comment.id || uuidv4(),
        content: dataComment.comment.content,
        name: dataComment.comment.name,
        avatar: dataComment.comment.avatar,
      },
    ];
    // Rerender state
    setStateReply(fakeState);
    // Close user input
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
      <div
        style={{
          margin: `${visible ? '1rem 0 1rem 4rem' : '0.5rem 0 0rem'}`,
          height: `${visible ? '100%' : '0'}`,
          overflowY: `${visible ? 'unset' : 'hidden'}`,
        }}
      >
        <UserInputComponent onSubmit={handleSubmit} type="sub" user={user} />
      </div>
      {stateReply.length > 0 && (
        <div
          className={classes.dropdownReplyComments}
          onClick={() => setExpandStateReply(!expandStateReply)}
        >
          <ArrowDropDownIcon className={classes.dropdownReplyCommentsIcon} />
          <span>Xem thêm {stateReply.length} bình luận</span>
        </div>
      )}
      <div
        style={{
          marginLeft: '4rem',
          height: `${expandStateReply ? '100%' : '0'}`,
          overflowY: `${expandStateReply ? 'unset' : 'hidden'}`,
        }}
      >
        {stateReply &&
          stateReply.length > 0 &&
          stateReply.map((comment) => {
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
                    style={{
                      fontSize: 14,
                      fontWeight: '500',
                      lineHeight: '1',
                    }}
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
          src={user?.avatar.url}
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
