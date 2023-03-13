import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { housesService } from "../Services/HousesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawHouses() {
  const houses = appState.houses
  let template = ''
  houses.forEach(h => template += h.HouseCard)
  setHTML('listings', template)
}

function _drawHouseForm() {
  setHTML('form', House.HouseForm())
}

export class HousesController {
  constructor() {
    console.log('houses controller loaded', appState.houses);
    appState.on('houses', _drawHouses)
    // _drawHouses()
  }

  showHouses() {
    _drawHouses()
    _drawHouseForm()
  }

  createHouse() {
    event.preventDefault()
    const form = event.target
    let formData = getFormData(form)
    housesService.createHouse(formData)
    form.reset()
  }

  async deleteHouse(id) { // async await lets us create
    // if (window.confirm('are you sure you want to delete this?')) {
    //   console.log('delete car', id);
    //   carsService.deleteCar(id)
    // }
    if (await Pop.confirm('are you sure you want to delete this?')) {
      console.log('delete house', id);
      housesService.deleteHouse(id)
      Pop.toast('house deleted!', 'success')
    }
  }
}