import React, { useEffect } from "react";
import css from "../css/index.module.css";
import M from "materialize-css";

export default function MainClientes() {
  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems, {});
  }, []);

  let rows = [];
  for (let i = 1; i <= 20; i++) {
    rows.push(
      <li class="collection-item " style={{ width: "100%", margin: 0 }}>
        <div class="collapsible-header valign-wapper" style={{ width: "100%" }}>
          <div>
            <i class="material-icons ">person</i>
          </div>
          <div style={{ width: "100%" }}>
            <span className={css.name + " left"}>Cliente {i}</span>
            <a className="btn-flat secondary-content right">
              <i className="material-icons green-text text-accent-3">
                add_circle_outline
              </i>
            </a>
          </div>
        </div>
        <div class="collapsible-body" style={{ textAlign: "right" }}>
          <a
            class="btn-floating btn-medium waves-effect waves-light  cyan accent-3"
            style={{ marginRight: "10px" }}
          >
            <i class="material-icons">edit</i>
          </a>
          <a class="btn-floating btn-medium waves-effect waves-light  red accent-3">
            <i class="material-icons">delete</i>
          </a>
        </div>
      </li>
    );
  }
  return (
    <div
      // className="carousel-item z-depth-3"
      id="client"
      // href="#one!"
      style={{
        // height: "400px",
        width: "100%",
        // display: "block",
        overflow: "auto",
      }}
    >
      <div className={css.collectionContainer}>
        <ul
          class="collapsible popout"
          style={{ marginTop: 0, overflow: "auto" }}
        >
          {rows}
        </ul>
      </div>
    </div>
  );
}
