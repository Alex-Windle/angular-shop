import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import { routerConfig } from "./routes";

import { LayoutController } from "./controllers/layout";
import { RegisterController } from "./controllers/register";
import { LoginController } from "./controllers/login";
import { OrdersController } from "./controllers/orders";

import { UserService } from "./services/user";

angular
  .module('app', ['ui.router', 'ngCookies'])
  .config(routerConfig)
  .controller('LayoutController', LayoutController)
  .controller('RegisterController', RegisterController)
  .controller('LoginController', LoginController)
  .controller('OrdersController', OrdersController)
  .service('UserService', UserService);
