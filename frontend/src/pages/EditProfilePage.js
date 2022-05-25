import ProfileEditForm from "../components/ProfileEditForm";
import "./EditProfilePage.css";

const EditProfilePage = () => {
  const user = document.cookie.split("=")[1];
  return (
    <div className="EditProfile">
      <ProfileEditForm username={user} />
    </div>
  );
};

export default EditProfilePage;
