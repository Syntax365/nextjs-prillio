import { useEffect, useState } from "react";

function Node(value) {
  this.root = null;
  this.value = value || 0;
  this.left = null;
  this.right = null;

  this.leftSkew = 0;

  this.getDegree = () => {
    let degree = 0;
    if (this.root === null) return degree;
    let currentRoot = this.root;
    degree++;
    while (currentRoot) {
      currentRoot = currentRoot.root;
      degree++;
    }
    return degree;
  };

  this.printNode = () => {
    let topPos = this.getDegree() * 50 || 50;

    return (
      <div
        key={this.value}
        style={{
          top: `${topPos}px`,
          right: `${this.leftSkew}px`,
        }}
        className={`absolute border w-[30px] h-[30px] text-center flex justify-center items-center`}
      >
        {this.value}
      </div>
    );
  };

  this.addNewValue = (value) => {
    let currentNode = this;
    let newNode = new Node(value);

    let count = 0;

    while (newNode.root === null) {
      if (currentNode.value >= newNode.value) {
        if (!currentNode.left) {
          //If left child is null
          currentNode.left = newNode;
          newNode.root = currentNode;
          newNode.leftSkew = newNode.root.leftSkew + 70;
        } else {
          //If there is a left child
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          //If right child is null
          currentNode.right = newNode;
          newNode.root = currentNode;
          newNode.leftSkew = newNode.root.leftSkew - 70;
        } else {
          //If there is a right child
          currentNode = currentNode.right;
        }
      }

      count++;
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

function BinaryTree({ totalNodes = 10 }) {
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

        currentNode.left
          ? queue.push(currentNode.left)
          : console.log("Left Child Null");
        currentNode.right
          ? queue.push(currentNode.right)
          : console.log("Right Child Null");

        nodeHTMLArray.push(currentNode.printNode());
        currentTop = currentTop - 50;
      }
    }

    return nodeHTMLArray;
  };

  return (
    <div className="w-full mx-auto h-[10vh] flex justify-center">
      <div className="relative">{printTree(root)}</div>
    </div>
  );
}

export default BinaryTree;
