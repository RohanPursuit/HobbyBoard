import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewProject = () => {
  const navigator = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  const [project, setProjects] = useState({
    name: "",
    details: "",
    project_image: "",
    archived: false,
  });

  const handleChange = (event) => {
    setProjects({ ...project, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${API}projects`, project).then(() => navigator("/projects"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Project Name</label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <label htmlFor="details">Description</label>
        <textarea id="details" type="text" onChange={handleChange} required />
        <label htmlFor="project_image">Image</label>
        <input id="project_image" type="text" onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewProject;
