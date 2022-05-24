import "./ModalCard.css";
import { useState, useEffect } from "react";
import axios from "axios";
import defaultImage from "../../helpers/helperFunction";
const ModalCard = ({
  conInfo: { username, project_id, permissions },
  owner,
}) => {
  const [uInfo, setInfo] = useState({});
  const URL = process.env.REACT_APP_API_URL;
  const user = document.cookie.split("=")[1];
  useEffect(() => {
    axios.get(`${URL}users/${username}`).then((res) => setInfo(res.data));
  }, [URL]);

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
        <p>{username}</p>
        {permissions === "request" && (
          <>
            <button>Accept</button> <button>Deny</button>
          </>
        )}
      </div>
      {permissions !== "request" && (username === user || user === owner) && (
        <button>{username === user ? "Leave" : "Kick"}</button>
      )}
    </div>
  );
};

export default ModalCard;
