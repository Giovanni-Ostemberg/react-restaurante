import React from "react";
import css from "./css/index.module.css";

export default function ClientMenu() {
  return (
    <div className={css.clientContainer}>
      <div className={css.title}>
        <h3>Cadastro de Clientes</h3>
      </div>
      <div className={"row " + css.clientForm}>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="first_name"
                type="text"
                className="validate"
                autoFocus
              />
              <label htmlFor="first_name">Nome</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Sobrenome</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="address" type="text" className="validate" />
              <label htmlFor="address">Endereço</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
