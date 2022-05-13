import { Link } from "react-router-dom";
import "./Project.css";

const Project = (props) => {
  return (
    <Link to={`/projects/${props.details.project_id}`}>
      <div className="Project">
        <img src={props.details.project_image} alt="" width="75" height="75" />
        <h3>{props.details.name}</h3>
        <p>{props.details.details}</p>
      </div>
    </Link>
  );
};

export default Project;
