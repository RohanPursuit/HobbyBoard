//import css
import "./TopBarM.css";

//import back button
import BackButton from "./BackButton.js";

//import useNavigate
import { useNavigate } from "react-router-dom";

const TopBarM = () => {
  //set variable for navigate
  const nav = useNavigate();

  //create function to handle home logo
  const handleHome = () => {
    nav("/");
  };

  return (
    <div className="TopBarM">
      <BackButton />
      <img
        src="https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image.jpg"
        alt="HobbyBoard Logo"
        className="topLogo"
        onClick={handleHome}
      />
    </div>
  );
};

//export our component
export default TopBarM;
