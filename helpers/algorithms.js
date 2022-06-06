export function BFS(totalRows, totalCols, startPoint, endPoint) {
  console.log("Total Rows: ", totalRows);
  console.log("Total Cols: ", totalCols);
  console.log("Start Point: ", startPoint);
  console.log("End Point: ", endPoint);

  let start = startPoint.split(",");
  console.log("Row: ", start[0]);
  console.log("Col: ", start[1]);

  let queue = [];
  let count = 0;
  let row = start[0];
  let col = start[1];
  let currentNode = document.getElementById(`${row},${col}`);

  if (isValidNode(currentNode)) {
    queue.push(currentNode);
  }

  while (queue.length && count < 5500) {
    currentNode = queue.shift();
    if (currentNode.getAttribute("end")) {
      console.log("end!");
      console.log(count);
      return;
    }
    visitNode(currentNode);

    const neighborsCoords = getNeighborNodes(currentNode, totalRows, totalCols);

    neighborsCoords.forEach((coord) => {
      const neighborRow = coord[0];
      const neighborCol = coord[1];
      const neighborNode = document.getElementById(
        `${neighborRow},${neighborCol}`
      );

      if (neighborNode.getAttribute("value") === "0")
        console.log("NeighborNode", neighborNode);

      if (isValidNode(neighborNode)) {
        if (!queue.includes(neighborNode)) {
          queue.push(neighborNode);
        }
      }
    });

    count++;
  }
  console.log(count);
  return;
}

function queueNode(node) {}

function getNeighborNodes(node, totalRows, totalCols) {
  const coords = node.id.split(",");
  const currentRow = parseInt(coords[0]);
  const currentCol = parseInt(coords[1]);
  const neighborCoords = [];

  if (currentRow + 1 <= totalRows - 1) {
    neighborCoords.push([currentRow + 1, currentCol]);
  }
  if (currentRow - 1 >= 0) {
    neighborCoords.push([currentRow - 1, currentCol]);
  }
  if (currentCol + 1 <= totalCols - 1) {
    neighborCoords.push([currentRow, currentCol + 1]);
  }
  if (currentCol - 1 >= 0) {
    neighborCoords.push([currentRow, currentCol - 1]);
  }
  return neighborCoords;
}

function visitNode(node) {
  if (node) {
    node.setAttribute("value", 1);
    node.classList.add("color-purple");
  }
}

function isValidNode(node) {
  return !!node && node.getAttribute("value") == 0;
}
