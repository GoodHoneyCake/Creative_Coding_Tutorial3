import { Visual } from "./visual.js";

class App {
  constructor() {
    WebFont.load({
      google: {
        families: ["Hind:700"],
      },
      fontactive: () => {
        this.visual = new Visual();
      },
    });
  }
}

window.onload = () => {
  new App();
};
