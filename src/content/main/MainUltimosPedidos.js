import React from "react";
import css from "../css/index.module.css";

export default function MainUltimosPedidos() {
  const rows = [];
  for (let i = 1; i <= 10; i++) {
    rows.push(
      <li class="collection-item">
        <div className={css.cardContainer}>
          <div className={css.name}>
            <h6>Cliente {i}</h6>
          </div>
          <div className={css.itens}>
            <span>1x Marmitex nº8 + 1x Coca-cola Mini + 2x trufas</span>
          </div>
          <div className={css.total}>
            <span>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Math.random() * (50 - 5) + 5)}
            </span>
          </div>
        </div>
      </li>
    );
  }
  return (
    <div
      // className="carousel-item z-depth-3"
      // href="#two!"
      id="last"
      style={{
        height: "99%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
      }}
    >
      <div className={css.collectionContainer}>
        <ul
          className="collection with-header"
          style={{ marginTop: 0, overflow: "auto" }}
        >
          {rows}
        </ul>
      </div>
    </div>
  );
}
