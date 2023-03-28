function Node(arg=null){
    return{
        value: arg,
        left: null,
        right: null
    }
}

const Tree = (node=null) => {

    let root = node;

    return {root}

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

let tree = Tree(Node(0));
console.log(tree.root);
tree.root.left = Node(1);
tree.root.right = Node(2);
tree.root.left.left = Node(3);
tree.root.left.right = Node(4);
tree.root.right.left = Node(5);
tree.root.right.right = Node(6);
prettyPrint(tree.root);