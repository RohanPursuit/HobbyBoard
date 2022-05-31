import React from "react";
import defaultImage from "../helpers/helperFunction";
import "./CommCard.css";

const CommCard = ({
  commInfo: { comment_id, post_id, username, comment, date, profile_image },
}) => {
  return (
    <div className="CommCard">
      <img
        className="pfp"
        src={profile_image || ""}
        onError={defaultImage}
        alt={username + "'s profile image"}
      />
    </div>
  );
};

export default CommCard;
