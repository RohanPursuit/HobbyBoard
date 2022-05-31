import React from "react";
import { Link } from "react-router-dom";
import defaultImage from "../helpers/helperFunction";
import "./CommCard.css";

const CommCard = ({
  commInfo: { comment_id, post_id, username, comment, date, profile_image },
}) => {
  const formattedDate = new Date(date).toLocaleDateString();
  return (
    <div className="CommCard">
      <img
        className="pfp"
        src={profile_image || ""}
        onError={defaultImage}
        alt={username + "'s profile image"}
      />
      <div className="commentContent">
        <h4>
          <Link to={`/profile/${username}`}>{username}</Link>{" "}
          <span className="postDate">({formattedDate})</span>
        </h4>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default CommCard;
