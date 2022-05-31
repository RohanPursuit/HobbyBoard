import NewProject from "../components/NewProjects";
import "./New.css";

const New = () => {
  return (
    <div className="NewProjectPage">
      {localStorage.getItem("credentials") ? (
        <NewProject />
      ) : (
        <p>Please Sign in to create a project!</p>
      )}
    </div>
  );
};

export default New;
