const numbersArray: number[] = [1, 2, 3, 4, 5];

const stringsArray: string[] = ["1", "2", "3", "4", "5"];

const ArraysArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

/** @syntax const Name: Array<Type> */
const alternativeSyntaxis: Array<number> = [1, 2, 3, 4, 5];

type Person = {
  _id: string;
  name: string;
};

const users: Array<Person> = [];
