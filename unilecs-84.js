let N = 3
let M = 3
let parentID =1;
let seatsMatrix = new Array(N);
let seatsMatrixUpdate = new Array(N);
let id_arr = new Array();
let cnt = 0;


for(let i = 0; i < seatsMatrix.length; i++) {
    seatsMatrix[i] = new Array(M);
    seatsMatrixUpdate[i] = new Array(M)
}

for(let i = seatsMatrix.length - 1; i >= 0; i--) {
    for(let j = 0; j < seatsMatrix[0].length; j++) {
        seatsMatrix[i][j] = parentID++;
    }
}

parentID = 1;

for(let j = 0; j < seatsMatrixUpdate[0].length; j++) {
    for(let i = seatsMatrixUpdate.length -1; i >= 0; i--) {
        seatsMatrixUpdate[i][j] = parentID++;
    }
}

function compareSeats(arr_1, arr_2, id_arr) {
    let cnt = 0;
    for(let i = arr_1.length - 1; i >= 0; i--) {
        for(let j = 0; j < arr_1[0].length; j++) {
            if(arr_1[i][j] === arr_2[i][j]) {
                cnt++;
                id_arr.push(arr_1[i][j]);
            }
        }
    }
    return cnt;
}

console.log('n='+ N);
console.log('m=' + M);
seatsMatrix.map(arr => console.info(...arr));
console.log('update');
seatsMatrixUpdate.map(arr => console.info(...arr));
cnt = compareSeats(seatsMatrix, seatsMatrixUpdate, id_arr);
console.log(cnt + ' (места ' + id_arr +' )');


