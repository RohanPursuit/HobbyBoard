import { useNavigate } from "react-router-dom";
import logo from "../assets/landingLogo.svg";
import "./LandingPage.css";

function LandingPage() {
  const nac = useNavigate();
  const handleExplore = () => {
    navigator("/projects");
  };
  const handleSignIn = () => {
    navigator("/signIn");
  };
  const handleSignUp = () => {
    navigator("/signup");
  };
  return (
    <div className="LandingPage">
      <img src={logo} alt="Hobby Board" />
      <button className="Explore" onClick={handleExplore}>
        Explore
      </button>
      <button className="SignIn" onClick={handleSignIn}>
        Sign In
      </button>
      <button className="NewAccount" onClick={handleSignUp}>
        New Account
      </button>
    </div>
  );
}

export default LandingPage;
