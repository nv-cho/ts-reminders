const score: number | string = 10;

const game = (score: number | string) => {
  console.log(`Your score is ${score}`);
};

type Player = {
  _id: string;
  name: string;
};

type Player2 = {
  _id: string;
  name: string;
  age: number;
};

const bestPlayer: Player | Player2 = {
  _id: "123",
  name: "name",
  age: 0,
};

const returnBestPlayer = (player: Player | Player2): Player | Player2 => {
  return player;
};

const mixedArray: (string | number | boolean)[] = [1, "2", true];

const differentValues: 1 | 2 | 3 | 4 | 5 = 1;
