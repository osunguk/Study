function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function () {
  console.log(
    `안녕하세요 제 이름은 ${this.name} 이구요. 나이는 ${this.age} 살입니다.`
  );
};

// let osk = new Person("오성국", 20);
// osk.introduce();

module.exports = Person;
