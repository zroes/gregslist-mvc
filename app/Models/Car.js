import { generateId } from "../Utils/generateId.js"


export class Car {
  constructor(data) {
    this.id = generateId() // randomly assign an id on created
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.color = data.color
    this.img = data.img
    this.description = data.description
    this.price = data.price
  }

  get CarCard() {
    return `
    <div class="col-6 col-md-4">
      <div class="card elevation-2">
        <img class="rounded"
          src="${this.img}" alt="${this.make}-${this.model}" title="${this.model}">
        <div class="p-2">
          <h5 class="text-center border-bottom border-dark">${this.make} ${this.model} | ${this.year}</h5>
          <div class="color px-5 rounded" style="background: ${this.color}" >color</div>
          <p>${this.description}</p>
          <p class="text-end">💲${this.price}</p>
          <button class="btn btn-outline-danger" title="delete car" onclick="app.carsController.deleteCar('${this.id}')"><i class="mdi mdi-delete" ></i></button>
        </div>
      </div>
    </div>
    `
  }

  // statics exist on the definition of the class, not on the instance
  static CarForm() {
    return ` 
  <form onsubmit="app.carsController.createCar()" class="row bg-white rounded elevation-2 p-4">
    <h3>List a Car</h3>
    <div class="mb-2 col-4">
      <label for="make">Make</label>
      <input type="text" name="make" id="make" class="form-control" placeholder="eg: Ford">
    </div>
    <div class="mb-2 col-4">
      <label for="model">Model</label>
      <input type="text" name="model" id="model" class="form-control" required minlength="3" maxlength="10"
        placeholder="eg: F-150">
    </div>
    <div class="mb-2 col-4">
      <label for="year">Year</label>
      <input type="number" name="year" id="year" class="form-control" required max="2024">
    </div>
    <div class="mb-2 col-12">
      <label for="img">Image URL</label>
      <input type="url" name="img" id="img" class="form-control" required
        placeholder="please enter a url for an image...">
    </div>
    <div class="mb-2 col-12">
      <label for="description">Description</label>
      <input type="text" name="description" id="description" class="form-control" maxlength="100"
        placeholder="100 character max">
    </div>
    <div class="mb-2 col-6">
      <label for="color">Color</label>
      <input type="color" name="color" id="color" class="form-control" required value="#4747ff">
    </div>
    <div class="mb-2 col-6">
      <label for="price">Price</label>
      <input type="number" name="price" id="price" class="form-control" required min="1">
    </div>
    <div class="text-end mt-2">
      <button class="btn" type="button">cancel</button>
      <button class="btn btn-primary" type="submit">submit</button>
    </div>
  </form>`
  }


}