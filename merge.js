function mergesort(arr){
    if (arr.length === 1) {
        return arr;
    } 
    let left = arr.slice(0, Math.floor(arr.length/2));
    let right = arr.slice(Math.floor(arr.length/2), arr.length);
    return zipper(mergesort(left), mergesort(right));
}

function zipper(arr1, arr2){
    let i = 0;
    let j = 0;
    let out = [];
    while (i < arr1.length && j < arr2.length){
        if (arr1[i] > arr2[j]){
            out.push(arr2[j]);
            j++;
        } else{
            out.push(arr1[i]);
            i++;
        }
    }
    while (i < arr1.length){
        out.push(arr1[i]);
        i++;
    }
    while (j < arr2.length){
        out.push(arr2[j]);
        j++;
    }
    return out;
}

let arr = [];
for (let i = 0; i < 100; i++){
    arr.push(parseInt(Math.random()*200));
}
console.log(arr);
console.log(mergesort(arr));