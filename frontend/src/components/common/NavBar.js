import { useNavigate } from "react-router-dom";
import plus from "../../assets/circle-plus.svg";

const NavBar = () => {
  const nav = useNavigate()

  const handleCreateProject = () => {
    nav("/projects/new")
  }

  return (
    <nav className="Nav">
      <img onClick={handleCreateProject} src={plus} alt="Add Project" />
    </nav>
  );
};

export default NavBar;
