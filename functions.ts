/**
 * @syntax function Name(params: Type): Type
 * @desc El segundo type se utiliza para indificar el tipo del valor retornado
 */

function addTwoNumbers(a: number, b: number): number {
  return a + b;
}

/** @syntax = const Name = (args: Type): Type */
const getHello = (name: string): string => `Hello ${name}`;

const consoleError = (error: { show: boolean; message: string }): void => {
  if (error.show) {
    console.error(error.message);
  }
};

/** @desc Se utiliza el type never cuando los valores no son observados, esto significa tirar una excepcion/error o terminar el programa */
const throwError = (error: string): never => {
  throw new Error(error);
};
