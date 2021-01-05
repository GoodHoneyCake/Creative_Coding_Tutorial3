import { Text } from "./text.js";
import { Particle } from "./particle.js";

export const RANDOM_TEXT = "ABCMNRSTUXZ";

export class Visual {
  constructor() {
    this.text = new Text();

    this.textArr = RANDOM_TEXT.split("");
  }
}
