import React, { useState, useEffect } from "react";
import css from "./css/index.module.css";
import TapButton from "./TapButton";
import ProductMenu from "./content/produtos/CadastroProdutos";

import Loading from "./Loading";
import ClientMenu from "./content/clients/ClientMenu";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const loadingText = "React Restaurante!";
  const [loading, setLoading] = useState("");
  const [position, setPosition] = useState("");
  const [init, setInit] = useState(false);
  const [openClientMenu, setOpenClientMenu] = useState(false);
  const [openProductMenu, setOpenProductMenu] = useState(false);

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
    setOpenProductMenu(false);
    setOpenClientMenu(!openClientMenu);
  };

  const handleProductMenu = () => {
    setOpenClientMenu(false);
    setOpenProductMenu(!openProductMenu);
  };

  if (!init) {
    return <Loading loading={loading} />;
  } else {
    if (openClientMenu) {
      return (
        <div className={css.mainContainer}>
          {openClientMenu ? (
            <ClientMenu
              handleClientMenu={handleClientMenu}
              openClientMenu={openClientMenu}
              handleProductMenu={handleProductMenu}
              openProductMenu={openProductMenu}
            />
          ) : (
            <Main
              handleClientMenu={handleClientMenu}
              openClientMenu={openClientMenu}
              handleProductMenu={handleProductMenu}
              openProductMenu={openProductMenu}
            />
          )}
        </div>
      );
    } else {
      if (openProductMenu) {
        return (
          <div className={css.mainContainer}>
            <ProductMenu
              handleClientMenu={handleClientMenu}
              openClientMenu={openClientMenu}
              handleProductMenu={handleProductMenu}
              openProductMenu={openProductMenu}
            />
          </div>
        );
      } else {
        return (
          <div className={css.mainContainer}>
            <Main
              handleClientMenu={handleClientMenu}
              openClientMenu={openClientMenu}
              handleProductMenu={handleProductMenu}
              openProductMenu={openProductMenu}
            />
          </div>
        );
      }
    }
  }
}

export default App;
