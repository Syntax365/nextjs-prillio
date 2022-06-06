export async function BFS(totalRows, totalCols, startPoint) {
  const queue = [];

  const start = startPoint.split(",");
  const row = start[0];
  const col = start[1];

  let count = 0;
  let currentNode = document.getElementById(`${row},${col}`);
  let delayIncrement = 1;

  if (isValidNode(currentNode)) {
    queue.push(currentNode);
  }

  while (queue.length && count < 5500) {
    currentNode = queue.shift();

    if (currentNode.getAttribute("end")) {
      console.log("Total Iterations : ", count);
      console.log("Successfully found specified end point.", currentNode.id);
      return;
    }
    await visitNode(currentNode, delayIncrement);

    const neighborsCoords = getNeighborNodes(currentNode, totalRows, totalCols);

    neighborsCoords.forEach((coord) => {
      const neighborRow = coord[0];
      const neighborCol = coord[1];
      const neighborNode = document.getElementById(
        `${neighborRow},${neighborCol}`
      );

      if (isValidNode(neighborNode)) {
        if (!queue.includes(neighborNode)) {
          queue.push(neighborNode);
          queueNode(neighborNode);
        }
      }
    });

    count++;
  }
  console.log("Total Iterations : ", count);
  console.log("Failed to find (or indicate) specified end point.");
  return;
}

function queueNode(node) {
  node.classList.add("color-pink");
}

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

async function visitNode(node, delayIncrement) {
  if (node) {
    node.setAttribute("value", 1);
    node.classList.remove("color-pink");
    node.classList.add("color-purple");
    await sleep(delayIncrement);
  }
}

async function sleep(delayIncrement) {
  return new Promise((resolve) => setTimeout(resolve, delayIncrement));
}

function isValidNode(node) {
  return !!node && node.getAttribute("value") == 0;
}
