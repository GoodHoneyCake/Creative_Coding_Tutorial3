import { RANDOM_TEXT } from "./visual.js";

const FRICTION = 0.86;
const COLOR_SPEED = 0.12;

export class Particle {
  constructor(pos) {
    this.savedX = pos.x;
    this.savedY = pos.y;
    this.x = pos.x;
    this.y = pos.y;
    this.vx = 0;
    this.vy = 0;
    this.radius = 10;

    this.textArr = RANDOM_TEXT.split("");
    this.cur = 0;
    this.total = this.textArr.length;

    this.fps = 15;
    this.fpsTime = 1000 / this.fps;

    this.savedRgb = 0x000000;
    this.rgb = 0x000000;
  }

  collide() {}
  draw(ctx, t) {}
}
