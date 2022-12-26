/** @desc El narrowing consiste en identificar exactamente el tipo */

// 1. Narrowing con type guards
const function1 = (args: string | number) => {
  if (typeof args === "string") {
    return "Hello " + args;
  }
  if (typeof args === "number") {
    return args + 3;
  }
};

// 2. Narrowing con instanceof
class Human {
  constructor(public name: string) {}
}

class Animal {
  constructor(public name: string) {}
}

const function2 = (args: Human | Animal) => {
  if (args instanceof Human) {
    return "Hello " + args.name;
  }
  if (args instanceof Animal) {
    return args.name + " says hello";
  }
};

// 3. Narrowing con in
interface Human {
  name: string;
  age: number;
}

interface Animal {
  name: string;
  legs: number;
}

const function3 = (args: Human | Animal) => {
  if ("age" in args) {
    return args.age;
  }
  if ("legs" in args) {
    return args.legs;
  }
};

// 4. Narrowing con type predicates
interface Human {
  name: string;
  age: number;
}

interface Animal {
  name: string;
  legs: number;
}

const isHuman = (args: Human | Animal): args is Human => {
  return "age" in args;
};

const function4 = (args: Human | Animal) => {
  if (isHuman(args)) {
    return args.age;
  }
  return args.legs;
};

//5. Narrowing con exhaustive checking
interface Dog {
  type: string;
}

interface Fish {
  type: string;
}

interface Butterfly {
  type: string;
}

type Specie = Dog | Fish | Butterfly;

const function5 = (args: Specie) => {
  switch (args.type) {
    case "dog":
      return args.type;
    case "fish":
      return args.type;
    case "butterfly":
      return args.type;
    default:
      const _exhaustiveCheck: never = args;
      return _exhaustiveCheck;
  }
};
