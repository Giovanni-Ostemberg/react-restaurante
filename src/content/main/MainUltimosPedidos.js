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
      className="carousel-item"
      href="#one!"
      style={{
        height: "99%",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        // overflow: "auto",
      }}
    >
      <div className={css.title}>
        <h4>Últimos Pedidos</h4>
      </div>
      <div className={css.collectionContainer}>
        <ul class="collection with-header" style={{ marginTop: 0 }}>
          {rows}
        </ul>
      </div>
    </div>
  );
}
