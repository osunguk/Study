// Currying은 여러 개의 인자를 가진 함수를 호출 할 경우, 파라미터의 수보다 적은 수의 파라미터를 인자로 받으면 누락된 파라미터를 인자로 받는 기법을 말한다.
// 출저 : https://yceffort.kr/2020/03/javascript-currying-closure 가 참고한 곳 => https://www.sitepoint.com/currying-in-functional-javascript/

function curring(x, y, z) { // 커링을 잘 못 사용한 예
  return function inner() {
    return `first argt : ${x} second argt : ${y} third argt : ${z}`;
  }
}

const oneArmt = curring(1);
console.log(oneArmt());

const twoArmt = curring(1, 2);
console.log(twoArmt());

const threeArmt = curring(1, 2, 3);
console.log(threeArmt());


function curring2(x) { // 커링을 잘 사용한 예
  return function inner(y) {
    return function ininner(z) {
      return `first argt : ${x} second argt : ${y} third argt : ${z}`;
    }
  }
}

const oneArmt2 = curring2(1);
console.log(oneArmt2(2)(3));

const twoArmt2 = curring2(1)(2);
console.log(twoArmt2(3));

const threeArmt2 = curring2(1)(2)(3);
console.log(threeArmt2);

// 여러개의 인자를 가지는 함수를 내부적으로 커링을 이용해 나눔으로써 유연하게 파라미터를 받아올 수 있다.
// 단점 : 함수를 실행시키기위해 다소 복잡한 함수실행문을 작성해야한다.

const curryIt = function(uncurried) {
  const parameters = Array.prototype.slice.call(arguments, 1);
  return function() {
    return uncurried.apply(this, parameters.concat(
      Array.prototype.slice.call(arguments, 0)
    ));
  };
};

const greeter = function(greeting, separator, emphasis, name) {
  console.log(greeting + separator + name + emphasis);
};
const greetHello = curryIt(greeter, "Hello", ", ", ".");
console.log(greetHello);
console.log(greetHello("Heidi")); //"Hello, Heidi."
console.log(greetHello("Eddie"));  //"Hello, Eddie."

// quokka 에서는 undefined 가 뜨지만 크롬 콘솔창에선 정상적으로 출력된다
// 번거롭게 ()()()를 쓸필요없이 내부적으로 남은 파라미터를 받는 함수를 생성해준다
// 코드가 어떻게 돌아가는지 지금은 알 수 없지만 해결할 수 있는 방법이 있다는 것으로 만족한다.
