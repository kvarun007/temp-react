import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);
  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }
  return (
    <div>
      <button onClick={handleToggleModalPopup}>open Modal Popup</button>
      {showModalPopup && <Modal body={<div> Customized body</div>} />}
    </div>
  );
}
