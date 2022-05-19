import ProfileDetails from "../components/ProfileDetails";

const Profile = () => {
  //fetch username from cookies
  const user = document.cookie.split("=")[1];

  //pass in username to ProfileDetails

  return (
    <div>
      <ProfileDetails username={user} />
    </div>
  );
};

export default Profile;
