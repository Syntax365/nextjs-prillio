import React, { useEffect, useState } from "react";
import Grid from "./Grid";

function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function Matrix(props) {
  const className = props?.className || "";

  const [demensions, setDemensions] = useState({ rows: 0, columns: 0 });

  const handleVariables = () => {
    const gridWidth = document
      .getElementById("array-matrix")
      .getBoundingClientRect().width;

    const gridHeight = document
      .getElementById("array-matrix")
      .getBoundingClientRect().height;

    const totalCols = Math.floor(gridWidth / 20);
    const totalRows = Math.floor(gridHeight / 20);

    setDemensions({ rows: totalRows, columns: totalCols });
  };

  const handleResize = debounce(() => {
    handleVariables();
  }, 200);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleVariables();
  }, []);

  return (
    <div
      id={"array-matrix"}
      className={`flex justify-center items-center overflow-hidden ${className}`}
    >
      <Grid rows={demensions.rows} columns={demensions.columns} />
    </div>
  );
}

export default Matrix;
