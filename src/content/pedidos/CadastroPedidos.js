// Código, Data de Criação, Pessoa, data de alteração, usuário responsável por criação e alteração, Itens
// Status do pedido (Pago, pendente, Pago parcialmente)
//
import React from "react";
import css from "./pedidos.module.css";

export default function CadastroPedidos() {
  return (
    <div className={css.body}>
      <div className={"row  " + css.secao}>
        <div className={"col s4 valign-wrapper " + css.categorias}>
          <a class="waves-effect waves-light btn">Categoria 1</a>
          <a class="waves-effect waves-light btn">Categoria 2</a>
          <a class="waves-effect waves-light btn">Categoria 3</a>
          <a class="waves-effect waves-light btn">Categoria 4</a>
          <a class="waves-effect waves-light btn">Categoria 5</a>
        </div>
        <div className={"col s8 " + css.produtos}>
          <button className="btn ">Produto</button>
          <button className="btn">Produto</button>
          <button className="btn">Produto</button>
          <button className="btn">Produto</button>
          <button className="btn">Produto</button>
          <button className="btn">Produto</button>
          <button className="btn">Produto</button>
          <button className="btn ">Produto</button>
          <button className="btn">Produto</button>
          <button className="btn">Produto</button>
          <button className="btn">Produto</button>
          <button className="btn">Produto</button>
          <button className="btn">Produto</button>
          <button className="btn">Produto</button>
          <button className="btn">Produto</button>
          <button className="btn ">Produto</button>
          <button className="btn">Produto</button>
          <button className="btn">Produto</button>
          <button className="btn">Produto</button>
          <button className="btn">Produto</button>
          <button className="btn">Produto</button>
          <button className="btn">Produto</button>
        </div>
      </div>
      <div className="row"></div>
      <div className="row"></div>
    </div>
  );
}
