import { useEffect, useState } from "react";

function Node(value) {
  this.root = null;
  this.value = value || 0;
  this.left = null;
  this.right = null;

  this.leftSkew = 0;
  this.degree = 0;

  this.printNode = () => {
    let selfX = this.leftSkew; //Self X
    let selfY = this.degree * 60 || 0; //Self Y

    let rootX = this.root?.leftSkew || 0; //Root X
    let rootY = this.root?.degree * 60 || 0; //Root Y

    // A^2 + B^2 = C^2
    let xDistance = Math.pow(selfX - rootX, 2);
    let yDistance = Math.pow(selfY - rootY, 2);

    let totalDistance = Math.sqrt(xDistance + yDistance);
    totalDistance = Math.floor(totalDistance);

    // Get Degree to Root

    //Height = 60; Hypot = totalDistance
    let degree = Math.asin(60 / totalDistance);

    return (
      <>
        <div
          key={this.value}
          style={{
            top: `${selfY}px`,
            right: `${this.leftSkew}px`,
          }}
          className={`absolute border w-[30px] h-[30px] text-center flex justify-center items-center bg-white`}
        >
          <div className="relative" style={{ zIndex: "-1" }}>
            {this.root && (
              <div
                style={{
                  width: `${totalDistance}px`,
                  top: "-32px",
                  right:
                    this.root.left === this
                      ? -totalDistance
                      : `-${this.degree * 4}px`,
                  transform: `rotate(${
                    this.root.left === this ? -degree : degree
                  }rad)`,
                }}
                className={`absolute h-[1px] border`}
              />
            )}
          </div>
          {this.value}
        </div>
      </>
    );
  };

  this.addNewValue = (value) => {
    let currentNode = this;
    let newNode = new Node(value);
    const startSkew = 256;

    while (newNode.root === null) {
      if (currentNode.value >= newNode.value) {
        if (!currentNode.left) {
          //If left child is null
          currentNode.left = newNode;
          newNode.root = currentNode;
          newNode.degree = newNode.root.degree + 1;
          newNode.leftSkew = newNode.root.leftSkew + startSkew / newNode.degree;
        } else {
          //If there is a left child
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          //If right child is null
          currentNode.right = newNode;
          newNode.root = currentNode;
          newNode.degree = newNode.root.degree + 1;
          newNode.leftSkew = newNode.root.leftSkew - startSkew / newNode.degree;
        } else {
          //If there is a right child
          currentNode = currentNode.right;
        }
      }
    }
  };

  return this;
}

const getValues = (totalNodes) => {
  let returnArr = [];
  for (let i = 0; i < totalNodes; i++) {
    let temp = Math.floor(Math.random(100) * 100);
    if (returnArr.includes(temp)) {
      i--;
    } else {
      returnArr.push(temp);
    }
  }

  return returnArr;
};

const buildTree = (root, totalNodes) => {
  const valueArray = getValues(totalNodes);
  const rootValue = valueArray.pop();
  root.value = rootValue;

  while (valueArray.length > 0) {
    let currentValue = valueArray.pop();
    root.addNewValue(currentValue);
  }

  return root;
};

function BinaryTree({ totalNodes = 15 }) {
  const [root, setRoot] = useState();

  useEffect(() => {
    if (!root) {
      setRoot(buildTree(new Node(), totalNodes));
    }
  }, []);

  const printTree = (root) => {
    let nodeHTMLArray = [];
    if (root && root.value) {
      console.log(root.value);
      let currentNode;
      let currentTop = 0;

      //BFS Tree and print node HTML/Assign Locations
      let queue = [];
      queue.push(root);

      while (queue.length) {
        currentNode = queue.pop();

        currentNode.left ? queue.push(currentNode.left) : "";
        currentNode.right ? queue.push(currentNode.right) : "";

        nodeHTMLArray.push(currentNode.printNode());
        currentTop = currentTop - 50;
      }
    }

    return nodeHTMLArray;
  };

  return (
    <div className="w-full mx-auto pt-12 flex justify-center">
      <div className="relative">{printTree(root)}</div>
    </div>
  );
}

export default BinaryTree;
