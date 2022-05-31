import { useState, useEffect } from "react";
import axios from "axios";
import CommCard from "./CommCard";
import defaultImage from "../helpers/helperFunction";
import "./PostCard.css";

const PostCard = ({
  project_image,
  postInfo: { post_id, members_only, date, title, contents },
}) => {
  const URL = process.env.REACT_APP_API_URL;
  const [comments, setComments] = useState([]);

  const renderedComments = comments.map((e, i) => (
    <CommCard commInfo={e} key={"comm" + i} />
  ));
  useEffect(() => {
    axios
      .get(`${URL}posts/${post_id}/comments`)
      .then((res) => setComments(res.data))
      .catch((error) => console.warn(error));
  }, [post_id, project_image, URL]);

  const formattedDate = new Date(date).toLocaleDateString();

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
        </div>
      </div>
      {renderedComments}
    </div>
  );
};

export default PostCard;
