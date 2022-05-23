import "./ConnModal.css";
import { useState, useEffect } from "react";
import axios from "axios";

//input project_id(number), setDisplay(state function)}
const ConnModal = ({ project_id, setDisplay }) => {
  const [conns, setConns] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}connections/${project_id}`)
      .then((res) => setConns(res.data));
  }, [URL, project_id]);

  return (
    <div className="ConnModal">
      <div className="darkScreen" onClick={setDisplay}></div>
      <div className="modalContent">Example Modal</div>
    </div>
  );
};

export default ConnModal;
