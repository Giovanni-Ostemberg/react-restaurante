// Código, Data de Criação, Pessoa, data de alteração, usuário responsável por criação e alteração, Itens
// Status do pedido (Pago, pendente, Pago parcialmente)
//
import React, { useEffect } from "react";
import css from "./pedidos.module.css";
import M from "materialize-css";
import ProdutosCategoria from "./ProdutosCategoria";

export default function CadastroPedidos({ selectedClient, handleHome }) {
  useEffect(() => {
    let el = document.querySelector(".tabs");
    var instance = M.Tabs.init(el, {});
  }, []);

  const handleAdd = () => {
    // const product = document.querySelector;
  };

  return (
    <div className={css.body}>
      <div className={"row " + css.secaoTitle}>
        <div className="col s6">
          <h6>{selectedClient}</h6>
        </div>
        <div className="col s3 offset-s3">
          <button className="btn btn-floating white ">
            <i className="material-icons blue">library_add</i>
          </button>
        </div>
      </div>

      <div class={"row " + css.secao}>
        <div class="col s12">
          <ul class="tabs">
            <li class="tab col s3">
              <a href="#refeicoes">Refeições</a>
            </li>
            <li class="tab col s3">
              <a class="active" href="#bebidas">
                Bebidas
              </a>
            </li>
            <li class="tab col s3">
              <a href="#sucos">Sucos</a>
            </li>
            <li class="tab col s3">
              <a href="#sobremesas">Sobremesas</a>
            </li>
          </ul>
        </div>
        <ProdutosCategoria handleAdd={handleAdd} />
      </div>
      <div class="divider"></div>

      <div class="divider"></div>
      <div className={"row " + css.tableItem} style={{ marginBottom: "0" }}>
        <div class="col s12 ">
          <table className="striped centered">
            <thead>
              <tr>
                <th>Qtd</th>
                <th>Item</th>
                <th>Valor Un.</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>01</td>
                <td>Refeição</td>
                <td>R$12,00</td>
                <td>R$12,00</td>
              </tr>
              <tr>
                <td>03</td>
                <td>Coca-cola</td>
                <td>$3,00</td>
                <td>$9,00</td>
              </tr>
              <tr>
                <td>01</td>
                <td>Sobremesa</td>
                <td>R$3,00</td>
                <td>R$3,00</td>
              </tr>
            </tbody>
            <tfoot>
              <td colSpan="3">
                <b>Total do Pedido</b>
              </td>
              <td>R$24,00</td>
            </tfoot>
          </table>
        </div>
      </div>
      <div class="divider"></div>

      <div className="row">
        <div className="col s3 offset-s8">
          <button className="btn red darken" onClick={handleHome}>
            <i className="material-icons">home</i>
          </button>
        </div>
      </div>
    </div>
  );
}
