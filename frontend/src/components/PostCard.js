import { useEffect } from "react";
import "./PostCard.css";

const PostCard = ({
  project_image,
  postInfo: { post_id, project_id, members_only, date, title, contents },
}) => {
  console.log(
    project_image,
    post_id,
    project_id,
    members_only,
    date,
    title,
    contents
  );

  useEffect(() => {}, [project_image]);

  return (
    <div className="PostCard">
      <h3>{title}</h3>
      <p>{contents}</p>
    </div>
  );
};

export default PostCard;
