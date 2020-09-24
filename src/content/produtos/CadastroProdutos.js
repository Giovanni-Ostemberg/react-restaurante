import React, { useEffect, useState } from "react";
import M from "materialize-css";
import TapButton from "../../TapButton";
import css from "./productMenu.module.css";
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

    var elemsChips = document.querySelectorAll(".chips");
    var instanceChips = M.Chips.init(elemsChips, {
      onChipDelete: unSelectSubs,
      placeholder: "Outro",
    });

    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, {});
  }, []);

  window.onbeforeunload = () => {
    return handleProductMenu();
  };

  let checkboxes = [];

  const unSelectSubs = (event) => {
    let chipContainer = document.getElementById("chip-container");
    let chipInstance = M.Chips.getInstance(chipContainer);
    let subproducts = document.getElementsByName("subproducts[]");
    let tags = chipInstance.chipsData.map((tag) => {
      return tag.tag;
    });
    for (let sub of subproducts) {
      if (!tags.includes(sub.value)) {
        sub.checked = false;
      }
    }
  };

  const organizeChips = (event) => {
    let subproducts = document.getElementsByName("subproducts[]");
    let chipContainer = document.getElementById("chip-container");
    let chipInstance = M.Chips.getInstance(chipContainer);
    let chipsData = chipInstance.chipsData.map((tag) => {
      return tag.tag;
    });
    for (let sub of subproducts) {
      if (sub.checked) {
        chipInstance.addChip({
          tag: sub.value,
        });
      } else {
        if (chipsData.includes(sub.value)) {
          chipInstance.deleteChip(chipsData.indexOf(sub.value));
        }
      }
    }
  };

  for (let i = 1; i <= 10; i++) {
    checkboxes.push(
      <p>
        <label>
          <input
            type="checkbox"
            value={"Subproduto " + i}
            name="subproducts[]"
            onClick={organizeChips}
          />
          <span>Subproduto {i}</span>
        </label>
      </p>
    );
  }

  const calculateProfit = () => {
    const purchaseValue = parseFloat(
      document.querySelector("#purchase-value").value
    );
    const sellingValue = parseFloat(
      document.querySelector("#selling-value").value
    );

    if (sellingValue && purchaseValue) {
      let profit = sellingValue - purchaseValue;
      document.querySelector("#profit").value = (
        (profit / purchaseValue) *
        100
      ).toFixed(2);
    }

    if (!sellingValue || !purchaseValue) {
      document.querySelector("#profit").value = 0;
    }
  };

  const calculateSellingValue = () => {
    const purchaseValue = parseFloat(
      document.querySelector("#purchase-value").value
    );
    const profit = parseFloat(document.querySelector("#profit").value);

    if (purchaseValue && profit) {
      let sellingValue = purchaseValue + (purchaseValue * profit) / 100;
      document.querySelector("#selling-value").value = sellingValue.toFixed(2);
    }

    if (!purchaseValue || !profit) {
      document.querySelector("#selling-value").value = 0;
    }
  };

  return (
    <div className="container">
      <div className={css.title}>
        <h3>Cadastro de Produtos</h3>
      </div>
      <div className="row">
        <div className="row">
          <div className="input-field col s6">
            <input id="name" type="text" className="validate" required />
            <label htmlFor="name">Descrição</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s4">
            <input
              id="purchase-value"
              type="text"
              className="validate"
              onInput={calculateProfit}
              required
            />
            <label className="active" htmlFor="purchase-value">
              Valor de Compra
            </label>
          </div>
          <div className="input-field col s4">
            <input
              id="selling-value"
              type="text"
              className="validate"
              onInput={calculateProfit}
              required
            />
            <label className="active" htmlFor="selling-value">
              Valor Venal
            </label>
          </div>
          <div className="input-field col s4">
            <input
              id="profit"
              type="text"
              className="validate"
              onInput={calculateSellingValue}
            />
            <label className="active" htmlFor="rate">
              Lucro (%)
            </label>
          </div>
        </div>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <select>
                <option value="" disabled selected>
                  Selecione uma opção
                </option>
                <option className="red text-darken-4" value="1">
                  Refeição Local
                </option>
                <option value="2">Refeição para levar</option>
                <option value="3">Refrigerante</option>
                <option value="4">Suco Natural</option>
              </select>
              <label>Categoria</label>
            </div>

            <div className="input-field col s12">
              <a
                className="waves-effect waves-light btn red darken-4 modal-trigger"
                href="#modal1"
              >
                Subprodutos
              </a>

              <div id="modal1" className="modal">
                <div className="modal-content">
                  <h6>Adicionar Subprodutos Relacionados</h6>
                  {checkboxes}
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="chips chips-placeholder" id="chip-container"></div>
        <div className="row">
          <div class="input-field col s12">
            <textarea id="textarea1" class="materialize-textarea"></textarea>
            <label for="textarea1">Observações</label>
          </div>
        </div>
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
