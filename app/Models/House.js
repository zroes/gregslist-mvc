import { generateId } from "../Utils/generateId.js"



export class House {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.baths = data.baths
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgURL = data.imgURL
  }


  get HouseCard() {
    return `
    <div class="col-6 col-md-4">
      <div class="card elevation-2">
        <img class="rounded"
          src="${this.imgURL}" alt="${this.title}" title="${this.sqft}">
        <div class="p-2">
          <h2 class="text-center">${this.title}</h2>
          <h5 class="text-center border-bottom border-dark">${this.year} ${this.bedrooms} beds | ${this.baths} baths</h5>
          <p>${this.description}</p>
          <p class="text-end">💲${this.price}</p>
          <button class="btn btn-outline-danger" title="delete car" onclick="app.housesController.deleteHouse('${this.id}')"><i class="mdi mdi-delete" ></i></button>
        </div>
      </div>
    </div>`
  }

  static HouseForm() {
    return `
    <form onsubmit="app.housesController.createHouse()" class="row bg-white rounded elevation-2 p-4">
      <h3>List a House</h3>
      <div class="mb-2 col-12">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" class="form-control" placeholder="Enter a title...">
      </div>
      <div class="mb-2 col-4">
        <label for="year">Year</label>
        <input type="number" name="year" id="year" class="form-control" required min=0 max=2023
          placeholder="When was your house built?">
      </div>
      <div class="mb-2 col-4">
        <label for="bedrooms">Bedrooms</label>
        <input type="number" name="bedrooms" id="bedrooms" class="form-control" required min=0
          placeholder=" # of bedrooms">
      </div>
      <div class="mb-2 col-4">
        <label for="baths">Bathrooms</label>
        <input type="number" name="baths" id="baths" class="form-control" required min=0
          placeholder=" # of bathrooms">
      </div>
      <div class="mb-2 col-12">
        <label for="imgURL">Image URL</label>
        <input type="url" name="imgURL" id="imgURL" class="form-control" required
          placeholder="Please enter a url for an image...">
      </div>
      <div class="mb-2 col-12">
        <label for="description">Description</label>
        <input type="text" name="description" id="description" class="form-control" maxlength="500"
          placeholder="100 character max">
      </div>
      <div class="mb-2 col-6">
        <label for="sqft">Square Footage</label>
        <input type="text" name="sqft" id="sqft" class="form-control">
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