import { useState } from 'react';
import axios from 'axios';
import './NewComment.css';
const NewComment = ({ post_id }) => {
  const [comment, setComment] = useState('');
  const URL = process.env.REACT_APP_API_URL;
  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = document.cookie.split('=')[1];
    axios
      .post(`${URL}posts/:post_id/comments`, { username, comment })
      .then((_) => event.target.reset());
  };
  return (
    <form className="NewComment" onSubmit={handleSubmit}>
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
