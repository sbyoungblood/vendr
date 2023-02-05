import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";
import { Soda } from "../Models/Soda.js";

// SECTION private functions

function _drawSodasSelection(){
  let sodas = appState.sodas
  let template = ''

  sodas.forEach(s => template += s.selectionTemplate)
  setHTML('soda-selection', template)
}






export class SodasController{
  constructor(){
    _drawSodasSelection()
    console.log('soda controller is working.');
  }
}