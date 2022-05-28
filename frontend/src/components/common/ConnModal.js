import "./ConnModal.css";
import { useState, useEffect } from "react";
import { hoistCollabCard } from "../../helpers/helperFunction";
import ModalCard from "./ModalCard.js";
import axios from "axios";
import {socket} from "../../App.js"

//input project_id(number), setDisplay(state function)}
const ConnModal = ({ project_id, setDisplay, owner, pageReload }) => {
  const [conns, setConns] = useState([]);
  const [requestView, setView] = useState(false);
  const [reload, setReload] = useState(false);
  const user = document.cookie.split("=")[1];
  const isOwner = user === owner;
  const collaborators = hoistCollabCard(
    conns.filter(
      (e) => e.permissions === "collaborator" || e.permissions === "owner"
    )
  );
  const requesters = conns.filter((e) => e.permissions === "request");
  const URL = process.env.REACT_APP_API_URL;
  const listenForRequests = () => {
    socket.off().on("request" + project_id, modalReload)
    console.log("ran")
  }


  useEffect(() => {
    axios
      .get(`${URL}connections/${project_id}`)
      .then((res) => setConns(res.data))

      listenForRequests()

      return () => {
        socket.off()
      }
  }, [URL, project_id, reload]);

  const modalReload = () => {
    setReload(!reload);
  };

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
  const collabCards = collaborators.map((e, i) => (
    <ModalCard
      key={i}
      conInfo={e}
      owner={owner}
      modalReload={modalReload}
      pageReload={pageReload}
      closeModal={setDisplay}
    />
  ));
  const requestCards = requesters.map((e, i) => (
    <ModalCard key={i} conInfo={e} owner={owner} modalReload={modalReload} />
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
