
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

    return {generateKeys, retGraph, generatePairs}
}

let board = Graphing();
board.generateKeys();
board.generatePairs();
console.log(board.retGraph());


// let board = [];
// for (let i = 0; i < 8; i++){
//     let row = [];
//     for (let j = 0; j < 8; j++){
//         row.push(' ');
//     }
//     board.push(row);
// }
// console.log(board);