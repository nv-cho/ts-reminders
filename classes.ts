// class UserClass {
//   public email: string;
//   public name: string;
//   public age: number;
//   readonly password: string = "1234";

//   constructor(email: string, name: string, age: number) {
//     this.email = email;
//     this.name = name;
//     this.age = 0;
//   }
// }

/** @desc Esta forma de definir la clase representa lo mismo que la forma de arriba */
class UserClass {
  private readonly password: string = "1234";

  /** @syntax Una sintaxis alternativa es #address */
  private address: string = "Calle falsa 123";

  /** @desc Los metodos tambien pueden ser privados */
  private resetAddress(): void {
    this.address = "Calle falsa 123";
  }

  /** La keyword protected significa, que lo que sea que este protegido es accesible por la clase a la que pertenece y a todas las clases que sean extendidas a partir de esta */
  protected changeName(newName: string): void {
    this.name = newName;
  }

  constructor(public email: string, public name: string, public age: number) {}

  /**
   * @desc Los getters y setters tienen su propia keyword para describirlos
   * @desc Se pueden utilizar los mismos para acceder a variables privadas
   */
  get getPassword(): string {
    return this.password;
  }

  /** @desc Los setters no pueden ni deben retornar nada, por lo tanto nunca se les añade el ": Type" */
  set setAddress(address: string) {
    this.address = address;
  }
}

class AnotherClass extends UserClass {
  changeMyName(): void {
    this.changeName("Santiago");
  }
}

const me = new UserClass("me@me.com", "Ignacio", 21);

/** @desc Esto generara un error ya que el campo address esta declarada como privada y eso significa que solo puede ser accedida dentro de su scope */
// @ts-expect-error
console.log(me.address);

/** ---------------------------------------------------------- */

/**
 * @desc Las clases tambien pueden implementar (una o mas) interfaces
 * @values Los valores minimamente deben ser los mismos definidos en la interface, y ademas se pueden añadir otros
 */
interface Panel {
  deleteUser(userId: number): void;
  role: string;
  name: string;
}

class Admin implements Panel {
  deleteUser(userId: number): void {
    console.log(`User ${userId} deleted`);
  }

  constructor(public name: string, public role: string, seniority: string) {}
}
