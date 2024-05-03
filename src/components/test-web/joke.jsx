import { useState } from "react";
import FetchData from "./joke2";
import React from "react";
import ReactDOM from "react-dom";
import "./stylesjoke.css";

export default function JokeApi() {
  const [category, setCategory] = useState("");
  const [flags, setFlags] = useState("");
  const [type, setType] = useState("");
  const [jokeString, setJokeString] = useState("");
  const [amount, setAmount] = useState("");
  //const [url, setUrl] = useState("https://v2.jokeapi.dev/joke/" + category);
  let url =
    "https://v2.jokeapi.dev/joke/" +
    category +
    flags +
    type +
    jokeString +
    amount;

  function handleSubmit() {
    const container = document.getElementById("jokeContainer");
    ReactDOM.render(<FetchData url={url} />, container);
  }

  function handleJoke(e, id, altValue) {
    //console.log(document.getElementById(id).checked);
    if (document.getElementById(id).checked === true) {
      if (!type) {
        setType(e.target.value);
      } else {
        setType("");
      }
    } else {
      if (type === "") {
        console.log(altValue);
        setType(altValue);
      } else {
        setType("");
      }
    }
  }

  function handleFlags(e, id) {
    console.log(document.getElementById(id).checked);
    if (document.getElementById(id).checked === true) {
      if (flags == "") {
        //setFlags("?blacklistFlags=" + e.target.value);
        setFlags(`?blacklistFlags=${e.target.value}`);
      } else if (flags == "?blacklistFlags=") {
        setFlags(flags + e.target.value);
      } else {
        setFlags(flags + "," + e.target.value);
      }
    } else {
      if (flags === "?blacklistFlags=" + e.target.value) {
        setFlags("");
      } else if (flags.includes("," + e.target.value)) {
        setFlags(flags.replace("," + e.target.value, ""));
      } else if (flags.includes("=" + e.target.value)) {
        setFlags(flags.replace(e.target.value + ",", ""));
      }
      //console.log("dfd");
      //setFlags(flags.replace(e.target.value, ""));

      //setFlags(flags.replace(e.target.value, ""));
    }
  }

  return (
    <div id="jokeContainer" className="jokeContainer">
      <form>
        <div className="categoryContainer">
          Select category / categories:
          <div className="categoryBox">
            <input
              type="radio"
              name="category"
              value="any"
              onChange={(e) => {
                console.log(e.target.value);
                setCategory(e.target.value);
                //setUrl(url);
              }}
            />
            <label>any</label>
            <input
              type="radio"
              name="category"
              value="custom"
              onChange={(e) => {
                console.log(e.target.value);
                setCategory(e.target.value);
                //setUrl(url);
              }}
            />
            <label>custom</label>
          </div>
        </div>

        <div className="flagsContainer">
          Select flags to blacklist:
          <div className="flagsBox">
            <input
              type="checkbox"
              value="nsfw"
              id="nsfw"
              onChange={(e, id) => {
                //console.log(document.getElementById(id).checked);
                //console.log(e.target.value);
                handleFlags(e, "nsfw");
              }}
            />
            <label>nsfw</label>
            <input
              type="checkbox"
              value="religious"
              id="religious"
              onChange={(e) => {
                //console.log(e.target.value);
                handleFlags(e, "religious");
              }}
            />
            <label>religious</label>
            <input
              type="checkbox"
              value="political"
              id="political"
              onChange={(e) => {
                //console.log(e.target.value);
                handleFlags(e, "political");
              }}
            />
            <label>political</label>
            <input
              type="checkbox"
              value="racist"
              id="racist"
              onChange={(e) => {
                //console.log(e.target.value);
                handleFlags(e, "racist");
              }}
            />
            <label>racist</label>
            <input
              type="checkbox"
              value="sexist"
              id="sexist"
              onChange={(e) => {
                //console.log(e.target.value);
                handleFlags(e, "sexist");
              }}
            />
            <label>sexist</label>
            <input
              type="checkbox"
              value="explicit"
              id="explicit"
              onChange={(e) => {
                //console.log(e.target.value);
                handleFlags(e, "explicit");
              }}
            />
            <label>explicit</label>
          </div>
        </div>

        <div className="jokeTypeContainer">
          Select at least one joke type:
          <div className="jokeTypeBox">
            <input
              type="checkbox"
              value="&type=single"
              id="single"
              onChange={(e) => {
                handleJoke(e, "single", "&type=twopart");
              }}
            />
            <label>single</label>
            <input
              type="checkbox"
              value="&type=twopart"
              id="double"
              onChange={(e) => {
                handleJoke(e, "double", "&type=single");
              }}
            />
            <label>twopart</label>
          </div>
        </div>

        <div className="searchJokeContainer">
          Search for a joke that contains this search string
          <div className="searchJOkeBox">
            <input
              onChange={(e) => {
                setJokeString("&contains=" + e.target.value);
              }}
            />
          </div>
        </div>

        <div className="amountContainer">
          Amount of jokes:
          <input
            type="number"
            min="1"
            max="10"
            onChange={(e) => {
              setAmount("&amount=" + e.target.value);
            }}
          />
        </div>
      </form>

      <button onClick={handleSubmit}>submit</button>

      <div>{url}</div>
    </div>
  );
}
