import { Link } from "react-router-dom";
import { Img } from "react-image";
import "./Project.css";

const Project = (props) => {
  return (
    <Link to={`/projects/${props.details.project_id}`}>
      <div className="Project">
        <Img
          src={[
            props.project_image,
            "https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image.jpg",
          ]}
          alt=""
        />
        <h3>{props.details.name}</h3>
        <p>{props.details.details}</p>
      </div>
    </Link>
  );
};

export default Project;
