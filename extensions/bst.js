class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    this.root = addWithin(this.root, value);
    
    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.value === value) {
        return node;
      }

      if (value < node.value) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }

      return node;
    }
  }

  has(value) {
    return searchWithin(this.root, value);

    function searchWithin(node, value) {
      if (!node) {
        return false;
      }

      if (node.value === value) {
        return true;
      }

      if (value < node.value) {
        return searchWithin(node.left, value);
      } else {
        return searchWithin(node.right, value);
      }
    }
  }

  remove(value) {
    this.root = removeNode(this.root, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = removeNode(node.right, value);
      } else {
        // both - null
        if (!(node.left || node.right)) {
          return null;
        }

        // has only right
        if (!node.left) {
          node = node.right;
          return node;
        }

        // has only left
        if (!node.right) {
          node = node.left // explain??
          return node;
        }

        // has both
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.value = minRight.value;

        // let maxLeft = mode.left;
        // while (maxLeft.right) {
        //   maxLeft = maxLeft.right;
        // }

        node.right = removeNode(node.right, minRight.value);

        return node; 
      }
    }
  }

  min() {
    if (!this.root) {
      return;
    }

    let node = this.root;

    while(node.left) {
      node = node.left;
    }

    return node.value;
  }

  max() {
    if (!this.root) {
      return;
    }

    let node = this.root;

    while(node.right) {
      node = node.right;
    }

    return node.value;
  }

  leftTraverse(callback) {
    doLeft(this.root, callback);

    function doLeft(node, callback) {
      if (node) {
        doLeft(node.left, callback);
        callback(node.value);
        doLeft(node.right, callback);
      }
    }
  }

  rightTraverse(callback) {
    doRight(this.root, callback);
    
    function doRight(node, callback) {
      if (node) {
        doRight(node.right, callback);
        callback(node.value);
        doRight(node.left, callback);
      }
    }
  }
}

const bst = new BinarySearchTree();
console.log(bst.add(9),
bst.add(4),
bst.add(12),
bst.add(10),
bst.leftTraverse((v) => console.log(v)),
bst.rightTraverse((v) => console.log(v)),
)
