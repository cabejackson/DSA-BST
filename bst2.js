const treeify = require('treeify')


class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
        // this.root = null
    }


}

class BST {
    constructor(value) {
        this.root = new Node(value)
        this.count = 1 //tracks how many nodes are in the tree
    }
    size() {
        return this.count

    }
    insert(value) {
        this.count++

        let newNode = new Node(value)

        //recursive search func

        const searchTree = node => {
            //if value is less than node.value, go left
            if (value < node.value) {
                //if no left child, append new node
                if (!node.left) {
                    node.left = newNode
                }
                //if there is a left child, look left again (recursively)
                else {
                    searchTree(node.left)
                }

            }
            //if value is greater than node.value, go right
            if (value > node.value) {
                //if no right child, append new node
                if (!node.right) {
                    node.right = newNode
                }
                //if there is a right child, look right again (recursively)
                else {
                    searchTree(node.right)
                }

            }
        }
        //call searchTree inside insert method, why is this? ask mentor
        searchTree(this.root) // and why on the root node?


    }
    //gets min value out of bst
    //go left a bunch of times until there are no more child nodes
    //aka traverse through the tree only going in this direction
    min() {
        let currentNode = this.root

        while (currentNode.left) {
            //set current not to its left child
            currentNode = currentNode.left
        }

        //it breaks out of the while loop when there's no value left (lol left #sadHumor)
        return currentNode.value


    }
    //create a func for the 3rd largest node
    third() {

    }

    //gets max value out of bst
    //go right a bunch of times until there are no more child nodes
    //aka traverse through the tree only going in this direction
    max() {
        let currentNode = this.root

        while (currentNode.right) {
            //set current not to its right child
            currentNode = currentNode.right
        }
        //it breaks out of the while loop when there's no (right) value present
        return currentNode.value

    }
    //checks if a value exists in the tree
    contains(value) {
        let currentNode = this.root

        while (currentNode) {
            //value was found
            if (value === currentNode.value) {
                return true
            }
            //looking for value
            if (value < currentNode.value) {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }
        //value not found
        return false

    }

    //search algos
    //depth first search -- finds the height of a bst
    //depth first search -- looks branch by branch

    //in-order
    //left, root , right
    // 2, 3, 12, 15, 28, 39
    dfsInOrder() {
        let result = []

        const traverse = node => {
            //process the left node, then root node, then right node
            //left
            // if left child exists, go left again
            if (node.left) {
                traverse(node.left)
            }
            //root
            // capture root node value
            result.push(node.value)
            //right
            // if right child exists, go right again
            if (node.right) {
                traverse(node.right)
            }
        }
        return result

    }
    // pre-order
    // root, left, right
    // 15, 3, 2, 12, 36, 28, 39
    dfsPreOrder() {
        let result = []
        //use recursive traverse func to push values into the array
        const traverse = node => {
            //process the root node, then left node, then right node

            //root
            // capture root node value
            result.push(node.value)
            //left
            // if left child exists, go left again
            if (node.left) {
                traverse(node.left)
            }
            //right
            // if right child exists, go right again
            if (node.right) {
                traverse(node.right)
            }
        }
        return result


    }



    // post-order
    // left, right, root
    // 2, 12, 3, 28, 39, 36, 15
    dfsPostOrder() {
        let result = []
        //use recursive traverse func to push values into the array
        const traverse = node => {
            //process the left node, then right node, the root node,

            //left
            // if left child exists, go left again
            if (node.left) {
                traverse(node.left)
            }
            //right
            // if right child exists, go right again
            if (node.right) {
                traverse(node.right)
            }
            //root
            // capture root node value
            result.push(node.value)
        }
        return result





    }

    //breadth first search -- looks level by level
    //uses queue!
    //returns all the values by level
    //15, 3, 36, 2, 12, 28
    bfs() {
        // initialize resulte array
        let result = []

        let queue = []
        //push root node into the queue
        queue.push(this.root)

        //while the queue has stuff in it
        while (queue.length) {
            //takes first ietm out of the queue
            let currentNode = queue.shift()
            // take current node out of the queue and push it into the result array
            result.push(currentNode)

            //push left child node into the queue
            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            //pushes right child node into the queue
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }




    }


}

const tree = new BST(15) // 15 is root node

// tree.insert(15)
tree.insert(3)
tree.insert(36)
tree.insert(2)
tree.insert(12)
tree.insert(28)
tree.insert(39)
console.log(treeify.asTree(tree, true))//full tree
console.log("--------------------------")
console.log("size:", tree.size())//7
console.log("--------------------------")
console.log("min:", tree.min())//2
console.log("--------------------------")
console.log("max:", tree.max())//39
console.log("--------------------------")
console.log("(t/f) does it conatain the number 2? \n Answer:", tree.contains(2))//true
console.log("(t/f) does it conatain the number 222? \n Answer:", tree.contains(222))//false


//checking dfs



// const bst = new BST() // 15 is root node

// bst.insert(15)
// bst.insert(3)
// bst.insert(36)
// bst.insert(2)
// bst.insert(12)
// bst.insert(28)
// bst.insert(39)
// console.log(bst)