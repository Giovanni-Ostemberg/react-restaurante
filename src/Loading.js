import React from "react";

export default function Loading({ loading }) {
  return (
    <div
      className="valign-wrapper"
      style={{ diplay: "flex", flexDirection: "column" }}
    >
      <div>
        <h1 className="center-align">{loading}</h1>
      </div>
      <div className="progress">
        <div className="indeterminate" style={{ width: "70%" }}></div>
      </div>
    </div>
  );
}
