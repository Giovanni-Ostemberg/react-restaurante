import React, { useState } from "react";
import M from "materialize-css";

export default function TapButton({ handleClientMenu, isOpenClientMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  const [elem, setElem] = useState(document.querySelector(".fixed-action-btn"));
  const [instance, setInstance] = useState(
    M.FloatingActionButton.init(elem, {})
  );

  const handleMenu = async () => {
    // await setElement().then(console.log(elem));
    // await open();
    // instance.open();

    let elem = document.querySelector(".fixed-action-btn");
    let instance = M.FloatingActionButton.init(elem, {});
    instance = instance.open();
  };

  const openClientMenu = () => {
    let elem = document.querySelector(".fixed-action-btn");
    let instance = M.FloatingActionButton.init(elem, {});
    instance = instance.open();

    handleClientMenu();
  };

  return (
    <div className="fixed-action-btn" onMouseEnter={handleMenu}>
      <a className="btn-floating btn-large red hoverable">
        <i className="large material-icons">mode_edit</i>
      </a>
      <ul>
        <li>
          <a className="btn-floating red hoverable" onClick={openClientMenu}>
            <i className="material-icons">
              {!isOpenClientMenu && "people"}
              {isOpenClientMenu && "home"}
            </i>
          </a>
        </li>
        <li>
          <a className="btn-floating yellow darken-1 hoverable">
            <i className="material-icons">
              {!isOpenClientMenu && "restaurant_menu"}
              {isOpenClientMenu && "home"}
            </i>
          </a>
        </li>
        <li>
          <a className="btn-floating green hoverable">
            <i className="material-icons">publish</i>
          </a>
        </li>
        <li>
          <a className="btn-floating blue hoverable">
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
