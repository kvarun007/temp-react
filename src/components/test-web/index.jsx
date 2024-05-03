import "./styles.css";
import JokeApi from "./joke";
import React from "react";
import ReactDOM from "react-dom";
import WeatherApi from "./weather";
import IconApi from "./icon";

export default function InitialPage() {
  function handleJokes() {
    console.log("dfsd");
    /*const div = document.createElement("div");
        div.innerHTML ="<div> dhhfds</div>"
        document.getElementById("container").append(div)*/

    const container = document.getElementById("container");
    ReactDOM.render(<JokeApi />, container);
  }

  function handleWeather() {
    const container = document.getElementById("container");
    ReactDOM.render(<WeatherApi />, container);
  }

  function handleIcons() {
    const container = document.getElementById("container");
    ReactDOM.render(
      <IconApi
        url={
          "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=lvMZCkLxGMGrqK6IJHxRIewfF2VzmKYB&q=delhi"
        }
      />,
      container
    );
  }

  return (
    <div id="container" className="container">
      <div>
        <h1>Select the Following one</h1>
      </div>
      <div className="buttons">
        <button
          className="jokes"
          onClick={() => {
            handleJokes();
          }}
        >
          jokes
        </button>
        <button
          className="weather"
          onClick={() => {
            handleWeather();
          }}
        >
          weather
        </button>
        <button
          className="icons"
          onClick={() => {
            handleIcons();
          }}
        >
          icons
        </button>
      </div>
    </div>
  );
}
