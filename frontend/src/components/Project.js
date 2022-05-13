import { Link } from 'react-router-dom';

const Project = (props) => {
    return (
      <div className="Project">
        <img src={props.project_image} alt='' width='75' height='75'/>
        <h3>{props.details.name}</h3>
        <p>{props.details.details}</p>
      </div>
    );
}

export default Project;