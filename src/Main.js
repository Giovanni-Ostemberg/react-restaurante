import React, { useEffect } from "react";
import M from "materialize-css";
import css from "./css/index.module.css";
import MainClientes from "./content/main/MainClientes";
import MainUltimosPedidos from "./content/main/MainUltimosPedidos";

export default function Main() {
  useEffect(() => {
    let elem = document.querySelector(".carousel");
    let instance = M.Carousel.init(elem, {});
    instance = M.Carousel.getInstance(elem);
  }, []);

  return (
    <div className="carousel" style={{ width: "100%" }}>
      <MainClientes />
      <MainUltimosPedidos />
      <a className="carousel-item" href="#two!">
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
      </a>
    </div>
  );
}
