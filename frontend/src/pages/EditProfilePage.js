import ProfileEditForm from "../components/ProfileEditForm";
import "./EditProfilePage.css";

const EditProfilePage = () => {
  const user = localStorage.getItem("credentials");
  return (
    <div className="EditProfile">
      <ProfileEditForm username={user} />
    </div>
  );
};

export default EditProfilePage;
