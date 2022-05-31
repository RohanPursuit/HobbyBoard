import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import defaultImage from "../helpers/helperFunction";
import ConnModal from "../components/common/ConnModal.js";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const cred = localStorage.getItem("credentials");
  const API = process.env.REACT_APP_API_URL;
  const [project, setProject] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [collaborators, setCollaborators] = useState([]);
  const [requests, setRequest] = useState([]);
  const [updateConnections, setUpdateConnections] = useState(false);
  const params = useParams();
  const nav = useNavigate();
  // console.log(`${API}projects/${params.pid}`);
  useEffect(() => {
    axios
      .get(`${API}projects/${params.pid}`)
      .then((response) => setProject(response.data))
      .catch((error) => console.warn(error));
    axios.get(`${API}connections/${params.pid}`).then((response) => {
      console.log(response.data);
      //filter response ??
      setCollaborators(
        response.data.filter((el) => el.permissions === "collaborator")
      );
      //filter response ??
      setRequest(response.data.filter((el) => el.permissions === "request"));
    });
  }, [API, params.pid, updateConnections]);

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
        username: localStorage.getItem("credentials"),
        project_id: project.project_id,
      })
      .then(() => {
        alert("Request Pending");
        setUpdateConnections(!updateConnections);
      })
      .catch(() => {
        alert("Request failed");
      });
  };

  const handleCancelRequest = () => {
    const username = localStorage.getItem("credentials");
    const project_id = project.project_id;
    console.log(username, project_id);
    axios
      .delete(`${API}connections`, { data: { username, project_id } })
      .then(() => {
        alert("Request Canceled");
        setUpdateConnections(!updateConnections);
      })
      .catch(() => {
        alert("Error");
      });
  };

  const handleShowModal = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  // const handleRemoveCollaborator = ({ username }) => {
  //   const project_id = project.project_id;
  //   if (window.confirm("Are you sure you want to kick contributor?")) {
  //     axios.delete(`${API}connections/BZ`, { data: { project_id } });
  //   }
  // };

  // const handleAcceptRequest = () => {
  //   const username = "BZ";
  //   const project_id = project.project_id;
  //   if (window.confirm("Confirm acceptance.")) {
  //     axios.put(`${API}connections`, {
  //       username,
  //       project_id,
  //     });
  //   }
  // };

  // const handleDenyRequest = () => {
  //   const username = "BZ";
  //   const project_id = project.project_id;
  //   if (window.confirm("Are you sure you want to deny acceptance?")) {
  //     axios.delete(`${API}connections`, { data: { username, project_id } });
  //   }
  // };

  const pageReload = () => {
    setUpdateConnections(!updateConnections);
  };

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
      {localStorage.getItem("credentials") === project.creator ? (
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
      {cred === project.creator ||
      collaborators.find((connection) => connection.username === cred) ? (
        <button onClick={handleShowModal}>Collaborators</button>
      ) : requests.find((connection) => connection.username === cred) ? (
        <button onClick={handleCancelRequest}>Cancel Request</button>
      ) : (
        <button onClick={handleJoin}>Join</button>
      )}
      {/* If visitor is the creator or collaborator on the current project
      a collaborators button should be rendered */}
      {showModal && (
        <ConnModal
          setDisplay={handleShowModal}
          project_id={project.project_id}
          owner={project.creator}
          pageReload={pageReload}
        />
      )}
    </div>
  );
};

export default ProjectDetails;
