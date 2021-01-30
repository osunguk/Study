function decryptCaesarCipher(str, secret) {
  // TODO: 여기에 코드를 작성합니다.
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let splited = str.split('');
  console.log(splited);
  let result = (splited.map(el => {
    if (el === ' ') {
      return el;
    }
    console.log(el);
    return (alphabet.indexOf(el) - secret) % 26;
  })).map(el => {
    if (el === ' ') {
      return ' ';
    }
    if (el < 0) {
      console.log(el);
      return alphabet[26 + el]
    }
    return alphabet[el];
  })
  console.log(result);
  return result.join('');
}

let output = decryptCaesarCipher('nzop delepd', 11); // s
console.log(output.join('')); // --> hello

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'n', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
console.log(alphabet.length);