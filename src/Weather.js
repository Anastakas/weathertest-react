import React from "react";
import "./App.css";
import axios from "axios";
import { Audio } from "react-loader-spinner";
export default function Weather(props) {
  function showForecast(response) {
    alert(
      `The temperature in ${response.data.name} is ${response.data.main.temp}`
    );
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=98ebc9d71dbb712bf026f47391b0b077&units=metric`;
  axios.get(apiUrl).then(showForecast);

  return (
    <div>
      <h1>Hello Weather</h1>
      <Audio
        height="200"
        width="800"
        radius="2"
        color="orange"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
