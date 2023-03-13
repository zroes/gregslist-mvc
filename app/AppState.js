import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Jobs.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  // NOTE the type is Car but the [] tells it that it is an array of cars
  /** @type {import('./Models/Car').Car[]} */
  // cars = [
  //   new Car({ make: 'toyota', model: 'tacoma', year: 2025, color: '#000', description: "It's so new, it doesn't exist yet", img: 'https://trailtacoma.com/wp-content/uploads/2022/03/Taco_Tuesday_Midnight_Black_tacoma07.jpg', price: 5 }),
  //   new Car({ make: 'Subaru', model: 'tsunami', year: 2027, color: '#16161d', description: "Cool car, cool color", img: 'https://www.cnet.com/a/img/resize/d028f516616211e789c534381db4ddcb742a3f0b/hub/2019/03/06/a84a4a02-09a1-4616-809d-3ca4c63fede1/subaru-viziv-adrenaline-concept-geneva-2019.jpg?auto=webp&fit=crop&height=675&width=1200', price: 12 })
  // ] DONE WITH TEST DATA moving to local

  cars = loadState('cars', [Car])

  /** @type {import('./Models/House').House[]} */
  houses = loadState('houses', [House])


  /** @type {import('./Models/Jobs').Job[]} */
  // jobs = loadState('jobs', [Job])
  jobs = [new Job({ title: "help wanted", description: "please hurry", wage: 12.50, category: 'temp' })]


  // NOTE super weird type case as an example
  /** @type {[Number, String, Number]} */
  example
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
