import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PostCard from "./PostCard";
import "./PostSection.css";

const PostSection = ({ project_id, project_image, creator }) => {
  const [posts, setPosts] = useState([]);
  const [reload, setReload] = useState(false);
  const URL = process.env.REACT_APP_API_URL;
  const username = localStorage.getItem("credentials");
  const nav = useNavigate();

  const handleNewPost = () => {
    nav(`/projects/${project_id}/newPost`);
  };

  useEffect(() => {
    if (project_id) {
      axios
        .get(`${URL}projects/${project_id}/posts`)
        .then((res) => setPosts(res.data))
        .catch((error) => console.warn(error));
    }
  }, [URL, project_id, reload]);

  const reloadPosts = () => {
    setReload(!reload);
  };

  const renderedPosts = posts.map((e, i) => (
    <PostCard
      project_image={project_image}
      creator={creator}
      reloadPosts={reloadPosts}
      postInfo={e}
      key={"post" + i}
    />
  ));

  return (
    <div className="PostSection">
      {username === creator ? (
        <button className="newPost" onClick={handleNewPost}>
          New Post
        </button>
      ) : null}
      {renderedPosts}
    </div>
  );
};

export default PostSection;
