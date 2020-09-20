import React, { useEffect } from "react";
import css from "../css/index.module.css";
import M from "materialize-css";

export default function MainClientes({ handleOrderMenu }) {
  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems, {});
  }, []);

  const handleClick = (event) => {
    handleOrderMenu(event.target.id);
  };

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
              <i
                id={"Cliente " + i}
                onClick={handleClick}
                className="material-icons green-text text-accent-3"
              >
                add_circle_outline
              </i>
            </a>
          </div>
        </div>
        <div class="collapsible-body" style={{ textAlign: "right" }}>
          <a
            class="btn-floating btn-medium waves-effect waves-light  cyan accent-3"
            style={{ marginRight: "10px" }}
            onClick={handleClick}
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
      id="client"
      style={{
        width: "100%",
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
