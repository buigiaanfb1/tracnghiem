import React, { useState, useCallback, useEffect } from 'react';
import { useStyles } from './styles';
import { Button, Typography } from '@material-ui/core';
import TextareaAutosize from 'react-textarea-autosize';
import { uuidv4 } from '../../common/uuid';
import useAxios from '../../hooks/useAxios';
import { formatDistanceToNowStrict } from 'date-fns';
import CommentsNotFound from '../NotFound/CommentsNotFound';
import {
  postUserCommentService,
  reactCommentService,
} from './CommentSectionServices';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbUpRoundedIcon from '@material-ui/icons/ThumbUpRounded';
import ThumbDownRoundedIcon from '@material-ui/icons/ThumbDownRounded';
import Tooltip from '@material-ui/core/Tooltip';
import { vi } from 'date-fns/locale';
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
      {limit !== 0 && comments.length > 10 && (
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
        createdAt: dataComment.comment.createdAt,
        updatedAt: dataComment.comment.updatedAt,
      },
    ];
    // Rerender state
    setStateReply(fakeState);
    // Close user input
    setVisible(!visible);
  };

  const handleRenderTime = useCallback((dateCreatedAt) => {
    if (!dateCreatedAt) {
      return null;
    }
    let date = new Date(dateCreatedAt);
    let time = formatDistanceToNowStrict(date, {
      locale: vi,
    });
    return time + ' trước';
  }, []);

  return (
    <>
      <div className={classes.containerOtherComments}>
        <img src={comment.avatar} />
        <div className={classes.otherCommentsContent}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              style={{
                display: 'inline-block',
                fontSize: 14,
                fontWeight: '500',
              }}
            >
              {comment.name}
            </Typography>
            <span
              style={{
                marginLeft: '0.5rem',
                fontSize: 12,
                fontWeight: '500',
                opacity: '0.7',
              }}
            >
              {handleRenderTime(comment.createdAt)}
              {/* {comment.createdAt} */}
            </span>
          </div>
          <Typography
            style={{
              fontSize: 14,
              lineHeight: '1.2',
              whiteSpace: 'pre-line',
              margin: '0.25rem 0',
            }}
          >
            {comment.content}
          </Typography>
          <div className={classes.containerTools}>
            {user && (
              <ButtonReactionComponent
                comment={comment}
                courseId={courseId}
                user={user}
              />
            )}
            <Button
              className={classes.buttonReplyContainer}
              onClick={() => setVisible(!visible)}
            >
              Reply
            </Button>
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
          {expandStateReply ? (
            <>
              <ArrowDropUpIcon className={classes.dropdownReplyCommentsIcon} />
              <span>Ẩn {stateReply.length} bình luận</span>
            </>
          ) : (
            <>
              <ArrowDropDownIcon
                className={classes.dropdownReplyCommentsIcon}
              />
              <span>Xem {stateReply.length} bình luận</span>
            </>
          )}
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
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography
                      style={{
                        display: 'inline-block',
                        fontSize: 14,
                        fontWeight: '500',
                      }}
                    >
                      {comment.name}
                    </Typography>
                    <span
                      style={{
                        marginLeft: '0.5rem',
                        fontSize: 12,
                        fontWeight: '500',
                        opacity: '0.7',
                      }}
                    >
                      {handleRenderTime(comment.createdAt)}
                    </span>
                  </div>
                  <Typography
                    style={{
                      fontSize: 14,
                      lineHeight: '1.2',
                      margin: '0.25rem 0',
                      whiteSpace: 'pre-line',
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

const ButtonReaction = ({ comment, courseId, user }) => {
  const classes = useStyles();
  const [like, setLike] = useState(null);

  useEffect(() => {
    checkUserAlready();
  }, []);

  const checkUserAlready = () => {
    const findUserLikeIndex = comment.like.find((userLike) => {
      return user._id === userLike._id;
    });
    if (findUserLikeIndex) {
      setLike(true);
    }
    const findUserDislikeIndex = comment.dislike.find((userDislike) => {
      return user._id === userDislike._id;
    });
    if (findUserDislikeIndex) {
      setLike(false);
    }
  };

  const [amountReaction, setAmountReaction] = useState({
    likeAmount: comment.like.length || 0,
    dislikeAmount: comment.dislike.length || 0,
  });

  const handleLikeAndDislike = (isLike) => {
    if (isLike) {
      // isLike === true mean user click like
      // so if state already is true we set back to null,
      // other, we set to true
      setAmountReaction({
        likeAmount:
          like === isLike
            ? amountReaction.likeAmount - 1
            : amountReaction.likeAmount + 1,
        dislikeAmount:
          like != null && !like === isLike
            ? amountReaction.dislikeAmount - 1
            : amountReaction.dislikeAmount,
      });
      like === isLike ? setLike(null) : setLike(true);
      // Call API
      reactCommentService(
        `/api/course/comments/perform_comment_action?courseId=${courseId}&type=like&commentId=${comment._id}`
      );
    } else {
      // vice versa
      setAmountReaction({
        likeAmount:
          !like === isLike
            ? amountReaction.likeAmount - 1
            : amountReaction.likeAmount,
        dislikeAmount:
          like === isLike
            ? amountReaction.dislikeAmount - 1
            : amountReaction.dislikeAmount + 1,
      });
      like === isLike ? setLike(null) : setLike(false);
      reactCommentService(
        `/api/course/comments/perform_comment_action?courseId=${courseId}&type=dislike&commentId=${comment._id}`
      );
    }
  };

  return (
    <>
      <div className={classes.containerWholeInfoButtonLikeDislike}>
        <Tooltip title={`${like ? 'Bỏ thích' : 'Thích'}`} arrow>
          <Button
            className={classes.buttonLikeDislikeCommentContainer}
            onClick={() => handleLikeAndDislike(true)}
          >
            {like === true ? <ThumbUpRoundedIcon /> : <ThumbUpOutlinedIcon />}
          </Button>
        </Tooltip>
        <span style={{ marginLeft: '0.2rem', opacity: '0.7' }}>
          {amountReaction.likeAmount}
        </span>
      </div>
      <div className={classes.containerWholeInfoButtonLikeDislike}>
        <Tooltip
          title={`${
            like === null || like === true
              ? 'Không thích'
              : 'Xoá lượt không thích'
          }`}
          arrow
        >
          <Button
            className={classes.buttonLikeDislikeCommentContainer}
            onClick={() => handleLikeAndDislike(false)}
          >
            {like !== null && like === false ? (
              <ThumbDownRoundedIcon />
            ) : (
              <ThumbDownOutlinedIcon />
            )}
          </Button>
        </Tooltip>
        <span style={{ marginLeft: '0.2rem', opacity: '0.7' }}>
          {amountReaction.dislikeAmount}
        </span>
      </div>
    </>
  );
};

const UserInputComponent = React.memo(UserInput);
const SubCommentComponent = React.memo(SubComment);
const OtherCommentsComponent = React.memo(OtherComments);
const ButtonReactionComponent = React.memo(ButtonReaction);

export default React.memo(CommentSection);
