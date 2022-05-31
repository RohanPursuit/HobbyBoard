import UserSignInForm from "../components/UserSignInForm";
import "./UserSignIn.css";

function UserSignIn() {
  const user = localStorage.getItem("credentials");
  return (
    <div className="UserSignIn">
      {user ? <p>Already signed in as "{user}"</p> : <UserSignInForm />}
    </div>
  );
}

export default UserSignIn;
