import "./ConnModal.css";

//input {display (boolnean), project_id(number), setDisplay(state function)}
const ConnModal = ({ display, project_id, setDisplay }) => {
  return (
    <div className="ConnModal">
      <div className="darkScreen" onClick={setDisplay}></div>
      <div className="modalContent">Example Modal</div>
    </div>
  );
};

export default ConnModal;
