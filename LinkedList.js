function Node(arg=null){
    return{
        value: arg,
        next: null,
    }
}

function LinkedList(node){
    
    var head = node;

    var append = function(node){
        let current = head;
        while (current.next !== null){
            current = current.next;
        }
        current.next = node;
    }

    var size = () => {
        let current = head;
        let count = 1;
        while (current.next !== null){
            current= current.next;
            count++;
        }
        return count;
    }

    var tail = () => {
        let current = head;
        while(current.next !== null){
            current = current.next;
        }
        return current;
    }

    return {head, append, size, tail}
}


let one = Node(1);
let list = LinkedList(one);
console.log(list.head);
console.log(list.size());
console.log(list.tail());
console.log(" ");

let two = Node(2);
list.append(two);
console.log(list.head);
console.log(list.size());
console.log(list.tail());
console.log(" ");

let three = Node(3);
list.append(three);
console.log(list.head);
console.log(list.size());
console.log(list.tail());
console.log(" ");
