class Person {
  static population = 0; // 스태틱 변수 선언
  // 모든 인스턴스가 공유하는 프로퍼티
  // population = Person.prototype.population || 1;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    Person.population++; // 여기서 스테틱 변수 증가
    Person.prototype.population = Person.population;
    // this.Populaion++;
    // Person.prototype.population = this.population;
    // Person.prototype.population = this.population++;
    // this.inceasePopulation();
  }

  inceasePopulation() {
    if (Person.prototype.population) {
      Person.prototype.population++;
    } else {
      Person.prototype.population = 2;
    }
  }

  introduce() {
    console.log(
      `안녕하세요 제 이름은 ${this.name} 이구요. 나이는 ${this.age} 살입니다.`
    );
  }
}

let osk = new Person("오성국", 20);
console.log(Person.population);

module.exports = Person;
