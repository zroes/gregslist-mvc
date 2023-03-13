import { appState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { carsService } from "../Services/CarsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

// SECTION private 
function _drawCars() {
  const cars = appState.cars
  let template = ''
  cars.forEach(car => template += car.CarCard)
  setHTML('listings', template)
}

function _drawCarForm() {
  setHTML('form', Car.CarForm())
}


// SECTION Public 
export class CarsController {
  constructor() {
    console.log('cars loaded', appState.cars);
    // _drawCars()
    appState.on('cars', _drawCars) // listen to the key 'cars' on appstate, and run _drawCars when it changes
    // console.log(Object.keys(localStorage))
    // document.querySelector('input[type="password"]').addEventListener('keydown', (k) => console.log(k.key)) password logger
  }

  showCars() {
    _drawCars()
    _drawCarForm()
  }

  createCar() {
    event.preventDefault()
    console.log('creating a car')
    const form = event.target // the target is the element that triggered this function
    console.log(form);
    console.log(form.make.value, form.model.value, form.color.value); // how to grab data from a form
    // NOTE your form inputs must contain names, that match these 'make model color' and value is what gets the users inputed data
    // const formData= {
    //   make: form.make.value,
    //   model: form.model.value,
    //   year: from.model.year
    // } We could build an object collecting all the data from the form
    let formData = getFormData(form) // when passing in a form element, will extract the inputs and assemble into a POJO 
    console.log(formData);
    carsService.createCar(formData)
    form.reset() // this show an error cause js doesn't know that event.target is coming from a form (it could come from any element in theory)
  }

  async deleteCar(id) { // async await lets us create
    // if (window.confirm('are you sure you want to delete this?')) {
    //   console.log('delete car', id);
    //   carsService.deleteCar(id)
    // }
    if (await Pop.confirm('are you sure you want to delete this?')) {
      console.log('delete car', id);
      carsService.deleteCar(id)
      Pop.toast('car deleted!', 'success')
    }
  }
}