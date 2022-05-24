import "./ConnModal.css";
import { useState, useEffect } from "react";
import { hoistCollabCard } from "../../helpers/helperFunction";
import ModalCard from "./ModalCard.js";
import axios from "axios";

//input project_id(number), setDisplay(state function)}
const ConnModal = ({ project_id, setDisplay, owner }) => {
  const [conns, setConns] = useState([]);
  const [requestView, setView] = useState(false);
  const user = document.cookie.split("=")[1];
  const isOwner = user === owner;
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

  const modalTitle = <p className="modTitle">Connections</p>;
  const colBttn = (
    <button
      className={isOwner ? "tabBttn" : "tabBttn norm"}
      onClick={handleCollab}
    >
      Collaborators
    </button>
  );
  const reqBttn = (
    <button className="tabBttn" onClick={handleRequest}>
      Request
    </button>
  );
  const xBttn = (
    <button className="xBttn" onClick={setDisplay}>
      X
    </button>
  );
  const collabCards = collaborators.map((e) => (
    <ModalCard conInfo={e} owner={owner} request={requestView} />
  ));
  const requestCards = requesters.map((e) => (
    <ModalCard conInfo={e} owner={owner} />
  ));

  return (
    <div className="ConnModal">
      <div className="darkScreen" onClick={setDisplay}></div>
      <div className="modalContent">
        {modalTitle}
        {xBttn}
        {colBttn}
        {isOwner && reqBttn}
        {requestView ? requestCards : collabCards}
      </div>
    </div>
  );
};

export default ConnModal;
