import { useState, useEffect } from "react";
import axios from "axios";
import CommCard from "./CommCard";
import NewComment from "./NewComment";
import defaultImage from "../helpers/helperFunction";
import "./PostCard.css";

const PostCard = ({
  project_image,
  creator,
  reloadPosts,
  postInfo: { post_id, project_id, members_only, date, title, contents, likes },
}) => {
  // console.log(likes.length);
  const URL = process.env.REACT_APP_API_URL;
  const [comments, setComments] = useState([]);
  const [refreshPost, setReset] = useState(false);
  const username = localStorage.getItem("credentials");
  const [likesDisplay, setLikes] = useState(likes.length - 1);
  const [currentlyLike, setCurrentLikes] = useState(
    likes.includes(localStorage.getItem("credentials")) ? true : false
  );
  console.log(currentlyLike);
  const trigReset = () => {
    setReset(!refreshPost);
  };
  console.log(likesDisplay);
  const renderedComments = comments.map((e, i) => (
    <CommCard
      creator={creator}
      trigReset={trigReset}
      commInfo={e}
      key={"comm" + i}
      last={i === comments.length - 1}
    />
  ));
  useEffect(() => {
    axios
      .get(`${URL}posts/${post_id}/comments`)
      .then((res) => setComments(res.data))
      .catch((error) => console.warn(error));
  }, [post_id, project_image, URL, refreshPost]);

  const formattedDate = new Date(date).toLocaleDateString();

  const handleDelete = () => {
    if (window.confirm("Are you sure that you'd like to delete this post?")) {
      axios
        .delete(`${URL}projects/${project_id}/posts/${post_id}`)
        .then((_) => reloadPosts())
        .catch((error) => console.warn(error));
    }
  };
  const handleLike = () => {
    setCurrentLikes(!currentlyLike);
    axios
      .post(`${URL}posts/${post_id}/likes/${username}`)
      .then((response) => setLikes(response.data - 1))
      .catch((error) => console.warn(error));
  };

  return (
    <div className={"PostCard" + (comments.length === 0 ? " OnlyPost" : "")}>
      <div className="postContainer">
        <img
          className="projectPfp"
          src={project_image || ""}
          onError={defaultImage}
          alt="This project's image"
        />
        <div className="postContent">
          <div className="postTitle">
            <h3>{title}</h3>
            <span className="postDate">({formattedDate})</span>
          </div>
          <div>
            likes: {likesDisplay}
            {"  "}
            {currentlyLike ? (
              <span className="likeButton" onClick={handleLike}>
                &#129505;
              </span>
            ) : (
              <span className="likeButton" onClick={handleLike}>
                &#128420;
              </span>
            )}
          </div>
          <p>{contents}</p>
          {username ? (
            <NewComment
              post_id={post_id}
              project_id={project_id}
              trigReset={trigReset}
            />
          ) : null}
        </div>
        {username === creator && (
          <button className="deleteButton" onClick={handleDelete}>
            X
          </button>
        )}
      </div>
      {renderedComments}
    </div>
  );
};

export default PostCard;
