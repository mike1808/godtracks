import TracksController from './tracks.controller.js'
import TracksService from './tracks.service.js'

let moduleName = angular
  .module('godtrack.tracks', [])
  .service('Tracks', TracksService)
  .controller('TracksController', TracksController)
  .name;


export default moduleName;
