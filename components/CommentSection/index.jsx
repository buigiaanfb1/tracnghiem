import React, { useState, useCallback } from 'react';
import { useStyles } from './styles';
const CommentSection = () => {
  const classes = useStyles();
  const [state, setState] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setState([...state, { input, reply: [], id: state.length }]);
    setInput('');
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleReply = useCallback(
    (id, input) => {
      const stateFake = [...state];
      stateFake.map((comment) => {
        if (comment.id === id) {
          comment.reply = [...comment.reply, { id, input }];
        }
      });
      setState(stateFake);
    },
    [state]
  );

  return (
    <div>
      <h3>CommentSection</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Leave your comment..."
          name="userInput"
          value={input}
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
      <OtherCommentsComponent comments={state} handleReply={handleReply} />
    </div>
  );
};

const OtherComments = ({ comments, handleReply }) => {
  return comments
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
    });
};

const SubComment = ({ comment, handleReply }) => {
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState('');

  const handleReplyOnChild = (e) => {
    e.preventDefault();
    handleReply(comment.id, input);
    setInput('');
    setVisible(!visible);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  return (
    <div>
      <span>{comment.input}</span>
      <button
        style={{ display: 'inline' }}
        onClick={(e) => handleReplyOnChild(e)}
      >
        Reply
      </button>
      <div style={{ marginLeft: '1rem' }}>
        {comment.reply &&
          comment.reply.length > 0 &&
          comment.reply.map((comment) => {
            return <div key={comment.id}>{comment.input}</div>;
          })}
      </div>
      <div>
        {visible && (
          <form onSubmit={handleReplyOnChild}>
            <input
              placeholder="Leave your comment..."
              name="userInput"
              value={input}
              onChange={handleChange}
            />
            <button>submit</button>
          </form>
        )}
      </div>
    </div>
  );
};
const SubCommentComponent = React.memo(SubComment);
const OtherCommentsComponent = React.memo(OtherComments);

export default CommentSection;
