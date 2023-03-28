function Node(arg=null){
    return{
        value: arg,
        left: null,
        right: null
    }
}

const Tree = function(node=null) {

    let root = node;

    const buildTree = function(arr) {
        let set = new Set(arr.sort(function(a, b){return a - b}));
        let toArr = Array.from(set);
        root = recur(toArr, new Set(), 0, toArr.length);
    }

    const recur = (input, used, start, end) => {
        let pos = Math.floor((end+start)/2);
        if (!used.has(pos)){
            let curnode = Node(input[pos]);
            used.add(pos);
            curnode.left = recur(input, used, start, pos);
            curnode.right = recur(input, used, pos, end);
            return curnode
        }
        return null;
    }

    const add = (value, node=root) => {
        if (value < node.value){
            if (node.left === null){
                node.left = Node(value);
            } else{
                add(value, node.left);
            }
        } else if (value > node.value){
            if (node.right === null){
                node.right = Node(value);
            } else{
                add(value, node.right);
            }
        }
    }

    const print = () => {
        prettyPrint(root);
    }

    return {root, buildTree, print, add}

}


const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
       return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

let tree = Tree();
tree.buildTree([1, 7, 4, 23, 4, 3, 5, 7, 67, 6345, 324, 106, -7, 99, 77]);
tree.print();
tree.add(47);
tree.print();
tree.add(7);
tree.print();

// let tree = Tree(Node(0));
// tree.root.left = Node(1);
// tree.root.right = Node(2);
// tree.root.left.left = Node(3);
// tree.root.left.right = Node(4);
// tree.root.right.left = Node(5);
// tree.root.right.right = Node(6);
// prettyPrint(tree.root);