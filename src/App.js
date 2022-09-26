import { useState } from "react";
import "./styles.css";

export default function App() {
  const [city, setcity] = useState("Delhi");
  const setMumbai = () => {
    setcity("Mumbai");
  };

  const setChennai = () => {
    setcity("Chennai");
  };

  const setBangalore = () => {
    setcity("Bangalore");
  };

  const reset = () => {
    setcity("Delhi");
  };

  return (
    <div className="App">
      <p>Hi, I am from {city}</p>
      <button onClick={reset}>Reset</button>
      <button onClick={setMumbai}>Mumbai</button>
      <button onClick={setChennai}>Chennai</button>
      <button onClick={setBangalore}>Bangalore</button>
    </div>
  );
}
