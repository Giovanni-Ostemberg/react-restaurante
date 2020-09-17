import React, { useEffect, useState } from "react";
import M from "materialize-css";
import TapButton from "../../TapButton";
import css from "../css/clientMenu.module.css";
import axios from "axios";

export default function CadastroProdutos({
  handleClientMenu,
  openClientMenu,
  openProductMenu,
  handleProductMenu,
}) {
  useEffect(() => {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});
  }, []);

  const test = (event) => {
    console.log(event.target);
  };

  return (
    <div className="container">
      <div className={css.title}>
        <h3>Cadastro de Produtos</h3>
      </div>
      <div className={"row " + css.clientForm}>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              {/* Reconhecer primeira letra maiúscula, verificar existência de nomes parecidos ou iguais... sugestões de nomes */}
              <input
                id="description"
                type="text"
                className="validate"
                autoFocus
                required
              />
              <label htmlFor="first_name">Descrição</label>
            </div>
            <div class="input-field col s12">
              <select>
                <option value="" disabled selected>
                  Selecione uma opção
                </option>
                <option value="1">Refeição Local</option>
                <option value="2">Refeição para levar</option>
                <option value="3">Refrigerante</option>
                <option value="4">Suco Natural</option>
              </select>
              <label>Categoria</label>
            </div>

            <div class="input-field col s12">
              <select multiple className="subproducts" onChange={test}>
                <option value="" disabled>
                  Selecione os subprodutos
                </option>
                <option value="1">subproduto 1</option>
                <option value="2">subproduto 2</option>
                <option value="3">subproduto 3</option>
              </select>
              <label>Subprodutos Relacionados</label>
            </div>
          </div>
        </form>
      </div>
      <TapButton
        handleClientMenu={handleClientMenu}
        isOpenClientMenu={openClientMenu}
        handleProductMenu={handleProductMenu}
        isOpenProductMenu={openProductMenu}
      />
    </div>
  );
}

// Buscar um cadastro mais completo
// Pensar em soluções para produto e subproduto,
// Observações frequentes -> pensar em uma solução
// Detalhar data de alterações de preço de produtos

// (Nome, descrição, categoria, preço de venda)-->Obrigatório, preço de compra, produto->subprodutos
