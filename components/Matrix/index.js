import React, { useEffect, useState } from "react";
import { debounce } from "../../helpers/gridHelper";
import { useSelector, useDispatch } from "react-redux";
import { setGridDemensions } from "../../slices/gridSlice";
import { SQUARE_SIZE } from "../../config";

import Grid from "./Grid";

function Matrix({ className = "", ...moreProps }) {
  const dispatch = useDispatch();
  const gridDemensions = useSelector((state) => state.grid.gridDemensions);

  const handleVariables = () => {
    if (typeof window !== "undefined") {
      const toolbarHeight = 60;
      const headerHeight = 60;
      const margin = 32;
      const availableHeight =
        window.innerHeight - toolbarHeight - headerHeight - margin;
      const availableWidth = window.innerWidth - margin;

      console.log(availableWidth);
      console.log(SQUARE_SIZE);

      const totalSquareColumns = Math.floor(availableWidth / SQUARE_SIZE);
      const totalSquareRows = Math.floor(availableHeight / SQUARE_SIZE);

      dispatch(
        setGridDemensions({
          rows: totalSquareRows,
          columns: totalSquareColumns,
        }),
      );
    }
  };

  const handleResize = debounce(() => {
    handleVariables();
  }, 100);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleVariables();
  }, []);

  return (
    <div
      id={"array-matrix"}
      className={`flex justify-center items-center overflow-hidden ${className} m-4`}
      {...moreProps}
    >
      <Grid rows={gridDemensions.rows} columns={gridDemensions.columns} />
    </div>
  );
}

export default Matrix;
