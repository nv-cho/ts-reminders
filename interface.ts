/**
 * @desc Las interfaces son utilizadas para cuando queremos describir el aspecto basico que debería tener un objeto, como sus valores y sus tipos. Solo interfiere en la definicion, no en la implementacion
 * @values La sintaxis del campo startTrial representa que es una funcion (los parentesis al final del nombre lo indican), y el tipo que viene despues de los ":" indica el tipo del valore retornado
 */

interface Usuario {
  readonly _id: number;
  email: string;
  password: string;
  googleId?: string;
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

/** @desc A esto se le llama "reopening", que consiste en añadir campos a la interface */
interface Usuario {
  role: String;
}

const miUsuario: Usuario = {
  _id: 1,
  email: "",
  password: "",
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name: "Ignacio", off: 20) => {
    return off;
  },
  role: "player",
};

interface Animal {
  name: string;
}

/** @desc Las interfaces pueden ser extendidas, heredando propiedades */
interface Bear extends Animal {
  honey: boolean;
}

const bear: Bear = { name: "Winnie", honey: true };
