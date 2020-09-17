import React, { useEffect, useState } from "react";
import M from "materialize-css";
import TapButton from "../../TapButton";
import css from "../css/clientMenu.module.css";
import axios from "axios";

export default function ClientMenu({
  handleClientMenu,
  openClientMenu,
  openProductMenu,
  handleProductMenu,
}) {
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const handleCEP = async () => {
    let cepValue = document.querySelector("#address-cep").value;
    console.log(cepValue);
    if (cepValue.length === 5) {
      document.querySelector("#address-cep").value = cepValue += "-";
    }
    if (cepValue.length === 9) {
      cepValue = cepValue.split("-");
      cepValue = cepValue[0] + cepValue[1];
      let data = await fetch("https://viacep.com.br/ws/" + cepValue + "/json/");
      let dataJson = await data.json();
      console.log(dataJson);
      if (!dataJson.erro) {
        setNewValues(dataJson);
      } else {
        M.toast({ html: "CEP Inválido" });
      }
    }
  };

  const setNewValues = (data) => {
    var labelLogradouro = document.querySelector("#label-logradouro");
    labelLogradouro.classList.add("active");

    var labelBairro = document.querySelector("#label-bairro");
    labelBairro.classList.add("active");
    setCidade(data.localidade);
    setLogradouro(data.logradouro);
    setBairro(data.bairro);
  };

  return (
    <div className="container">
      <div className={css.title}>
        <h3>Cadastro de Clientes</h3>
      </div>
      <div className={"row " + css.clientForm}>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              {/* Reconhecer primeira letra maiúscula, verificar existência de nomes parecidos ou iguais... sugestões de nomes */}
              <input
                id="first_name"
                type="text"
                className="validate"
                autoFocus
                required
              />
              <label htmlFor="first_name">Nome</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Apelido ( opcional )</label>
            </div>
          </div>
          <div className={css.addressContainer + " z-depth-1"}>
            <div className="row">
              {/* Logradouro, número, Complemento, Bairro - CEP, Referência */}
              <div className="input-field col s8">
                <input
                  id="address"
                  type="text"
                  className="validate"
                  value={logradouro}
                />
                <label id="label-logradouro" htmlFor="address">
                  Logradouro
                </label>
              </div>
              <div className="input-field col s4 active">
                <input id="address-number" type="text" className="validate" />
                <label htmlFor="address-number">Nº</label>
              </div>
            </div>
            <div className="row">
              {/* Logradouro, número, Complemento, Bairro - CEP, Referência */}
              <div className="input-field col s8">
                <input
                  id="address-bairro"
                  type="text"
                  className="validate"
                  value={bairro}
                />
                <label id="label-bairro" htmlFor="address-bairro">
                  Bairro
                </label>
              </div>
              <div className="input-field col s4">
                <input
                  id="address-cep"
                  type="text"
                  className="validate"
                  onChange={handleCEP}
                />
                <label htmlFor="address-cep">CEP</label>
              </div>
              {/* <div className="input-field col s4">
                <input
                  id="address-complemento"
                  type="text"
                  className="validate"
                />
                <label htmlFor="address-complemento">Complemento</label>
              </div> */}
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
      <TapButton
        handleClientMenu={handleClientMenu}
        isOpenClientMenu={openClientMenu}
        handleProductMenu={handleProductMenu}
        isOpenProductMenu={openProductMenu}
      />
    </div>
  );
}
