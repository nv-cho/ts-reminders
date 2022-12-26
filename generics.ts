/**
 * @desc Los generics nos permiten hacer nuestros componentes o funciones mas reutilizables, al permitirles ser de diferentes tipos en vez de uno solo
 * @syntax Si un generico esta definido asi: <T,> significa que es un generico, y la coma es para aclarar que no es un componente JSX, si no, un generico
 */

const functionOne = (arg: any): any => {
  return arg;
};

/** @desc La diferencía entre la funcion 1 y 2 es que el argumento que reciba va a determinar el tipo de generic que aplica en toda la funcion */
const functionTwo = <T>(arg: T): T => {
  return arg;
};

functionTwo("Hello"); // Recibe string y devuelve string

interface Interface {
  name: string;
  age: number;
}

const functionThree = <T>(arg: T): T => {
  return arg;
};

functionThree({ name: "Ignacio", age: 20 }); // Recibe Interface y devuelve Interface

/** @syntax Sintaxis para recibir como argumento un array del generic, al retornar un elemento del array, esta devolviendo el tipo del generico y por ello no hay errores */
const functionFour = <T>(arg: T[]): T => {
  return arg[0];
};

functionFour(["Hello", "World"]); // Recibe string[] y devuelve string

/** @syntax Sintaxis para implementar multiples generics en una funcion */
const functionFive = <T, U>(arg1: T, arg2: U): T | U => {
  if (typeof arg1 === "string") {
    return arg1;
  } else {
    return arg2;
  }
};

functionFive("Hello", 20); // Recibe string y number y devuelve string | number

interface Interface {
  name: string;
  age: number;
}

/** @desc Los generics pueden extenderse de interfaces */
const functionSix = <T extends Interface>(arg: T): T => {
  return arg;
};

functionSix({ name: "Ignacio", age: 20 }); // Recibe Interface y devuelve Interface

interface Course {
  name: string;
  price: number;
}

interface Teacher {
  name: string;
  type: string;
}

/** @desc Los generics pueden implementarse en clases */
class School<T, U> {
  public courses: T[] = [];
  public teachers: U[] = [];

  addCourse(course: T): void {
    this.courses.push(course);
  }

  addTeacher(teacher: U): void {
    this.teachers.push(teacher);
  }
}

const school = new School<Course, Teacher>();
school.addCourse({ name: "Math", price: 20 });
school.addTeacher({ name: "Ignacio", type: "Math" });
