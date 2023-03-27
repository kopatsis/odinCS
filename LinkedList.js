function Node(arg=null){
    return{
        value: arg,
        next: null,
    }
}

const LinkedList = function(node){
    
    let head = node;
    
    const append = function(node){
        let current = head;
        while (current.next !== null){
            current = current.next;
        }
        current.next = node;
    }

    const size = () => {
        let current = head;
        let count = 1;
        while (current.next !== null){
            current= current.next;
            count++;
        }
        return count;
    }

    const tail = () => {
        let current = head;
        while(current.next !== null){
            current = current.next;
        }
        return current;
    }

    const at = function(prov){
        let current = head;
        let index = 0;
        while (current.next !== null && index < prov){
            current= current.next;
            index++;
        }
        if (index == prov){
            return current;
        } else{
            return "Not in list"
        }
    }

    const pop = () => {
        let current = head;
        if (current.next !== null){
            while (current.next.next !== null){
                current = current.next;
            }
            current.next = null;
        }
    }

    const toString = () => {
        let str = "";
        let current = head;
        while (current.next !== null){
            str += `( ${current.value} ) => `;
            current = current.next;
        }
        str += `( ${current.value} )`
        return str;
    }

    const find = function(value){
        let current = head;
        let index = 0;
        while (current != null){
            if(current.value === value){
                return index;
            }
            current = current.next;
            index++;
        }
        return null;
    }

    const contains = function(value){
        let current = head;
        while (current != null){
            if(current.value === value){
                return true;
            }
            current = current.next;
        }
        return false;
    }

    const prepend = function(node){
        let current = head;
        head = node;
        node.next = current;
    }

    const removeAt = function(index){
        if (index === 0){
            head = head.next;
        } else{
            let current = head;
            let place = 0;
            while (current.next !== null && place < index-1){
                current = current.next;
                place++;
            }
            if (place === index-1 && current.next !== null){
                current.next = current.next.next;
            }
        }
    }

    const insertAt = function(value, index){
        if(index === 0){
            let current = head;
            head = Node(value);
            head.next = current;
        } else {
            let current = head;
            let place = 0;
            let prev;
            while (current.next !== null && place < index){
                prev = current;
                current = current.next;
                place++;
            }
            if (index === place){
                prev.next = Node(value);
                prev = prev.next;
                prev.next = current;
            }
        }
    }


    return {head, append, size, tail, at, pop, toString, find, contains, prepend, removeAt, insertAt}
}
