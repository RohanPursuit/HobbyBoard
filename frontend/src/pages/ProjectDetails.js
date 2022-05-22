import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import defaultImage from "../helpers/helperFunction";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const API = process.env.REACT_APP_API_URL;
  const [project, setProject] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const params = useParams();
  const nav = useNavigate();
  // console.log(`${API}projects/${params.pid}`);
  useEffect(() => {
    axios
      .get(`${API}projects/${params.pid}`)
      .then((response) => setProject(response.data))
      .catch((error) => console.warn(error));
  }, [API, params.pid]);

  // could move the handleArchive and button to its own component
  // if we plan on having it in more than one place
  const handleArchive = () => {
    axios
      .put(`${API}projects/${params.pid}/archive`)
      //should reupdate the state if we want it view on this page
      // or can just let the response be nothing
      .then((response) => setProject(response.data))
      .catch((error) => console.warn(error));
  };

  const handleEdit = () => {
    nav("/projects/" + params.pid + "/edit");
  };

  const handleViewProfile = () => {
    nav("/profile/" + project.creator);
  };

  const handleJoin = () => {
    axios
      .post(`${API}connections`, {
        username: document.cookie.split("=")[1],
        project_id: project.project_id,
      })
      .then(() => {
        alert("Request Pending");
      })
      .catch(() => {
        alert("Request failed");
      });
  };

  const handleCancelRequest = () => {
    const username = document.cookie.split("=")[1];
    const project_id = project.project_id;
    console.log(username, project_id);
    axios
      .delete(`${API}connections`, { data: { username, project_id } })
      .then(() => {
        alert("Request Canceled");
      })
      .catch(() => {
        alert("Error");
      });
  };

  const handleShowModal = () => {
    
  }

  return (
    <div className="ProjectDetails">
      <img
        src={project.project_image || ""}
        alt="Project Banner"
        className="pBanner"
        onError={defaultImage}
      />
      <h2>{project.name}</h2>
      <h3 onClick={handleViewProfile}>Project Owner: {project.creator}</h3>
      <h3>Details:</h3>
      <p>{project.details}</p>
      {/* Archive Project Button */}
      <p>Archived: {`${project.archived}`}</p>
      {document.cookie.split("=")[1] === project.creator ? (
        <div>
          <button onClick={handleArchive}>Archive</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        <></>
      )}
      {/* Edit Project Page Button for authorized users */}
      {/* Delete Project Button */}
      {/* Links/Resources */}
      {/* {project.links.map((link) => {
                return <a href={link}>{link}</a>
            })} */}
      {/* Contributors */}
      {document.cookie.split("=")[1] !== project.creator ? (
        <button onClick={handleJoin}>Join</button>
      ) : (
        ""
      )}
      {document.cookie.split("=")[1] !== project.creator ? (
        <button onClick={handleCancelRequest}>Cancel Request</button>
      ) : (
        ""
      )}
      {/* If visitor is the creator or collaborator on the current project
      a collaborators button should be rendered */}
      {document.cookie.split("=")[1] !== project.creator ? (
        <button onClick={handleShowModal}>Collaborators</button>
      ) : (
        ""
      )}
      {showModal && <select></select>}
    </div>
  );
};

export default ProjectDetails;
