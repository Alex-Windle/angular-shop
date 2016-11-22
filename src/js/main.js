import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import { routerConfig } from "./routes";

import { LayoutController } from "./controllers/layout";

console.log("This is not a promising beginning...");

angular
  .module('app', ['ui.router', 'ngCookies'])
  .config(routerConfig)
  .controller('LayoutController', LayoutController);
