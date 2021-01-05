import { Text } from "./text.js";
import { Particle } from "./particle.js";

export const RANDOM_TEXT = "ABCMNRSTUXZ";

export class Visual {
  constructor() {
    this.text = new Text();

    this.textArr = RANDOM_TEXT.split("");

    this.particles = [];

    this.mouse = {
      x: 0,
      x: 0,
      radius: 100,
    };
    document.addEventListener("pointermove", this.onMove.bind(this), false);
  }
}
