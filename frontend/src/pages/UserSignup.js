import UserSignupForm from "../components/UserSignupForm";
import "./UserSignup.css";

function UserSignup() {
  const user = localStorage.getItem("credentials");
  return (
    <div className="UserSignup">
      {user ? <p>Already signed in as "{user}"</p> : <UserSignupForm />}
    </div>
  );
}

export default UserSignup;
