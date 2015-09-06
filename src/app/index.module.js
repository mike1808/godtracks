/* global malarkey:false, toastr:false, moment:false */
import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import MainController from './main/main.controller';
import NavbarDirective from '../app/components/navbar/navbar.directive';

import Tracks from '../app/components/tracks/tracks.module.js'

angular
  .module('godtracks', [
    'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngAria', 'restangular', 'ui.router',
    'ngMaterial', 'ngStorage',
    Tracks
  ])
  .constant('toastr', toastr)
  .constant('moment', moment)
  .config(config)

  .config(routerConfig)

  .run(runBlock)
  .controller('MainController', MainController)
  .directive('gtNavbar', () => new NavbarDirective());
