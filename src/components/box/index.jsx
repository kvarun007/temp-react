import { useEffect, useState } from "react";

export default function Box() {
  const [rowValue, setRowValue] = useState(null);
  const [colValue, setColValue] = useState(null);
  const [next, setNext] = useState(false);
  const [addRow, setAddRow] = useState(false);
  const arr = [];

  function handleSubmit() {
    setNext(true);
    console.log(rowValue, colValue);
  }

  function handleInputChange(event) {
    const currRow = Number(rowValue) + 1;
    const currCol = Number(colValue) + 1;
    if (addRow === false) {
      setRowValue(currRow);
      setColValue(currCol);
      setAddRow(true);
    }
    console.log(event.target.id);
    console.log(event.target.value);
    const row = event.target.id.slice(0, 2);
    const col = event.target.id.slice(1, 2);
    const lastRow = Number(rowValue) - 1;
    const lastCol = Number(colValue) - 1;
    console.log(document.getElementById(row + lastCol).value);
    console.log(document.getElementById(lastRow + col).value);
  }

  function Grid() {
    //console.log("working");
    const arr = [];
    for (let i = 0; i < rowValue; i++) {
      for (let j = 0; j < colValue; j++) {
        //console.log(i);
        arr.push(
          <input onChange={(e) => handleInputChange(e)} id={i + "_" + j} />
        );
      }
      arr.push(<br></br>);
    }
    console.log(arr);
    return <div>{arr}</div>;
  }
  return (
    <>
      <input
        placeholder="please enter the no of rows here"
        onChange={(e) => {
          setRowValue(e.target.value);
        }}
        value={rowValue}
        type="number"
      />
      <input
        placeholder="please enter the no of col here"
        onChange={(e) => {
          setColValue(e.target.value);
        }}
        value={colValue}
        type="number"
      />
      <button onClick={handleSubmit}>submit</button>
      <div>
        {next === true ? (
          <div>
            <Grid />
          </div>
        ) : null}
      </div>
    </>
  );
}
