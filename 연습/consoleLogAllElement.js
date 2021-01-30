

function consoleLogAllElement() {
  console.log('모든 태그를 출력하는 함수입니다!');
  const body = document.getElementsByTagName('body');
  const elements = body[0].children;

  console.log(elements);

  cycle(elements);

  // console.log(body[0].childNodes); 
  // childNodes 는 모든 노드를 불러 오는듯 보인다
  // text 라는 요소가 있는데 정확히 어떤 부분인지 모르겠다

  // console.log(body[0].children); 
  // children 은 원하는 기능인 하위 element의 요소를 리턴한다.

  // console.log(body[0].childElementCount); 
  // 직계자식들의 엘리먼트의 숫자를 반환
}

function cycle(elements) {
  for (element of elements) {
    if (isHaveChildren(element)) {
      console.log(element);
      cycle(element.children);
    } else {
      console.log(element);
    }
  }

}

function isHaveChildren(e) {
  if (e.childElementCount > 0) {
    return true;
  } else {
    return false;
  }
}


consoleLogAllElement();