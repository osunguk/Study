function compressString(str) {

  let cnt = 0;
  let result = '';

  let splited = str.split('');
  let before = splited.shift();
  let current = splited.shift();
  console.log(before, current);
  let conter = 5;
  while (before) {
    if (before === current) {
      cnt++;
    } else {
      cnt++;
      if (cnt === 1) cnt = '';
      if (cnt === 2) {
        result += before + before
      } else {
        result += String(cnt) + before;
      }
      cnt = 0;
      console.log(result);
    }
    before = current;
    current = splited.shift();
    console.log(before);
  }
  return result;
}


// let output = compressString('abc');
// console.log(output); // --> abc

output = compressString('wwwggoppopppp');
console.log(output); // --> 3wggoppo4p

x = [1, 2, 3, 4]
console.log(x)
console.log(x.shift())
console.log(x)