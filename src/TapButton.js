import React, { useState, useEffect } from "react";
import M from "materialize-css";

export default function TapButton({
  handleClientMenu,
  isOpenClientMenu,
  isOpenProductMenu,
  handleProductMenu,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [elem, setElem] = useState(document.querySelector("#tap"));
  const [instance, setInstance] = useState(
    M.FloatingActionButton.init(elem, {})
  );

  useEffect(() => {
    const start = async () => {
      setElem(document.querySelector("#tap"));
      setInstance(M.FloatingActionButton.init(elem, {}));
    };
    start();
  }, []);

  const openClientMenu = () => {
    handleClientMenu();
  };

  const closeInstance = () => {
    let elem = document.querySelector(".fixed-action-btn");
    let instance = M.FloatingActionButton.init(elem, {});
    instance.close();
    setInstance(instance);
  };

  return (
    <div className="fixed-action-btn" id="tap">
      <a className="btn-floating btn-large red hoverable">
        <i className="large material-icons">mode_edit</i>
      </a>
      <ul onClick={closeInstance}>
        <li>
          <a className="btn-floating red hoverable" onClick={openClientMenu}>
            <i className="material-icons">
              {!isOpenClientMenu && "people"}
              {isOpenClientMenu && "home"}
            </i>
          </a>
        </li>
        <li>
          <a
            className="btn-floating yellow darken-1 hoverable"
            onClick={handleProductMenu}
          >
            <i className="material-icons">
              {!isOpenProductMenu && "restaurant_menu"}
              {isOpenProductMenu && "home"}
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
