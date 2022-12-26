/**
 * @desc La etiqueta alias es sencillamente un nombre para cualquier tipo, en caso de que lo queramos usar reiteradas veces
 * @desc Los types no pueden ser cambiados una vez que son creados (no se pueden modificar los valores de los campos), pero si pueden ser extendidos
 */
type objectType = {
  name: string;
  age: number;
};

const returnObject = (args: objectType): objectType => {
  return args;
};

returnObject({ name: "name", age: 0 });

type cardNumber = {
  number: number;
};

type cardCode = {
  code: number;
};

/** @desc Los types se pueden unir y combinarse (extenderse), generando un nuevo type */
type cardDetails = cardNumber & cardCode;
