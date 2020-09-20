import React from "react";

export default function Loading({ loading }) {
  return (
    <div
      className="valign-wrapper"
      style={{ diplay: "flex", flexDirection: "column" }}
    >
      <div>
        <h4 className="center-align">{loading}</h4>
      </div>
      <div className="progress">
        <div className="indeterminate" style={{ width: "70%" }}></div>
      </div>
    </div>
  );
}
