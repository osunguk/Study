function zip(...args) {
  let result = []
  let check = args.every(ele => {
    if (ele.length === 0) return true;
    else false;
  })
  while(!check){
    let temp = []
    for(let arr of args) {
      temp.push(arr.shift());
    }
    result.push(temp);
    check = args.every(ele => {
      if (ele.length === 0) return true;
      else false;
    });
  }
  return result;
}

// console.log(zip([1, 2, 3], ['a', 'b', 'c']));
// console.log(zip([1,2,3], ['a','b','c']));
console.log(zip(['a','ba','x',3],[1,2]));
