/**
 * @desc Los enums se utilizan para definir un conjunto de valores restringido que pueden ser utilizados en el codigo
 * @desc Por defecto, si no le asignamos ningun valor a cada elemento del enum, el valor de cada elemento sera el index del elemento, empezando en 0 e incrementando
 */
enum Companies {
  GOOGLE = "GOOGLE",
  FACEBOOK = "FACEBOOK",
  AMAZON = "AMAZON",
}

const myWork = Companies.GOOGLE;

/**
 * @desc Si a un elemento del enum, le asignamos un valor numerico, el valor de los elementos siguientes seran el valor del elemento anterior + 1
 * @desc Se agrega el const adelante de la definición del enum para reducir la cantidad de codigo que es generado al compilar el codigo a Javascript puro
 */
const enum Index {
  "UNO" = 1,
  "DOS",
  "TRES",
}
