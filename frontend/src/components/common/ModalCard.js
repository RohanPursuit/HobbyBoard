import "./ModalCard.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import defaultImage from "../../helpers/helperFunction";
const ModalCard = ({
  conInfo: { username, project_id, permissions },
  owner,
  modalReload,
  pageReload,
  closeModal,
}) => {
  const [uInfo, setInfo] = useState({});
  const URL = process.env.REACT_APP_API_URL;
  const user = document.cookie.split("=")[1];
  useEffect(() => {
    axios.get(`${URL}users/${username}`).then((res) => setInfo(res.data));
  }, [URL]);

  const handleRemoveCollaborator = () => {
    if (
      window.confirm(
        username === user
          ? "Are you sure that you want to leave?"
          : "Are you sure you want to kick contributor?"
      )
    ) {
      axios
        .delete(`${URL}connections/${username}`, { data: { project_id } })
        .then((_) => {
          if (username === user) {
            pageReload();
            closeModal();
          } else {
            modalReload();
          }
        });
    }
  };

  const handleDenyRequest = () => {
    if (window.confirm("Are you sure you want to deny acceptance?")) {
      axios
        .delete(`${URL}connections`, { data: { username, project_id } })
        .then((_) => modalReload());
    }
  };

  const handleAcceptRequest = () => {
    if (window.confirm("Confirm acceptance.")) {
      axios
        .put(`${URL}connections`, {
          username,
          project_id,
        })
        .then((_) => modalReload());
    }
  };

  const cardClass =
    "ModalCard" + (permissions === "request" ? " reqCard" : " colCard");

  return (
    <div className={cardClass}>
      <img
        src={uInfo.profile_image || ""}
        alt=""
        onError={defaultImage}
        className="pfp"
      ></img>
      <div className="cardName">
        <p>
          <Link to={`/profile/${username}`}>{username}</Link>
        </p>
        {permissions === "request" && (
          <>
            <button onClick={handleAcceptRequest}>Accept</button>{" "}
            <button onClick={handleDenyRequest}>Deny</button>
          </>
        )}
      </div>
      {permissions !== "request" && (username === user || user === owner) && (
        <button onClick={handleRemoveCollaborator}>
          {username === user ? "Leave" : "Kick"}
        </button>
      )}
    </div>
  );
};

export default ModalCard;
