import { appState } from "../AppState.js"
import { Job } from "../Models/Jobs.js"
import { setHTML } from "../Utils/Writer.js"

export class JobsController {



  showJobs() {
    _drawJobs()
    _drawJobForms()
  }
}

function _drawJobs() {
  let template = ''
  appState.jobs.forEach(job => template += job.jobCard);
  setHTML('listings', template)
}

function _drawJobForms() {
  setHTML('form', Job.jobForm())
}
