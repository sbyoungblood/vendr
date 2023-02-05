import { appState } from "../AppState.js"

appState


class SodasService {

  increaseCoins(){
    appState.coins += .25
    console.log(appState.coins);
  }

}

export const sodasService = new SodasService()