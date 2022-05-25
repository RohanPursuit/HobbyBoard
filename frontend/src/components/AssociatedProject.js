import defaultImage from "../helpers/helperFunction";
import { Link } from "react-router-dom";
import axios from "axios";

const AssociatedProject = (props) => {
  const API = process.env.REACT_APP_API_URL;
  const handleRemoveCollaborator = () => {
    const { username, project_id } = props.details;
    if (window.confirm("Are you sure you want to kick contributor")) {
      axios
        .delete(`${API}connections/${username}`, { data: { project_id } })
        .then(() => window.location.reload(false));
    }
  };

  return (
    <div>
      <Link to={`/projects/${props.details.project_id}`}>
        <div>
          <img src={props.project_image || ""} alt="" onError={defaultImage} />
          <h3>{props.details.project_id}</h3>
          <p>{props.details.details}</p>
        </div>
      </Link>

      {document.cookie.split("=")[1] === props.details.username ? (
        props.details.permissions === "owner" ? (
          <button>Collaborators</button>
        ) : (
          <button onClick={handleRemoveCollaborator}>Leave</button>
        )
      ) : (
        <p>{props.details.permissions}</p>
      )}
    </div>
  );
};

export default AssociatedProject;
