
// 1. Crea una clase que reciba dos propiedades
class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}

// 2. Añade un método a la clase que utilice las propiedades
class Car extends Vehicle {
  constructor(brand, model, year) {
    super(brand, model);
    this.year = year;
  }

  describe() {
    return `${this.brand} ${this.model} (${this.year})`;
  }
}

const myCar = new Car('Toyota', 'Corolla', 2022);
console.log(myCar.describe());

// 3. Muestra los valores de las propiedades e invoca a la función
console.log(myCar.brand, myCar.model, myCar.year);
console.log(myCar.describe());

// 4. Añade un método estático a la primera clase
class StaticVehicle {
  static info() {
    return 'Vehículo genérico';
  }
}

// 5. Haz uso del método estático
console.log(StaticVehicle.info());

// 6. Crea una clase que haga uso de herencia
class ElectricCar extends Car {
  constructor(brand, model, year, battery) {
    super(brand, model, year);
    this.battery = battery;
  }
}

// 7. Crea una clase que haga uso de getters y setters
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const person = new Person('Ana');
console.log(person.name);
person.name = 'Luis';
console.log(person.name);

// 8. Modifica la clase con getters y setters para que use propiedades privadas
class BankAccount {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  get balance() {
    return this.#balance;
  }

  set balance(value) {
    if (value >= 0) this.#balance = value;
  }
}

const account = new BankAccount(1000);
console.log(account.balance);
account.balance = 1500;
console.log(account.balance);

// 9. Utiliza los get y set y muestra sus valores
const accountOwner = new Person('Marta');
console.log(accountOwner.name);
accountOwner.name = 'Martha';
console.log(accountOwner.name);

// 10. Sobrescribe un método de una clase que utilice herencia
class Animal {
  speak() {
    return 'Sonido genérico';
  }
}

class Leon extends Animal {
  speak() {
    return 'ROAR';
  }
}

const lion = new Leon();
console.log(lion.speak()); 