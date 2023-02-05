import { MoneyController } from "./Controllers/MoneyController.js";
import { SodasController } from "./Controllers/SodasController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  moneyController = new MoneyController();
  sodasController = new SodasController();
}

window["app"] = new App();
