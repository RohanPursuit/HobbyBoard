import { Link } from "react-router-dom";
import plus from "../../assets/circle-plus.svg";

const NavBar = () => {
  return (
    <nav className="Nav">
      <img src={plus} alt="Add Project" />
    </nav>
  );
};

export default NavBar;
