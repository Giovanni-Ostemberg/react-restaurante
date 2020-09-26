import React, { useEffect, useState } from "react";
import css from "./pedidos.module.css";
import M from "materialize-css";

export default function ProdutosCategoria({ handleAdd }) {
  const [produtos, setProdutos] = useState([
    { nome: "Marmitex Grande", qtd: 0, categoria: "refeicoes" },
    { nome: "Marmitex Pequeno", qtd: 0, categoria: "refeicoes" },
    { nome: "Marmitex Executivo", qtd: 0, categoria: "refeicoes" },
    { nome: "Prato Feito", qtd: 0, categoria: "refeicoes" },
    { nome: "Self Service", qtd: 0, categoria: "refeicoes" },
    { nome: "Marmita 1 Pessoa", qtd: 0, categoria: "refeicoes" },
    { nome: "Coca Cola 2L", qtd: 0, categoria: "bebidas" },
    { nome: "Coca Cola 1L", qtd: 0, categoria: "bebidas" },
    { nome: "Tubaína 600ml", qtd: 0, categoria: "bebidas" },
  ]);

  const [categorias, setCategorias] = useState([
    { nome: "refeicoes" },
    { nome: "bebidas" },
  ]);

  console.log(categorias);

  return categorias.map((cat) => {
    var prodCat = produtos.filter((prod) => {
      return prod.categoria === cat.nome;
    });

    return (
      //   <div id={cat.nome} className={css.itemsContainer}>
      <div id={cat.nome} className={"col s12 " + css.itemLine}>
        <ul className="collection">
          {prodCat.map((prod) => {
            return (
              <li className="collection-item row">
                <div className="valign-wrapper col s8">
                  <span
                    className="centered valign-wrapper"
                    id="marmitex-grande"
                  >
                    {" "}
                    {prod.nome}
                  </span>
                </div>
                <div className={"valign-wrapper col s4 " + css.btnContainer}>
                  <div className={css.buttonItem}>
                    <input
                      type="button"
                      className={css.add + " z-depth-1"}
                      onClick={handleAdd}
                      value="+"
                    />
                  </div>
                  <div className={css.buttonItem}>
                    <input
                      className="centered "
                      type="number"
                      readOnly
                      style={{ marginBottom: "0", textAlign: "center" }}
                      defaultValue="0"
                    />
                  </div>
                  <div className={css.buttonItem}>
                    <input
                      type="button"
                      className={css.remove + " z-depth-1"}
                      value="-"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      //   </div>
    );
  });
}
