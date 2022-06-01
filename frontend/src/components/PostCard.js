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
  postInfo: { post_id, project_id, members_only, date, title, contents },
}) => {
  const URL = process.env.REACT_APP_API_URL;
  const [comments, setComments] = useState([]);
  const [refreshPost, setReset] = useState(false);
  const username = localStorage.getItem("credentials");

  const trigReset = () => {
    setReset(!refreshPost);
  };

  const renderedComments = comments.map((e, i) => (
    <CommCard commInfo={e} key={"comm" + i} />
  ));
  useEffect(() => {
    axios
      .get(`${URL}posts/${post_id}/comments`)
      .then((res) => setComments(res.data))
      .catch((error) => console.warn(error));
  }, [post_id, project_image, URL, refreshPost]);

  const formattedDate = new Date(date).toLocaleDateString();

  const handleDelete = () => {
    axios
      .delete(`${URL}projects/${project_id}/posts/${post_id}`)
      .then((_) => reloadPosts())
      .catch((error) => console.warn(error));
  };

  return (
    <div className="PostCard">
      <div className="postContainer">
        <img
          className="projectPfp"
          src={project_image || ""}
          onError={defaultImage}
          alt="This project's image"
        />
        <div className="postContent">
          <h3>
            {title} <span className="postDate">({formattedDate})</span>
          </h3>
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
