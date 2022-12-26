type User = {
  readonly _id: string;
  name: string;
  age: number;
};

/** @desc El campo creditCard es opcional, ya que tiene el "?" al final del nombre */
type User2 = {
  readonly _id: string;
  name: string;
  age: number;
  creditCard?: string;
};

const myUser: User = {
  _id: "123",
  name: "name",
  age: 0,
};

/**
 * @error Esto lleva a un error, ya que el campo _id fue marcado como readonly
 */
// @ts-expect-error
myUser._id = "456";
