
const Graphing = () => {

    let graph = {};

    const generateKeys = () => {
        for(let i = 0; i < 64; i++){
            graph[i] = null;
        }
    }

    const generatePairs = () => {
        for (const key in graph){
            const coordinates = [Math.floor(key/8), key%8];
            let connections = [];
            checkAndAdd([coordinates[0]+2, coordinates[1]+1], connections);
            checkAndAdd([coordinates[0]+2, coordinates[1]-1], connections);
            checkAndAdd([coordinates[0]-2, coordinates[1]+1], connections);
            checkAndAdd([coordinates[0]-2, coordinates[1]-1], connections);
            checkAndAdd([coordinates[0]+1, coordinates[1]+2], connections);
            checkAndAdd([coordinates[0]+1, coordinates[1]-2], connections);
            checkAndAdd([coordinates[0]-1, coordinates[1]+2], connections);
            checkAndAdd([coordinates[0]-1, coordinates[1]-2], connections);
            graph[key] = connections;
        }
    }

    const checkAndAdd = (pair, connections) => {
        if(pair[0] > -1 && pair[0] < 8 && pair[1] > -1 && pair[1] < 8 ){
            connections.push(pair[0]*8 + pair[1]);
        }
    }

    const retGraph = () => {
        return graph;
    }

    const fastestPath = (start, end) => {

        if (start[0] < 0 || start[0] > 7 || start[1] < 0 || start[1] > 7){
            return "Not on board"
        }
        if (end[0] < 0 || end[0] > 7 || end[1] < 0 || end[1] > 7){
            return "Not on board"
        }

        const st = start[0]*8 + start[1];
        const en = end[0]*8 + end[1];

        let main = new Array(64).fill(null);
        let visited = new Set();
        let queue = new Queue();

        main[st] = [st];
        queue.enqueue(st);

        while (!queue.emp){
            let curr = queue.dequeue();
            for (const pt of graph[curr]){
                if (!visited.has(pt)){
                    queue.enqueue(pt);
                }
                if (main[pt]===null || main[curr].length+1 < main[pt].length){
                    main[pt] = main[curr].map((x) => x);
                    main[pt].push(pt);
                }
            }
            visited.add(curr);
        }

        let endarr = main[en];
        let ret = [];
        for (const lin of endarr){
            ret.push([Math.floor(lin/8), lin%8]);
        }
        return ret;

    }

    const connections = (point) => {
        for (const pt of graph[point[0]*8 + point[1]]){
            console.log(pt);
        }
    }

    return {generateKeys, retGraph, generatePairs, fastestPath, connections}
}


class Queue {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }
    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }
    peek() {
      return this.elements[this.head];
    }
    get len() {
      return this.tail - this.head;
    }
    get emp() {
      return this.len === 0;
    }
}

// DOM Manipulation below for basic GUI

const board = document.querySelector('.board');

function boardCreate() {
    for (let i = 0; i < 8; i++){
        const row = document.createElement('div');
        row.className = `row ${i}`;
        for (let j = 0; j < 8; j++){
            const col = document.createElement('div');
            col.className = `col ${j}`;
            row.appendChild(col);
        }
        board.appendChild(row);
    }
}
boardCreate();
