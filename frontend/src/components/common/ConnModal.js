import "./ConnModal.css";

//input {display (boolnean), project_id(number), setDisplay(state function)}
const ConnModal = ({ display, project_id, setDisplay }) => {
  return (
    <div className="ConnModal">
      ConnModal
      <div className="darkScreen" onClick={setDisplay}></div>
    </div>
  );
};

export default ConnModal;
