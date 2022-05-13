import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProjectDetails = (props) => {
  const API = process.env.REACT_APP_API_URL;
  const [project, setProject] = useState([]);
  const params = useParams();
  console.log(`${API}projects/${params.pid}`);
  useEffect(() => {
    axios
      .get(`${API}projects/${params.pid}`)
      .then((response) => setProject(response.data))
      .catch((error) => console.warn(error));
  }, [API, params.pid]);
  return (
    <div className="ProjectDetails">
      <img src={project.project_image} alt="Project Banner" />
      <h2>{project.name}</h2>
      <h3>Details:</h3>
      <p>{project.details}</p>
      {/* Archive Project Button */}
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
