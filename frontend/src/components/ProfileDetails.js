import axios from "axios";
import { useEffect, useState } from "react";
import { Img } from "react-image";

const ProfileDetails = (props) => {
  const API = process.env.REACT_APP_API_URL;
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}users/${props.username}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.warn(error));
  }, [API, props.username]);

  return (
    <div className="ProfileDetails">
      <Img
        src={[
          "place holder user image",
          "https://redzonekickboxing.com/wp-content/uploads/2017/04/default-image.jpg",
        ]}
        alt=""
      />
      <h2>{user.username}</h2>
      <p>{user.details}</p>
      {/* user resources */}
    </div>
  );
};

export default ProfileDetails;
