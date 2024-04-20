import data from "./data";
import "./style.css";
import { useState } from "react";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiSelect, setMultiSelect] = useState(false);
  const [multi, setMulti] = useState([]);

  function handleSingleClick(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiselect(getCurrentId) {
    let cpyMulti = [...multi];
    const findIndexOfCurrentId = cpyMulti.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) {
      cpyMulti.push(getCurrentId);
    } else {
      cpyMulti.splice(findIndexOfCurrentId, 1);
    }
    setMulti(cpyMulti);
    console.log(selected, multi);
  }
  return (
    <div className="wrapper">
      <button onClick={() => setMultiSelect(!multiSelect)}>MULTI SELECT</button>
      <div className="accordian">
        <div className="items">
          {data && data.length > 0 ? (
            data.map((items) => (
              <div
                onClick={
                  multiSelect
                    ? () => handleMultiselect(items.id)
                    : () => handleSingleClick(items.id)
                }
                className="item"
              >
                <div className="title">
                  <h3>{items.question}</h3>
                  <span>+</span>
                </div>
                {multiSelect
                  ? multi.indexOf(items.id) !== -1 && (
                      <div className="acc-content ">{items.answer}</div>
                    )
                  : selected === items.id && (
                      <div className="acc-content ">{items.answer}</div>
                    )}
              </div>
            ))
          ) : (
            <div> no data found </div>
          )}
        </div>
      </div>
    </div>
  );
}
