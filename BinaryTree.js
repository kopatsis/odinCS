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

    const findmin = (node) => {
        current = node;
        while (current.left !== null){
            current = current.left;
        }
        return current.value;
    }

    const remove = (value, node="start") => {
        if (node==="start"){
            root = remove(value, root);
        } else{
            if (value < node.value){
                node.left = remove(value, node.left);
            } else if (value > node.value){
                node.right = remove(value, node.right);
            } else{
                if(node.left===null){
                    temp = node.right;
                    node = null;
                    return temp;
                } else if (node.right===null){
                    temp = node.left;
                    node = null;
                    return temp;
                } 
                node.value = findmin(node.right);
                node.right = remove(node.value, node.right);
            }
            return node;
        }


        if (value < node.value){
            remove(value, node.left);
        } else if (value > node.value){
            remove(value, node.right);
        } else{
            if (node.left === null){
                node = node.right;
            } else if (node.right == null){
                node = node.left;
            } else{
                node.value = findmin(node.right);
                remove(node.value, node.right);
            }
        }
    }

    const find = (value, node=root) => {
        if (node.value === value){
            return node;
        } else if (node.left===null && node.right===null){
            return null;
        }
        let left = null;
        let right = null;
        if (node.left !== null){
            left = find(value, node.left);
        }
        if (node.right !== null){
            right = find(value, node.right);
        }
        if (left !== null) return left;
        return right;
    }

    const print = () => {
        prettyPrint(root);
        console.log('');
    }

    const isBalanced = (node=root) => {
        if (node===null){
            return true;
        } else if (Math.abs(depth(node.left) - depth(node.right)) > 1){
            return false;
        }
        return isBalanced(node.left) && isBalanced(node.right);
    }

    const depth = (node=root) => {
        if (node === null){
            return 0;
        }
        return Math.max(1 + depth(node.left), 1 + depth(node.right))
    }

    const rebalance = () => {
        let arr = inorder();
        buildTree(arr);
    }

    const inorder = (node=root, arr=null) => {
        if (arr===null){
            var arr = [];
        }
        if (node.left !== null){
            arr = inorder(node.left, arr)
        }
        arr.push(node.value);
        if (node.right !== null){
            arr = inorder(node.right, arr)
        }
        return arr;
    }

    const preorder = () => {

        function prerec(node, arr){
            arr.push(node.value);
            if(node.left !== null) prerec(node.left, arr);
            if(node.right !== null) prerec(node.right, arr);
        }

        if(root===null) return [];
        let arr = [];
        prerec(root, arr);
        return arr;
    }

    const postorder = () => {
        function postrec(node, arr){
            if(node.left !== null) postrec(node.left, arr);
            if(node.right !== null) postrec(node.right, arr);
            arr.push(node.value);
        }

        if(root===null) return [];
        let arr = [];
        postrec(root, arr);
        return arr;
    }

    return {root, buildTree, print, add, remove, find, isBalanced, depth, rebalance, inorder, preorder, postorder}

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

// let tree = Tree();
// tree.buildTree([1, 7, 4, 23, 4, 3, 5, 7, 67, 6345, 324, 106, -7, 99, 77]);
// tree.add(47);
// tree.add(7);
// tree.print();
// tree.remove(4);
// tree.add(-9);
// tree.print();
// tree.rebalance();
// tree.print();

// console.log(tree.inorder());
// console.log(tree.preorder());
// console.log(tree.postorder());
