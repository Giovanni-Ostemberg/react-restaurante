import React, { useState, useEffect } from "react";
import css from "./css/index.module.css";
import TapButton from "./TapButton";
import ProductMenu from "./content/produtos/CadastroProdutos";
import OrderMenu from "./content/pedidos/CadastroPedidos";
// import { BrowserHistory } from "react-history";
import { Route, Switch } from "react-router-dom";

import Loading from "./Loading";
import ClientMenu from "./content/clients/ClientMenu";
import Main from "./Main";
import Footer from "./Footer";
import CadastroPedido from "./content/pedidos/CadastroPedidos";

function App() {
  const loadingText = "React Restaurante!";
  const [loading, setLoading] = useState("");
  const [position, setPosition] = useState("");
  const [init, setInit] = useState(false);
  const [openClientMenu, setOpenClientMenu] = useState(false);
  const [openProductMenu, setOpenProductMenu] = useState(false);
  const [openOrderMenu, setOpenOrderMenu] = useState(false);
  const [selectedClient, setSelectedClient] = useState("");

  window.onbeforeunload = () => {
    return "Confirmar";
  };

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
    setOpenOrderMenu(false);
    setOpenClientMenu(!openClientMenu);
  };

  const handleProductMenu = () => {
    setOpenOrderMenu(false);
    setOpenClientMenu(false);
    setOpenProductMenu(!openProductMenu);
  };

  const handleOrderMenu = (client) => {
    setOpenOrderMenu(!openOrderMenu);
    setSelectedClient(client);
    setOpenClientMenu(false);
    setOpenProductMenu(false);
  };

  const closeOrderMenu = () => {
    setOpenOrderMenu(!openOrderMenu);
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
              handleOrderMenu={handleOrderMenu}
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
        if (openOrderMenu) {
          return (
            <div className={css.mainContainer}>
              <OrderMenu
                handleOrderMenu={handleOrderMenu}
                selectedClient={selectedClient}
                handleHome={closeOrderMenu}
              />
            </div>
          );
        } else {
          return (
            <div className={css.mainContainer}>
              <Main
                handleClientMenu={handleClientMenu}
                handleOrderMenu={handleOrderMenu}
                openClientMenu={openClientMenu}
                handleProductMenu={handleProductMenu}
                openProductMenu={openProductMenu}
              />
            </div>
          );
        }
      }
    }

    // return <CadastroPedido />;
  }
}
export default App;
