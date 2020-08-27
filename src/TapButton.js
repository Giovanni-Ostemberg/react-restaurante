import React, { useState } from "react";
import M from "materialize-css";
import css from "./css/index.module.css";

export default function TapButton() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    let elem = document.querySelector(".fixed-action-btn");
    let instance = M.FloatingActionButton.init(elem, { direction: "radial" });
    console.log(!isOpen);
    instance.open();
  };

  return (
    <div className="fixed-action-btn" onMouseEnter={handleMenu}>
      <a className="btn-floating btn-large red">
        <i className="large material-icons">mode_edit</i>
      </a>
      <ul>
        <li>
          <a className="btn-floating red">
            <i className="material-icons">insert_chart</i>
          </a>
        </li>
        <li>
          <a className="btn-floating yellow darken-1">
            <i className="material-icons">format_quote</i>
          </a>
        </li>
        <li>
          <a className="btn-floating green">
            <i className="material-icons">publish</i>
          </a>
        </li>
        <li>
          <a className="btn-floating blue">
            <i className="material-icons">attach_file</i>
          </a>
        </li>
      </ul>
    </div>
  );
}

// <div className="fixed-action-btn" onClick={handleMenu}>
//   <a id="menu" className="waves-effect waves-light btn-large btn-floating">
//     <i className="material-icons">menu</i>
//   </a>

//   <div
//     className="tap-target red white-text"
//     id="radialMenu"
//     data-target="menu"
//   >
//     <div className="tap-target-content">
//       <button className={css.button2}>1</button>
//       <button className={css.button2}>2</button>
//       <button className={css.button2}>3</button>
//     </div>
//   </div>
// </div>
