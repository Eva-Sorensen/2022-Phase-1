// Question 1 Complete the function below to return the sum of the two numbers.
function sumTwoNumbers(x: number, y: number): number {
  return x + y;
}

// Question 2 Create a enum type called HairColor with the following values:
// - 'brown'
// - 'black'
// - 'blonde'
// - 'red'
enum HairColor {
  black = "black",
  blonde = "blonde",
  brown = "brown",
  red = "red",
}

// Question 3 Construct a Student class with the following properties:
// name (string)
// age (number)
class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  getName(): string {
    return this._name;
  }
  getAge(): number {
    return this._age;
  }
  setName(value: string) {
    this._name = value;
  }
  setAge(value: number) {
    this._age = value;
  }

  get name(): string {
    return this._name;
  }
  get age(): number {
    return this._age;
  }
  set name(value: string) {
    this._name = value;
  }
  set age(value: number) {
    this._age = value;
  }
}

// Question 4 Create a class called Person extending the Student class with the following properties:
// - name
// - age
// - hairColor
class Student extends Person {
  private _hairColor: HairColor;

  constructor(name: string, age: number, hairColor: HairColor) {
    super(name, age);
    this._hairColor = hairColor;
  }

  getHairColor(): HairColor {
    return this._hairColor;
  }
  setHairColor(value: HairColor) {
    this._hairColor = value;
  }

  get hairColor(): HairColor {
    return this._hairColor;
  }
  set hairColor(value: HairColor) {
    this._hairColor = value;
  }
}

// Question 5 Create a Interface called PersonInterface with the following properties:
// - name
// - age (optional)
interface PersonInterface {
  name: string;
  age?: number;
}

// Question 6 Create a Generic function to sort arrays of any type and concat them together. Any duplicates should be removed.
function sortAndConcat<T>(arr1: T[], arr2: T[]) {
  return [...new Set(arr1.concat(arr2).sort(compareValue))];
}

function compareValue<T>(item1: T, item2: T): -1 | 1 | 0 {
  if (item1 > item2) {
    return 1;
  }
  if (item1 < item2) {
    return -1;
  }
  return 0;
}

// Export the functions above so that they can be used in the tests.
// Do not change the code below.
export {
  sumTwoNumbers,
  HairColor,
  Student,
  Person,
  PersonInterface,
  sortAndConcat,
};
