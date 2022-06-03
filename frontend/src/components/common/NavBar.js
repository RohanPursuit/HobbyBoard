import { useNavigate } from "react-router-dom";
import TopBarM from "./TopBarM";
// import plus from "../../assets/circle-plus.svg";
// import profile from "../../assets/profile-circled.svg";
import { profileCircled, settings, signIn, signOut, home, circlePlus } from "../../assets/svgs";
// import settings from "../../assets/settings.svg";
// import signIn from "../../assets/sign-in.svg";
// import signOut from "../../assets/sign-out.svg";
// import home from "../../assets/home.svg";
import "./NavBar.css";

const NavBar = () => {
  const nav = useNavigate();

  const handleCreateProject = () => {
    nav("/projects/new");
  };

  const handleSignIn = () => {
    nav("/signIn");
  };

  const handleProfile = () => {
    nav("/profile");
  };

  const handleSignOut = () => {
    localStorage.removeItem("credentials");
    nav("/");
  };

  const handleProjects = () => {
    nav("/projects");
  };

  return (
    <nav className="Nav">
      <TopBarM />
      {/* <img onClick={handleProfile} src={profile} alt="Profile" /> */}
      <div onClick={handleProfile}>{profileCircled}</div>
      {/* <img src={settings} alt="settings" /> */}
      <div>{settings}</div>
      {/* <img onClick={handleProjects} src={home} alt="home" /> */}
      <div onClick={handleProjects}>{home}</div>
      {/* <img onClick={handleCreateProject} src={plus} alt="Add Project" /> */}
      <div onClick={handleCreateProject}>{circlePlus}</div>
      {localStorage.getItem("credentials") ? (
        // <img onClick={handleSignOut} src={signOut} alt="Sign Out" />
        <div onClick={handleSignOut}>{signOut}</div>
      ) : (
        // <img onClick={handleSignIn} src={signIn} alt="Sign In" />
        <div onClick={handleSignIn}>{signIn}</div>
      )}
    </nav>
  );
};

export default NavBar;
