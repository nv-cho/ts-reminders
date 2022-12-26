/**
 * @desc Las clases abstractas pueden servir como molde para las clases que van a ser extendidas a partir de estas, no se pueden crear nuevas clases a partir de una clase abstracta, solo extenderla
 */
abstract class Camera {
  constructor(public cameraMode: string, public filter: string) {}

  /** @desc Tambien se pueden definir metodos abstractos */
  abstract takePicture(): void;

  set setFilter(filter: string) {
    this.filter = filter;
  }
}

class CameraClass extends Camera {
  constructor(public cameraMode: string, public filter: string, public burstMode: boolean) {
    super(cameraMode, filter);
  }

  takePicture(): void {
    console.log("Picture taken");
  }
}

const myCamera = new CameraClass("normal", "sepia", true);
myCamera.setFilter = "black and white";
