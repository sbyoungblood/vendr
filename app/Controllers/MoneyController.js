import { appState } from "../AppState.js";
import { sodasService } from "../Services/SodasService.js";

export class MoneyController{
  constructor(){
  
    console.log('money controller is working');
  }

  increaseCoins(){
    sodasService.increaseCoins()
  }

}