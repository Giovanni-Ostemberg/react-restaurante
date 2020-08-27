import React, { useState, useEffect } from "react";
import css from "./css/index.module.css";
import TapButton from "./TapButton";

function App() {
  const loadingText = "React Restaurante!";
  const [loading, setLoading] = useState("");
  const [position, setPosition] = useState("");
  const [init, setInit] = useState(false);

  useEffect(() => {
    let showText = loading;
    let index = +position;
    const loop = setInterval(() => {
      if (showText.length !== loadingText.length) {
        showText += loadingText[index];
        console.log(index);
        setLoading(showText);
        index++;
        setPosition(index);
      } else {
        setInit(true);
        console.log(init);
        clearInterval(loop);
      }
    }, 100);
  }, []);

  if (!init) {
    return <h1>{loading}</h1>;
  } else {
    return <TapButton />;
  }
}

export default App;
