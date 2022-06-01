import { useState } from 'react';
import axios from 'axios';
import './NewComment.css';
const NewComment = ({ post_id, project_id }) => {
  const [comment, setComment] = useState('');
  const handleChange = (event) => {
    setComment(event.target.value);
  };
  return (
    <form className="NewComment">
      <input
        type="text"
        id="comment"
        placeholder="Write your comment..."
        value={comment}
        onChange={handleChange}
      ></input>
      {comment ? (
        <button type="submit" id="commentSubmit">
          S
        </button>
      ) : null}
    </form>
  );
};

export default NewComment;
