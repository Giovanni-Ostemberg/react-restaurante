import React, { useState, useEffect } from "react";
import css from "./css/index.module.css";
import TapButton from "./TapButton";
import Loading from "./Loading";
import ClientMenu from "./ClientMenu";
import Main from "./Main";

function App() {
  const loadingText = "React Restaurante!";
  const [loading, setLoading] = useState("");
  const [position, setPosition] = useState("");
  const [init, setInit] = useState(false);
  const [openClientMenu, setOpenClientMenu] = useState(false);

  useEffect(() => {
    let showText = loading;
    let index = +position;
    const loop = setInterval(() => {
      if (showText.length !== loadingText.length) {
        showText += loadingText[index];
        setLoading(showText);
        index++;
        setPosition(index);
      } else {
        setInit(true);
        clearInterval(loop);
      }
    }, 100);
  }, []);

  const handleClientMenu = () => {
    setOpenClientMenu(!openClientMenu);
    console.log(openClientMenu);
  };

  if (!init) {
    return <Loading loading={loading} />;
  } else {
    return (
      <div style={{ height: "100%", width: "100%" }}>
        {/* {!openClientMenu && <Main />} */}
        {openClientMenu ? <ClientMenu /> : <Main />}
        <TapButton
          handleClientMenu={handleClientMenu}
          isOpenClientMenu={openClientMenu}
        />
      </div>
    );
  }

  // return (
  //   <div>
  //     {init && <Loading />}
  //     <TapButton />;
  //   </div>
  // );
}

export default App;
