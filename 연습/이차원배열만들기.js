let row = 5;
let col = 5;

let matrix = new Array(row).fill(null);
for (let i = 0; i < col; i++) {
  matrix[i] = new Array(col).fill(0);
}

console.log(matrix);
console.table(matrix);
