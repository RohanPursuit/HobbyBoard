import { useState, useEffect } from "react";
import axios from "axios";
import "./PostSection.css";

const PostSection = (props) => {
  const [posts, setPosts] = useState([]);
  const URL = process.env.REACT_APP_API_URL;
  const { project_id } = props;

  useEffect(() => {
    if (project_id) {
      axios
        .get(`${URL}projects/${project_id}/posts`)
        .then((res) => setPosts(res.data))
        .catch((error) => console.warn(error));
    }
  }, [URL, project_id]);

  return (
    <div className="PostSection">
      <button className="newPost">New Post</button>
    </div>
  );
};

export default PostSection;
