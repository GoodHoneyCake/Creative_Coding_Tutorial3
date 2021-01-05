import { Visual } from "./visual.js";

class App {
  constructor() {
    WebFont.load({
      google: {
        families: ["Hind:700"],
      },
      fontactive: () => {
        this.visual = new Visual();

        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
      },
    });
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;
  }
}

window.onload = () => {
  new App();
};
