import { useParams } from "react-router-dom";
import ProfileDetails from "../components/ProfileDetails";
import "./Profile.css";

const Profile = () => {
  //fetch username from cookies
  let user = localStorage.getItem("credentials");
  let { username } = useParams();
  if (username) {
    user = username;
  }

  //pass in username to ProfileDetails

  return (
    <div className="Profile">
      {!localStorage.getItem("credentials") && !username ? (
        <p>Please sign in to view your profile!</p>
      ) : (
        <ProfileDetails username={user} />
      )}
    </div>
  );
};

export default Profile;
