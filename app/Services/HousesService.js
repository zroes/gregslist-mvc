import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { saveState } from "../Utils/Store.js"


function _saveHouses() {
  saveState('houses', appState.houses)
}


class HousesService {
  createHouse(formData) {
    console.log(formData)
    let house = new House(formData)
    appState.houses.push(house)
    appState.emit('houses')
    _saveHouses()
  }

  deleteHouse(id) {
    let filtered = appState.houses.filter(house => house.id != id)
    console.log(filtered)
    appState.houses = filtered
    _saveHouses()
  }
}

export const housesService = new HousesService()

