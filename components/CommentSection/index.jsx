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
  const handleReplyOnChild = (e, id, input) => {
    e.preventDefault();
    handleReply(id, input);
  };
  return comments
    .slice(0)
    .reverse()
    .map((comment) => {
      return (
        <div key={comment.id}>
          <span>{comment.input}</span>
          <button
            style={{ display: 'inline' }}
            onClick={(e) => handleReplyOnChild(e, comment.id, 'hihi')}
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
        </div>
      );
    });
};

const OtherCommentsComponent = React.memo(OtherComments);

export default CommentSection;
