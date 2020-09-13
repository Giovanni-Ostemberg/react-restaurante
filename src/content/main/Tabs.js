import React from "react";

export default function Tabs({ handleInstanceChange }) {
  const handleClick = () => {
    // handleInstanceChange() : null;
  };
  return (
    <div class="row" style={{ marginBottom: 0 }}>
      <div class="col s12">
        <ul class="tabs">
          <li class="tab col s3 active">
            <a href="#client">Clientes</a>
          </li>
          <li class="tab col s3 active">
            <a href="#last">Pedidos (hoje)</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
