/** @desc Las tuplas son arrays que se supone tienen un tamaño y posiciones del elemento definidas */
type Order = [number, string, boolean];

const tuple: Order = [1, "2", true];

/** @desc Se puede modificar los elementos accediendo por su index */
tuple[0] = 2;

/** @desc Se puede modificar el largo del array utilizando los metodos propios de los arrays, tener cuidado con esto*/
tuple.push(1);
tuple.push("2");
tuple.push(true);
