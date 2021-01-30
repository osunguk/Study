function timer() {
  console.log("before func");
  let timerId = setTimeout(function () {
    console.log(this);
    console.log("setTimeout func");
    console.log(this.__proto__);
    console.log(this.__proto__.__proto__);
    console.log(setTimeout.prototype);
    console.log(setTimeout.toString());
    console.log(this.__proto__ === setTimeout.prototype);
  }, 1000); // 1000 millisecond === 1 second
  console.log(timerId);
  console.log("after func");
  console.log(timerId.__proto__);
  console.log(setTimeout.prototype);
}

timer();

// 출력 결과
// before func
// after func
// setTimeout func => queue 에 쌓여서 call stack 이 모두 비워지면 코드가 돈다.
/* 타임아웃을 받아서 출력하면 아래와 같이 나온다.
Timeout {
  _idleTimeout: 1000,
  _idlePrev: [TimersList],
  _idleNext: [TimersList],
  _idleStart: 28,
  _onTimeout: [Function (anonymous)],
  _timerArgs: undefined,
  _repeat: null,
  _destroyed: false,
  [Symbol(refed)]: true,
  [Symbol(asyncId)]: 5,
  [Symbol(triggerId)]: 1
} */
function timerRepeat() {
  let timerId = setInterval(() => {
    console.log("1초마다 실행");
  }, 1000);
  console.log(timerId);
}
// timerRepeat();
