function solution(s) {
  var answer = [];
  s;

  s.map((el) => {
    el;
  });
  // 110 을 추출한 문자열에서
  // 111 인 문자열이 남아있는 경우에 무조건 사전의 앞 순서로 온다

  // 나중에 아래 코드를 map 으로 돌려야함

  const path = [];

  const regex = /110/g;
  let match;
  while ((match = regex.exec(s[0])) !== null) {
    match;
    const temp = match.input.slice(0, match.index, match.index + 3);
    const temp2 = match.input.slice(match.index + 3);
    temp;
    temp2;
    console.log(match.input);
    path.push(match.index);
  }
  path;

  const sliceStr = (str, idx) => {
    const temp = str.slice(idx, idx + 3);
    temp;
    str;
  };
  sliceStr(s[0], 1);

  let calc;
  answer.push(calc);
  // 여기까지
  return answer;
}

solution(["1110", "100111100", "0111111010"]);

const inputString = "This is a test string with some test words in it.";
const regex = /test/g; // 정규 표현식에 'test' 패턴과 'g' 플래그를 사용

let match;
while ((match = regex.exec(inputString)) !== null) {
  console.log(`Found '${match[0]}' at index ${match.index}`);
}
