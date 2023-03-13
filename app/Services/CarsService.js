import { appState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { saveState } from "../Utils/Store.js";

function _saveCars() {
  saveState('cars', appState.cars)
}

class CarsService {
  createCar(formData) {
    let car = new Car(formData)
    // console.log('creating car in service', car);
    appState.cars.push(car)
    // appState.cars = appState.cars
    // appState.cars = [...appState.cars, car]
    appState.emit('cars')
    // console.log(appState.cars);
    _saveCars()
  }
  deleteCar(id) {
    // let car = appState.cars.find(c => c.id == id)
    // console.log(car);

    let filterd = appState.cars.filter(c => c.id != id)
    console.log('filtered', filterd);
    appState.cars = filterd
    _saveCars()
    // appState.emit('cars')
  }

}

export const carsService = new CarsService()