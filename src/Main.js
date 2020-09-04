import React, { useEffect } from "react";
import M from "materialize-css";
import css from "./css/index.module.css";
import MainClientes from "./content/main/MainClientes";
import MainUltimosPedidos from "./content/main/MainUltimosPedidos";

export default function Main() {
  useEffect(() => {
    let elem = document.querySelector(".carousel");
    let instance = M.Carousel.init(elem, {
      indicators: true,
    });
    instance = M.Carousel.getInstance(elem);
    console.log(instance);
  }, []);

  return (
    <div className={css.main}>
      <div className={css.bigTitle}>
        <h3>React Restaurante</h3>
      </div>
      <div class="row">
        <form class="col s12">
          <div class="row">
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
      <div
        className="carousel carousel-slider center"
        style={{ width: "100%", border: "hidden" }}
      >
        <MainClientes />
        <MainUltimosPedidos />
        {/* <a className="carousel-item" href="#two!">
        <img src="https://lorempixel.com/250/250/nature/2" />
      </a>
      <a className="carousel-item" href="#three!">
        <img src="https://lorempixel.com/250/250/nature/3" />
      </a>
      <a className="carousel-item" href="#four!">
        <img src="https://lorempixel.com/250/250/nature/4" />
      </a>
      <a className="carousel-item" href="#five!">
        <img src="https://lorempixel.com/250/250/nature/5" />
      </a> */}
      </div>
    </div>
  );
}
