import React, { useEffect } from "react";
import M, { AutoInit } from "materialize-css";
import css from "./css/index.module.css";
import MainClientes from "./content/main/MainClientes";
import MainUltimosPedidos from "./content/main/MainUltimosPedidos";
import TapButton from "./TapButton";

import Tabs from "./content/main/Tabs";
import Footer from "./Footer";

export default function Main({
  handleClientMenu,
  openClientMenu,
  handleProductMenu,
  isOpenProductMenu,
  handleOrderMenu,
}) {
  useEffect(() => {
    let el = document.querySelector(".tabs");
    var instance = M.Tabs.init(el, {
      // swipeable: true,
    });
  }, []);

  const handleInstanceChange = () => {
    // let elem = document.querySelector(".carousel");
    // let instance = M.Carousel.getInstance(elem);
    // instance.next();
  };

  window.onbeforeunload = () => {
    return "Confirmar";
  };

  return (
    <div className={css.main}>
      <div>
        <div className={css.bigTitle}>
          <h4>React Restaurante</h4>
        </div>
        <div class="row" style={{ width: "100%", marginBottom: "0" }}>
          <form style={{ width: "80%", margin: "auto", marginBottom: "0" }}>
            <div class="row center" style={{ marginBottom: "0" }}>
              <div class="input-field">
                <i class="material-icons prefix">search</i>
                <textarea
                  id="icon_prefix2"
                  class="materialize-textarea"
                ></textarea>
                <label for="icon_prefix2">Buscar</label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <Tabs handleInstanceChange={handleInstanceChange} />
        <MainClientes handleOrderMenu={handleOrderMenu} />
        <MainUltimosPedidos />
      </div>
      <TapButton
        handleClientMenu={handleClientMenu}
        isOpenClientMenu={openClientMenu}
        handleProductMenu={handleProductMenu}
        isOpenProductMenu={isOpenProductMenu}
      />
      <Footer />
    </div>
  );
}
