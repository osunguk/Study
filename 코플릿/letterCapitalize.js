function letterCapitalize(str) {
  // TODO: 여기에 코드를 작성합니다.
  const splited = str.split(' ');
  const result = []
  for (let i of splited) {
    if(i.length > 0) {
      result.push(i[0].toUpperCase() + i.slice(1))
    } else {
      result.push('')
    }
  }
  return result.join(' ');
}

let output1 = letterCapitalize('hello world');
console.log(output1); // "Hello World"
let output2 = letterCapitalize('             ');
console.log(output2); // "Javascript  Is Sexy "