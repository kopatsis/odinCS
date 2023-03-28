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
        // root = Node(10);
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

    const print = () => {
        prettyPrint(root);
    }

    return {root, buildTree, recur, print}

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
tree.buildTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324, 106, -7, 99, 77]);
tree.print();

// let tree = Tree(Node(0));
// tree.root.left = Node(1);
// tree.root.right = Node(2);
// tree.root.left.left = Node(3);
// tree.root.left.right = Node(4);
// tree.root.right.left = Node(5);
// tree.root.right.right = Node(6);
// prettyPrint(tree.root);