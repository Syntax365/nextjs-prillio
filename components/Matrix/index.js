import React, { useEffect, useState } from "react";
import { debounce } from "../../helpers/gridHelper";
import Grid from "./Grid";

function Matrix({ className = "", ...moreProps }) {
  let totalRows;
  let totalCols;

  const [demensions, setDemensions] = useState({ rows: 0, columns: 0 });

  const handleVariables = () => {
    if (typeof window !== "undefined") {
      let availableHeight = window.innerHeight - 120;

      document.getElementById("array-matrix").style.height =
        availableHeight + "px";

      console.log("resize in matrix", availableHeight);
    }
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
