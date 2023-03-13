import { generateId } from "../Utils/generateId.js"



export class Job {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.description = data.description
    this.categoryURL = this.computeCategory(data.category)
    // this.category = data.category
    this.wage = data.wage
  }

  get jobCard() {
    return `
    <div class="col-6 col-md-4">
      <div class="card elevation-2">
        <img class="rounded"
          src="${this.categoryURL}" alt="${this.title}" title="${this.title}">
        <div class="p-2">
          <h2 class="text-center">${this.title}</h2>
          <p>${this.description}</p>
          <p class="text-end">💲${this.wage} / hr</p>
          <button class="btn btn-outline-danger" title="delete car" onclick="app.housesController.deleteHouse('${this.id}')"><i class="mdi mdi-delete" ></i></button>
        </div>
      </div>
    </div>`
  }


  computeCategory(category) {
    if (category == 'temp')
      return "https://gisuser.com/wp-content/uploads/2020/11/2020-11-03_14-33-38.png"
    else if (category == 'construction')
      return "https://www.samuelsgroup.net/hubfs/Images/Blog%20Images/5%20Types%20of%20Construction.jpg"
    return "https://www.newcitymovers.com/content/uploads/2018/04/moving-boxes.jpg"
  }

  // NOTE this didn't work
  // static catergoryPictures = {
  //   moving: "https://www.newcitymovers.com/content/uploads/2018/04/moving-boxes.jpg",
  //   construction: "https://www.samuelsgroup.net/hubfs/Images/Blog%20Images/5%20Types%20of%20Construction.jpg",
  //   temp: "https://gisuser.com/wp-content/uploads/2020/11/2020-11-03_14-33-38.png"
  // }

  static jobForm() {
    return `
    <form onsubmit="app.housesController.createHouse()" class="row bg-white rounded elevation-2 p-4">
      <h3>Post a Job Listing</h3>
      <div class="mb-2 col-12">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" class="form-control" placeholder="Enter a title...">
      </div>
      <div class="mb-2 col-12">
        <label for="catergory">Job Catergory:</label>
        <select class="form-select" name="catergory" id="catergory" required>
          <option value="moving">Moving</option>
          <option value="construction">Construction</option>
          <option value="temp">Temporary Hire</option>
        </select>
      </div>
      <div class="mb-2 col-12">
        <label for="description">Description</label>
        <input type="text" name="description" id="description" class="form-control" maxlength="500"
          placeholder="100 character max">
      </div>
      <div class="mb-2 col-6">
        <label for="wage">Wage</label>
        <input type="number" name="wage" id="wage" class="form-control" required min="7.25" placeholder="$">
      </div>
      <div class="text-end mt-2">
        <button class="btn" type="button">cancel</button>
        <button class="btn btn-primary" type="submit">submit</button>
      </div>
    </form>`
  }
}
