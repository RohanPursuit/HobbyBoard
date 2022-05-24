import "./ConnModal.css";
import { useState, useEffect } from "react";
import defaultImage, { hoistCollabCard } from "../../helpers/helperFunction";
import axios from "axios";

//input project_id(number), setDisplay(state function)}
const ConnModal = ({ project_id, setDisplay }) => {
  const [conns, setConns] = useState([]);
  const [requestView, setView] = useState(false);
  const collaborators = hoistCollabCard(
    conns.filter(
      (e) => e.permissions === "collaborator" || e.permissions === "owner"
    )
  );
  const requesters = conns.filter((e) => e.permissions === "request");
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}connections/${project_id}`)
      .then((res) => setConns(res.data));
  }, [URL, project_id]);

  const handleCollab = () => {
    setView(false);
  };
  const handleRequest = () => {
    setView(true);
  };

  const colBttn = <button onClick={handleCollab}>Collaborators</button>;
  const reqBttn = <button onClick={handleRequest}>Request</button>;

  return (
    <div className="ConnModal">
      <div className="darkScreen" onClick={setDisplay}></div>
      <div className="modalContent">
        Test
        {colBttn}
        {reqBttn}
      </div>
    </div>
  );
};

export default ConnModal;
