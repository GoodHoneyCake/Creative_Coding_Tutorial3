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
      },
    });
  }
}

window.onload = () => {
  new App();
};
