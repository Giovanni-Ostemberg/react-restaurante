import React from "react";
import css from "../css/index.module.css";

export default function MainClientes() {
  let rows = [];
  for (let i = 1; i <= 20; i++) {
    rows.push(
      <li class="collection-item">
        <div className={css.name}>Cliente {i}</div>
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
        <h4>Clientes</h4>
      </div>
      <div className={css.collectionContainer}>
        <ul class="collection with-header" style={{ marginTop: 0 }}>
          {rows}
        </ul>
      </div>
    </div>
  );
}
