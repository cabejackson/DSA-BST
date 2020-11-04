const treeify = require('treeify')
//holds root node & methods (e.g. insert & search)
class BST {
    constructor() {
        this.root = null
    }


    // insert(value) {
    //     const newNode = new Node(value)
    //     if (!this.root) {
    //         this.root = newNode
    //         return this
    //     }
    //     let current = this.root;
    //     while (true) {
    //         if (value === current.value) return undefined
    //         // if (value <= current.value) {
    //         if (value <= current.value) {
    //             if (!current.left) {
    //                 //if nothing is there assign current.left to equal the new node
    //                 current.left = newNode
    //                 return this //the newNode
    //             }
    //             //but of there was something on the left child, reassign current placeholder to be current.left
    //             current = current.left
    //         }//mirror the above for the right side where teh value is greater than current.value
    //         else if (value > current.value) {
    //             if (!current.right) {
    //                 current.right = newNode
    //                 return this
    //             }
    //             current = current.right
    //         }
    //     }

    //recursive implementation
    insert(value) {
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return this
        }
        let current = this.root;
        function addNode() {
            if (value === current.value) return undefined
            // if (value <= current.value) {
            if (value <= current.value) {
                if (!current.left) {
                    //if nothing is there assign current.left to equal the new node
                    current.left = newNode
                    return this //the newNode
                }
                //but of there was something on the left child, reassign current placeholder to be current.left
                current = current.left
                addNode() //call the function w/in the function
            }//mirror the above for the right side where teh value is greater than current.value
            else if (value > current.value) {
                if (!current.right) {
                    current.right = newNode
                    return this
                }
                current = current.right
                addNode() //call the function w/in the function
            }
        }
        //invoke the function initially
        addNode()






    }






}

//creates the nodes
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null

    }

}

const tree = new BST()

// tree.root = new Node(20)
tree.insert(20)
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(30)
tree.insert(25)
tree.insert(32)
tree.insert(32)
console.log(treeify.asTree(tree, true))