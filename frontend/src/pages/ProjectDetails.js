import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProjectDetails = (props) => {
  const API = process.env.REACT_APP_API_URL;
  const [project, setProject] = useState([]);
  const params = useParams();
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
  console.log(project.archived);
  return (
    <div className="ProjectDetails">
      <img src={project.project_image} alt="Project Banner" />
      <h2>{project.name}</h2>
      <h3>Details:</h3>
      <p>{project.details}</p>
      {/* Archive Project Button */}
      <p>Archived: {`${project.archived}`}</p>
      <button onClick={handleArchive}>Archive</button>
      {/* Edit Project Page Button for authorized users */}
      {/* Delete Project Button */}
      {/* Links/Resources */}
      {/* {project.links.map((link) => {
                return <a href={link}>{link}</a>
            })} */}
      {/* Contributors */}
    </div>
  );
};

export default ProjectDetails;
