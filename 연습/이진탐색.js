let numList = []

for (let i = 0; i < 2000000; i++) {
  numList.push(i + 1);
}

console.log(numList);

function findNumber(target, numList) {
  let low = numList[0];
  let high = numList[numList.length - 1];


  let test = 1;
  while (1) {
    console.log(low, high);
    let pivot = Math.floor((low + high) / 2);
    console.log(pivot);
    if (target === pivot) {
      console.log(`${test}번만에 찾았다.`)
      return;
    } else if (target > pivot) {
      low = pivot + 1;
    } else {
      high = pivot - 1;
    }
    test++
  }
}


findNumber(346323, numList);