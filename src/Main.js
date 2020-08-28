import React, { useEffect } from "react";
import M from "materialize-css";
import css from "./css/index.module.css";

export default function Main() {
  useEffect(() => {
    let elem = document.querySelector(".carousel");
    let instance = M.Carousel.init(elem, {});
    instance = M.Carousel.getInstance(elem);
  }, []);

  return (
    <div className="carousel" style={{ width: "100%" }}>
      <div
        className="carousel-item"
        href="#one!"
        style={{
          height: "100%",
          width: "80%",
          display: "block",
          overflow: "auto",
        }}
      >
        <ul class="collection with-header">
          <li class="collection-header">
            <h4 className="center-align">Clientes</h4>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
          <li class="collection-item">
            <div>
              Alvin
              <a href="#!" class="secondary-content">
                <i class="material-icons">send</i>
              </a>
            </div>
          </li>
        </ul>
      </div>
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
