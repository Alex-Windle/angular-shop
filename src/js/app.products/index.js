import angular from 'angular';

import { ProductsController } from "./controllers/products";

angular
  .module('app.products', [])
  .controller('ProductsController', ProductsController);
