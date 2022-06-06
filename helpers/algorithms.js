export async function BFS(totalRows, totalCols, startPoint) {
  const queue = [];

  const start = startPoint.split(",");
  const row = start[0];
  const col = start[1];

  let iterationsFromStart = 0;
  let currentNode = document.getElementById(`${row},${col}`);

  if (isValidNode(currentNode)) {
    queue.push(currentNode);
  }

  while (queue.length && iterationsFromStart < 5500) {
    currentNode = queue.shift();
    iterationsFromStart++;

    if (currentNode.getAttribute("end")) {
      console.log("Total Iterations : ", iterationsFromStart);
      console.log("Successfully found specified end point.", currentNode.id);
      return currentNode;
    }
    await visitNode(currentNode, iterationsFromStart);

    const neighborsCoords = getNeighborNodes(currentNode, totalRows, totalCols);

    neighborsCoords.forEach((coord) => {
      let neighborNode = getNode(coord);
      if (isValidNode(neighborNode)) {
        if (!queue.includes(neighborNode)) {
          queue.push(neighborNode);
          queueNode(neighborNode);
        }
      }
    });
  }

  console.log("Total Iterations : ", iterationsFromStart);
  console.log("Failed to find (or indicate) specified end point.");
  return false;
}

export function getShortestPath(endNode) {
  let currentNode = endNode;
  let count = 0;

  while (currentNode && count < 5500) {
    const neighborCoords = getNeighborNodes(currentNode);
    let localMinimumNode;
    neighborCoords.forEach((neighborCoord) => {
      const neighborNode = getNode(neighborCoord);
      if (neighborNode && hasTraversedNode(neighborNode)) {
        const attributeWeight = parseInt(neighborNode.getAttribute("value"));

        if (localMinimumNode) {
          const localMinimumNodeWeight = parseInt(
            localMinimumNode.getAttribute("value")
          );
          if (attributeWeight < localMinimumNodeWeight) {
            localMinimumNode = neighborNode;
          }
        } else {
          localMinimumNode = neighborNode;
        }
      }
    });
    if (localMinimumNode) {
      currentNode = localMinimumNode;
      if (currentNode.getAttribute("value") === "1") {
        console.log("Successfully established shortest path.");
        console.log("Total steps to goal: ", count);
        return true;
      }
      currentNode.classList.add("success-yellow");
    }
    count++;
  }
}

function hasTraversedNode(node) {
  if (node) {
    const attributeWeight = node.getAttribute("value");
    return !!(attributeWeight > 0);
  }
}

function getNode(coordArray) {
  const neighborRow = coordArray[0];
  const neighborCol = coordArray[1];
  return document.getElementById(`${neighborRow},${neighborCol}`);
}

function queueNode(node) {
  node.classList.add("color-pink");
}

function getNeighborNodes(node) {
  if (node) {
    const coords = node.id.split(",");
    const currentRow = parseInt(coords[0]);
    const currentCol = parseInt(coords[1]);
    const neighborCoords = [];

    //if (currentRow + 1 <= totalRows - 1) {
    neighborCoords.push([currentRow + 1, currentCol]);
    //}
    if (currentRow - 1 >= 0) {
      neighborCoords.push([currentRow - 1, currentCol]);
    }
    //if (currentCol + 1 <= totalCols - 1) {
    neighborCoords.push([currentRow, currentCol + 1]);
    //}
    if (currentCol - 1 >= 0) {
      neighborCoords.push([currentRow, currentCol - 1]);
    }
    return neighborCoords;
  }
}

async function visitNode(node, iterationsFromStart) {
  if (node) {
    node.setAttribute("value", iterationsFromStart);
    node.classList.remove("color-pink");
    node.classList.add("color-purple");
    await sleep();
  }
}

async function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 0));
}

function isValidNode(node) {
  return !!node && node.getAttribute("value") == 0;
}
