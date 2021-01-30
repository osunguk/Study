// 여기에 있는 코드들은 Quokka 익스텐션으로 실행해야 정확히 볼 수 있습니다.

let arr = [0];

function thistest() {
  console.log(this);
  console.log(this === global);
}

thistest();

console.log(this === module.exports);

arr.forEach((el) => {
  console.log(this === module.exports);
});

arr.forEach(function (el) {
  console.log(this);
  console.log(this === global);
});

setTimeout(() => {
  console.log(this);
  console.log(this === module.exports);
}, 1000);

let test = setTimeout(function () {
  console.log(this.__proto__); // timeout 객체의__proto__
  console.log(this.__proto__.prototype);
  console.log(this === test);
}, 1000);

let obj = { doggy: "bark bark" };

let test2 = setTimeout(
  function () {
    console.log(this);
    console.log(this === test2);
    console.log(test2);
  }.bind(obj),
  1000
);

// 고차함수 관련!!!!!!!!!!!!!!!!!!!
class Something {
  constructor() {
    this.temp = [0];
    this.settimeid;
  }
  setTime() {
    this.settimeid = setTimeout(function () {
      console.log(this);
      console.log(this === global);
    }, 1000);
  }
  setTime2() {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  }
  // setTime3() {
  //   setInterval(() => {
  //     console.log(this);
  //   }, 1000);
  // }
  // setTime4() {
  //   setInterval(() => {
  //     console.log(this);
  //   }, 1000);
  // }

  show1() {
    this.temp.forEach(
      function (el) {
        console.log(this);
      }.bind(this)
    );
  }
  show2() {
    this.temp.forEach((el) => {
      console.log(this);
    });
  }
  show3() {
    this.temp.forEach(function (el) {
      console.log(this);
      console.log(this === global);
    });
  }

  show4() {
    this.temp.filter(
      function (el) {
        console.log(this);
      }.bind(this)
    );
  }
  show5() {
    this.temp.filter((el) => {
      console.log(this);
    });
  }
  show6() {
    this.temp.filter(function (el) {
      console.log(this);
      console.log(this === global);
    });
  }

  show7() {
    this.temp.map(
      function (el) {
        console.log(this);
      }.bind(this)
    );
  }
  show8() {
    this.temp.map((el) => {
      console.log(this);
    });
  }
  show9() {
    this.temp.map(function (el) {
      console.log(this);
      console.log(this === global);
    });
  }

  show10() {
    this.temp.reduce(
      function (el) {
        console.log(this);
      }.bind(this),
      {}
    );
  }
  show11() {
    this.temp.reduce((el) => {
      console.log(this);
    }, {});
  }
  show12() {
    this.temp.reduce(function (el) {
      console.log(this);
      console.log(this === global);
    }, {});
  }
}
let x = new Something();
x.setTime();
x.setTime2();
// x.setTime3();
// x.setTime4();
x.show1();
x.show2();
x.show3();
x.show4();
x.show5();
x.show6();
x.show7();
x.show8();
x.show9();
x.show10();
x.show11();
x.show12();
