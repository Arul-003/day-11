class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}
const date = new Date();
let year = date.getFullYear();
const myCar = new Car("Ford", 2014);
document.getElementById("demo0").innerHTML="My car is " + myCar.age(year) + " years old.";

class Cars {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

const myCars = new Cars("Ford");

document.getElementById("demo1").innerHTML = myCars.cnam;

class Carss {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x.name;
  }
}

const myCarss = new Carss("Ford");
document.getElementById("demo2").innerHTML = Carss.hello(myCarss);