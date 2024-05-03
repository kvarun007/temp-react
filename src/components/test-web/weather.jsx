import { useState } from "react";
import HandleFetchWeather from "./weather-tem";
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

export default function WeatherApi() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(true);
  //const [data, setData] = useState();
  const [minTem, setMinTem] = useState(null);
  const [maxTem, setMaxTem] = useState(null);

  async function HandleFetchWeather(id) {
    console.log(id);

    try {
      const response = await fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${id}?apikey=lvMZCkLxGMGrqK6IJHxRIewfF2VzmKYB`
      );
      const data = await response.json();
      const max = data.DailyForecasts[0].Temperature.Maximum.Value;
      const min = data.DailyForecasts[0].Temperature.Minimum.Value;
      setMaxTem(max);
      setMinTem(min);
      console.log(maxTem);
      console.log(data);
      console.log(data.DailyForecasts[0].Temperature.Maximum.Value, "f");
      console.log(data.DailyForecasts[0].Temperature.Minimum.Value);
      document.getElementById("tem").innerText =
        "MAXTEM:" + max + "MINTEM:" + min;
      //const add = <div>max</div>;
      // ReactDOM.render(<HandleFetchWeather />, tem);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleFetchCityId() {
    try {
      const response = await fetch(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=lvMZCkLxGMGrqK6IJHxRIewfF2VzmKYB&q=${inputValue}`
      );
      const data = await response.json();
      const cityId = data[0].Key;
      console.log(cityId);

      if (data.length === 0) {
        setError(false);
      } else {
        setError(true);
        HandleFetchWeather(cityId);
      }
    } catch (e) {
      setError(false);
      console.log(e);
    }
  }

  return (
    <div id="conweather">
      <div>
        <h1>Enter the City name below!</h1>
      </div>
      <input
        className="id"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        className="sub"
        onClick={() => {
          handleFetchCityId();
        }}
      >
        submit
      </button>
      <div id="tem">
        {error === false ? (
          <div>
            <h2>Invailld City Name</h2>
          </div>
        ) : null}
      </div>
    </div>
  );
}
