// Código, Data de Criação, Pessoa, data de alteração, usuário responsável por criação e alteração, Itens
// Status do pedido (Pago, pendente, Pago parcialmente)
//
import React from "react";
import css from "./pedidos.module.css";

export default function CadastroPedidos({ selectedClient, handleHome }) {
  return (
    <div className={"row " + css.body}>
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
      <div className={"row  " + css.secao}>
        <div className={"col s4 valign-wrapper " + css.categorias}>
          <a class="waves-effect waves-light btn red darken-4">Categoria 1</a>
          <a class="waves-effect waves-light btn red darken-4">Categoria 2</a>
          <a class="waves-effect waves-light btn red darken-4">Categoria 3</a>
          <a class="waves-effect waves-light btn red darken-4">Categoria 4</a>
          <a class="waves-effect waves-light btn red darken-4">Categoria 5</a>
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
      <div class="divider"></div>
      <div class="row">
        <form class="col s12">
          <div class="row" style={{ marginBottom: "0" }}>
            <div class="input-field col s2" style={{ marginBottom: "0" }}>
              <input id="qtd" type="number" class="validate" />
              <label for="qtd">Qtd</label>
            </div>
            <div class="input-field col s4" style={{ marginBottom: "0" }}>
              <input id="descricao" type="text" class="validate" />
              <label for="descricao">Descrição</label>
            </div>
            <div class="input-field col s3" style={{ marginBottom: "0" }}>
              <input id="valor_un" type="number" class="validate" />
              <label for="valor_un">Valor Un.</label>
            </div>
            <div class="input-field col s3" style={{ marginBottom: "0" }}>
              <input id="total" type="number" class="validate" />
              <label for="total">Total</label>
            </div>
          </div>
        </form>
        <div className="container col s1 offset-s10">
          <button className="btn btn-floating">+</button>
        </div>
      </div>
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
