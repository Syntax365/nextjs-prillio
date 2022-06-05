import React, { useEffect, useState } from "react";
import { debounce } from "../../helpers/gridHelper";
import Grid from "./Grid";

function Matrix({ className = "", ...moreProps }) {
  let totalRows;
  let totalCols;

  const [demensions, setDemensions] = useState({ rows: 0, columns: 0 });

  const handleVariables = () => {
    console.log("resize in matrix");
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
      className={`flex justify-center items-center ${className}`}
      {...moreProps}
    >
      <Grid rows={demensions.rows} columns={demensions.columns} />
    </div>
  );
}

export default Matrix;
