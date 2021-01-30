function test() {
  console.log(this);
}

let test2 = () => {
  console.log(this);
};

let obj = {
  test,
  test2,
};

console.log(this);
obj.test(); // obj
console.log("------");
test();
console.log("------");
obj.test2(); //
console.log("------");
test2();
console.log("------test");
test2.call();
console.log("------test2");
test2.apply();

// const obj = {
//   test1: function () {
//     return function temp() {
//       return this;
//     };
//   },
//   test2: function () {
//     return this;
//   },
// };

// console.log(obj.test1()()); // global
// console.log("------");
// console.log(obj.test2()); // obj

// console.log(this);
// let x = () => {
//   console.log(this);
// }
// let y = function() {
//   console.log(this);
// }
// x();
// y();

// function makeConter() {
//   return {
//     value: 0,
//     increase: function() {
//       this.value++;
//     },
//     decrease: function() {
//       this.value--;
//     },
//     getValue: function() {
//       console.log(this.value);
//       return this.value;
//     }
//   }
// }

// let counter1 = makeConter();
// let counter2 = makeConter()

// counter1.increase();
// counter1.increase();
// counter1.increase();
// counter1.getValue();

// counter2.decrease();
// counter2.decrease();
// counter2.decrease();
// counter2.getValue();

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   getArea() {
//     return this.width * this.height;
//   }

//   printArea = () => {
//     console.log(this);
//     console.log("사각형의 넓이는 " + this.getArea() + " 입니다");
//   };

//   printSync() {
//     // 즉시 사각형의 넓이를 콘솔에 표시합니다
//     this.printArea();
//   }

//   printAsync() {
//     // 1초 후 사각형의 넓이를 콘솔에 표시합니다
//     let self = this;
//     setTimeout(() => {
//       console.log(this);
//       // this.printArea()
//     }, 1000);
//   }
// }

// let box = new Rectangle(40, 20)
// box.printSync() // '사각형의 넓이는 800 입니다'
// // box.printAsync() // 에러 발생!

// setTimeout(() => {
//   console.log(this);
// }, 1000);

// setTimeout(function(){
//   console.log(this);
//   console.log(this === global)
// }, 2000);

let obj = {
  test: function () {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  },
  test2: function () {
    setTimeout(function () {
      console.log(this);
      console.log(this === global);
    }, 2000);
  },
};

obj.test();
obj.test2();
