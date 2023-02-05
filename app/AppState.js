import { Soda } from "./Models/Soda.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])
  /** @type {import('./Models/Soda').Soda[]} */
  
  sodas = [
    new Soda({
      name: 'coke',
      price: 0.75,
      imgUrl: 'https://tinyurl.com/24yqnc5f'
    }),
    new Soda({
      name: 'pepsi',
      price: 0.75,
      imgUrl: 'https://tinyurl.com/28ngqjfb'
    })
  ]
  coins = 0
}
  
  export const appState = new Proxy(new AppState(), {
    get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
