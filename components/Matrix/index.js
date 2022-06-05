import React, { useEffect, useState } from "react";
import Grid from "./Grid";
//////////////

//////////////
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

function Matrix({ className = "", ...moreProps }) {
  let totalRows;
  let totalCols;

  const [demensions, setDemensions] = useState({ rows: 0, columns: 0 });

  const handleVariables = () => {
    const gridWidth = document
      .getElementById("array-matrix")
      .getBoundingClientRect().width;

    const gridHeight = document
      .getElementById("array-matrix")
      .getBoundingClientRect().height;

    totalCols = Math.floor(gridWidth / 20);
    totalRows = Math.floor(gridHeight / 20);

    setDemensions({ rows: totalRows, columns: totalCols });
  };

  const handleResize = debounce(() => {
    handleVariables();
  }, 200);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleVariables();

    window.runSpiralMatrix = runSpiralMatrix;

    window.graph = (path) => {
      let executionPath = path;
      let delay = 25;
      executionPath.every((coord) => {
        let end = true;
        document
          .querySelectorAll(`[coordinates="${coord[0]},${coord[1]}"]`)
          .forEach((element) => {
            if (element.hasAttribute("end")) {
              end = false;
            }
            setTimeout(() => {
              element.classList.add("color-purple");
            }, delay);
            delay += 25;
          });
        return end;
      });
    };
  }, []);
  ///////////////
  //TODELETE:

  function runSpiralMatrix() {
    const initializeVirtualArray = (n, m) => {
      let d = [];
      for (let i = 0; i < n; i++) {
        let t = Array(m).fill(0);
        d.push(t);
      }
      return d;
    };

    let n, m, x, y;
    let startPoint = [0, 0];
    let startElement = document.querySelectorAll(`[start]`)[0];
    if (startElement) {
      startPoint = startElement.getAttribute("coordinates").split(",");
    }
    const spiralMatrixIII = (
      rows = totalRows,
      cols = totalCols,
      rStart = startPoint[0],
      cStart = startPoint[1],
    ) => {
      (n = rows), (m = cols), (x = rStart), (y = cStart);
      let tot = n * m,
        d = "R",
        res = [],
        visit = initializeVirtualArray(n, m);
      while (res.length < tot) {
        if (ok(x, y)) {
          res.push([x, y]);
          visit[x][y] = 1;
        }
        if (d == "R") {
          y++;
          if (ok(x + 1, y)) {
            if (!visit[x + 1][y]) d = "D"; // go right, down neighbour not visited, turn
          } else {
            d = "D"; // out of border turn
          }
        } else if (d == "D") {
          x++;
          if (ok(x, y - 1)) {
            if (!visit[x][y - 1]) d = "L"; // go down, left neighbour not visited, turn
          } else {
            d = "L";
          }
        } else if (d == "L") {
          y--;
          if (ok(x - 1, y)) {
            if (!visit[x - 1][y]) d = "U"; // go left, up neighbour not visited, turn
          } else {
            d = "U";
          }
        } else if (d == "U") {
          x--;
          if (ok(x, y + 1)) {
            if (!visit[x][y + 1]) d = "R"; // go up, right neighbour not visited, turn
          } else {
            d = "R";
          }
        }
      }
      return res;
    };

    //Validate coord
    const ok = (x, y) => x >= 0 && x < n && y >= 0 && y < m;

    //Print to Graph

    if (typeof window != undefined) {
      window.graph(spiralMatrixIII());
    }
  }
  ///////////////
  return (
    <div
      {...moreProps}
      id={"array-matrix"}
      className={`flex justify-center items-center ${className}`}
    >
      <Grid rows={demensions.rows} columns={demensions.columns} />
    </div>
  );
}

export default Matrix;
