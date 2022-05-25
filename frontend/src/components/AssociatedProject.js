import defaultImage from "../helpers/helperFunction";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ConnModal from "../components/common/ConnModal.js";

const AssociatedProject = (props) => {
  const API = process.env.REACT_APP_API_URL;
  const [project, setProject] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [updateConnections, setUpdateConnections] = useState(false);
  const handleRemoveCollaborator = () => {
    const { username, project_id } = props.details;
    if (window.confirm("Are you sure you want to kick contributor")) {
      axios
        .delete(`${API}connections/${username}`, { data: { project_id } })
        .then(() => window.location.reload(false));
    }
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    axios
      .get(`${API}projects/${props.details.project_id}`)
      .then((res) => setProject(res.data));
  }, [API, updateConnections]);

  const pageReload = () => {
    setUpdateConnections(!updateConnections);
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
          <button onClick={handleShowModal}>Collaborators</button>
        ) : (
          <button onClick={handleRemoveCollaborator}>Leave</button>
        )
      ) : (
        <p>{props.details.permissions}</p>
      )}
      {showModal && (
        <ConnModal
          setDisplay={handleShowModal}
          project_id={props.details.project_id}
          owner={project.creator}
          pageReload={pageReload}
        />
      )}
    </div>
  );
};

export default AssociatedProject;
