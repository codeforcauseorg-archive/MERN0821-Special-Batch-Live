class Human {
  static population = [];

  #name = undefined;

  constructor(naam) {
    this.#name = naam;
    this.hands = 2;
    this.money = 1000;
    Human.population.push(this);
  }

  accident = function () {
    if (this.hands > 0) {
      this.hands -= 1;
    }
  };

  party = function () {
    if (this.money >= 200) {
      this.money -= 200;
      console.log("Party party");
    } else {
      console.log("Get some money");
    }
  };

  get name() {
    // console.log("Someone tried fetching a name")
    return this.#name;
  }

  set name(value) {
      this.#name = value;
  }

}

let anuj = new Human("Anuj Garg");
// console.log(anuj.name());

let ravi = new Human("Ravi Garg");

ravi.name = "New Ravi Name";

console.log(ravi.name);

// console.log(Human.population);

// ravi.party();
// ravi.party();
// ravi.party();
// ravi.party();
// ravi.party();
// ravi.party();

// anuj.accident()

// console.log(anuj, ravi);
