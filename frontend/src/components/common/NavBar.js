import { useNavigate, useLocation } from "react-router-dom";
import plus from "../../assets/circle-plus.svg";

const NavBar = () => {
  const nav = useNavigate()
  const location = useLocation().pathname

  const handleCreateProject = () => {
    nav("/projects/new")
  }

  return (
    <nav className="Nav">
      {location !== '/projects/new' && <img onClick={handleCreateProject} src={plus} alt="Add Project" />}
    </nav>
  );
};

export default NavBar;
